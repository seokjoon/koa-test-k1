import mongoose from 'mongoose'


const { ObjectId } = mongoose.Types
export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params
  if(!(ObjectId.isValid((id)))) ctx.status = 400
  else return next()
}