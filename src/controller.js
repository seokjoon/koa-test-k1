import Article from './models/Article.js'

const reqs = ctx => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
    body: ctx.request.body,
  }
}


//exports.create = ctx => {
export const create = async ctx => {
  const { content, tags, title, } = ctx.request.body
  const article = new Article({ content, tags, title })
  try {
    await article.save()
    ctx.body = article
 } catch (e) { ctx.throw(500, e) }
}

export const destroy = ctx => {}

export const getReq = ctx => reqs(ctx)

export const read = async ctx => {
  const { id } = ctx.params
  try {
    const article = await Article.findById(id).exec()
    if(!(article)) {
      ctx.status = 404
      return
    }
    ctx.body = article
  } catch (e) {
    ctx.throw(500, e)
  }

}

export const reads = async ctx => {
  try {
    ctx.body = await Article.find().exec()
  } catch (e) { ctx.throw(500, e) }
}

export const update = ctx => {}
