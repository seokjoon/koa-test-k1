import mongoose from 'mongoose'


const checkMiddleware = {}
const { ObjectId } = mongoose.Types


checkMiddleware.checkObjectId = (ctx, next) => {
  const { id } = ctx.params
  if(!(ObjectId.isValid((id)))) return ctx.status = 400
  return next()
}


export default checkMiddleware