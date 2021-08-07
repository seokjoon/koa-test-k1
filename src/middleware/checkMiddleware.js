import mongoose from 'mongoose'


const checkMiddleware = {}
const { ObjectId } = mongoose.Types


checkMiddleware.checkObjectId = (ctx, next) => {
  const { id } = ctx.params
  if(!(ObjectId.isValid((id)))) return ctx.status = 400
  return next()
}


checkMiddleware.checkUserLogin = (ctx, next) => {
  if(!(ctx.state.user)) return ctx.status = 401
  return next()
}



export default checkMiddleware