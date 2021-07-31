import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


const { Schema } = mongoose

export const UserSchema = new Schema({
  email: String,
  password: String,
  name: String,
  username: String,
})


UserSchema.methods.checkPassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}

UserSchema.methods.setPassword = async function(password) {
  this.password = await bcrypt.hash(password, 10)
}


UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username })
}


const User = mongoose.model('User', UserSchema)

export default User