import mongoose from 'mongoose'
import { UserSchema } from './User.js'


const { Schema } = mongoose


export const ArticleSchema = new Schema({
  content: String,
  dateCreate: {
    type: Date,
    default: Date.now,
  },
  tags: [],
  title: String,
  users: [UserSchema],
})


const Article = mongoose.model('Article', ArticleSchema)


export default Article