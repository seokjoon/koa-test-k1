import mongoose from 'mongoose'
import Article from '../models/Article.js'


const articleMiddleware = {}
const { ObjectId } = mongoose.Types


articleMiddleware.checkItemUser = (ctx, next) => {
  const { article, user } = ctx.state
  if(article.user._id.toString() !== user._id) return ctx.status = 403
  return next()
}


articleMiddleware.getItemById = async (ctx, next) => {
  const { id } = ctx.params
  if(!(ObjectId.isValid(id))) return ctx.status = 400
  try {
    const item = await Article.findById(id)
    if(!(item)) return ctx.status = 404
    ctx.state.article = item
    return next()
  } catch (e) { ctx.throw(500, e) }
}


export default articleMiddleware