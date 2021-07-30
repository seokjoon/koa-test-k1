import * as mongoose from 'mongoose'

const { Schema } = mongoose

export const UserSchema = new Schema({
  email: String,
  name: String,
})

const User = mongoose.model('User', UserSchema)