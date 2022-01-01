import mongoose from 'mongoose'
import { UserSchema } from './User.js'


const { Schema } = mongoose


export const ArticleSchema = new Schema({
  content: String,
  dateCreate: {
    default: Date.now,
    type: Date,
  },
  tags: [],
  title: String,
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
  users: [UserSchema],
})


const Article = mongoose.model('Article', ArticleSchema)


export default Article