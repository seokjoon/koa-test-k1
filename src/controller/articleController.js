import Article from '../models/Article.js'
import articleSeed from '../seed/articleSeed.js'
import sanitizedHtml from 'sanitize-html'


const fixHtml = content => {
  const filtered = sanitizedHtml(content, { allowedTags: [], })
  return ((filtered.length < 200) ? (filtered) : (filtered.slice(0, 200) + '...'))
}

const fixHtmlOption = {
  allowedTags: [],
  allowedAttributes: [],
  allowedSchemes: [],
}

const reqs = ctx => {
  ctx.body = {
    body: ctx.request.body,
    method: ctx.method,
    params: ctx.params,
    path: ctx.path,
  }
}


const articleController = {}


articleController.create = async ctx => {
  const { content, tags, title, } = ctx.request.body
  const article = new Article({
    content: fixHtml(content, fixHtmlOption),
    tags,
    title,
    user: ctx.state.user,
  })
  try {
    await article.save()
    ctx.body = article
  } catch (e) { ctx.throw(500, e) }
}


articleController.destroy = async ctx => {
  const { id } = ctx.params
  try {
    await Article.findByIdAndRemove(id).exec()
    ctx.status = 204 //no content
  } catch (e) { ctx.throw(500, e) }
}


articleController.getReq = ctx => reqs(ctx)


articleController.read = async ctx => {
  // const { id } = ctx.params
  // const article = await Article.findById(id).exec()
  // if (!(article)) return ctx.status = 404
  // ctx.body = article
  ctx.body = ctx.state.article
}


articleController.reads = async ctx => { // console.log(ctx.query)
  const { tag, username } = ctx.query; //console.log(ctx.query)
  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag }: {}),
  }
  const page = parseInt(ctx.query.page || 1)
  const limit = parseInt(ctx.query.limit || 10)

  const articles = await Article.find(query)
    .sort({ _id: -1 }) //sort: desc -1, asc 1
    .limit(limit)
    .skip((page - 1) * limit)
    .exec()
  const count = await Article.countDocuments(query).exec()
  ctx.set('Last-Page', Math.ceil(count / 10))
  ctx.body = articles
    .map(article => article.toJSON())
    .map(article => ({
      ...article,
      // content: ((!(Array.isArray(article.content))) || (article.content.length < 50)) ? article.content : article.content.slice(0, 50) + '...',
      content: fixHtml(article.content)
  }))
}


articleController.seedArticle = async ctx => {
  try {
    await articleSeed()
    ctx.body = 'seed'
  } catch (e) { ctx.throw(500, e) }
}


articleController.update = async ctx => {
  const { id } = ctx.params
  try {
    const dataNext = { ...ctx.request.body }
    if(dataNext.content) dataNext.content = fixHtml(dataNext.content)
    //const article = await Article.findByIdAndUpdate(id, ctx.request.body, {
    const article = await Article.findByIdAndUpdate(id, dataNext, {
      new: true, //true is next val, false(default) is prev val
    }).exec()
    if (!(article)) return ctx.status = 404
    ctx.body = article
  } catch (e) { ctx.throw(500, e) }
}


export default articleController
