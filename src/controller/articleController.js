import Article from '../models/Article.js'
import articleSeed from '../seed/articleSeed.js'


const reqs = ctx => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
    body: ctx.request.body,
  }
}


const articleController = {}


articleController.create = async ctx => {
  const { content, tags, title, } = ctx.request.body
  const article = new Article({
    content,
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
  const { id } = ctx.params
  const article = await Article.findById(id).exec()
  if (!(article)) return ctx.status = 404
  ctx.body = article
}


articleController.reads = async ctx => {
  const page = parseInt(ctx.query.page || '1', 10)
  const articles = await Article.find()
    .sort({ _id: -1 }) //sort: desc -1, asc 1
    .limit(10)
    .skip((page - 1) * 10)
    .exec()
  const count = await Article.countDocuments().exec()
  ctx.set('Last-Page', Math.ceil(count / 10))
  ctx.body = articles
    .map(article => article.toJSON())
    .map(article => ({
      ...article,
      content: article.content.length < 50 ? article.content : article.content.slice(0, 50) + '...',
    }))
}


articleController.seedArticle = ctx => {
  try {
    articleSeed()
    ctx.body = 'seed'
  } catch (e) { ctx.throw(500, e) }
}


articleController.update = async ctx => {
  const { id } = ctx.params
  try {
    const article = await Article.findByIdAndUpdate(id, ctx.request.body, {
      new: true, //true is next val, false(default) is prev val
    }).exec()
    if (!(article)) return ctx.status = 404
    ctx.body = article
  } catch (e) { ctx.throw(500, e) }
}


export default articleController