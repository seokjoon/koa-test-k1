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

export const create = async ctx => {
  const { content, tags, title, } = ctx.request.body
  const article = new Article({ content, tags, title })
  try {
    await article.save()
    ctx.body = article
  } catch (e) { ctx.throw(500, e) }
}

export const destroy = async ctx => {
  const { id } = ctx.params
  try {
    await Article.findByIdAndRemove(id).exec()
    ctx.status = 204 //no content
  } catch (e) { ctx.throw(500, e) }
}

export const getReq = ctx => reqs(ctx)

export const read = async ctx => {
  const { id } = ctx.params
  const article = await Article.findById(id).exec()
  if (!(article)) ctx.status = 404
  else ctx.body = article
}

export const reads = async ctx => {
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

export const seedArticle = ctx => {
  try {
    articleSeed()
    ctx.body = 'seed'
  } catch (e) { ctx.throw(500, e) }
}

export const update = async ctx => {
  const { id } = ctx.params
  try {
    const article = await Article.findByIdAndUpdate(id, ctx.request.body, {
      new: true, //true is next val, false(default) is prev val
    }).exec()
    if (!(article)) ctx.status = 404
    else ctx.body = article
  } catch (e) { ctx.throw(500, e) }
}
