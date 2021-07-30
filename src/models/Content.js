import * as mongoose from 'mongoose'
import { UserSchema } from './User'

const { Schema } = mongoose

export const ContentSchema = new Schema({
  content: String,
  dateCreate: {
    type: Date,
    default: Date.now,
  },
  tags: [],
  title: String,
  users: [UserSchema],
})

const Content = mongoose.model('Content', ContentSchema)
export default Content