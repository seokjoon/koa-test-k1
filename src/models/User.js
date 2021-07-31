import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


const { Schema } = mongoose

export const UserSchema = new Schema({
  email: String,
  password: String,
  name: String,
  username: String,
})


/**
 * @memberOf User#
 */
UserSchema.methods.checkPassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}

/**
 * @memberOf User#
 */
UserSchema.methods.serialize = function () {
  const outs = this.toJSON()
  delete outs.password
  return outs
}

/**
 * @memberOf User#
 */
UserSchema.methods.setPassword = async function(password) {
  this.password = await bcrypt.hash(password, 10)
}

/**
 * @memberOf User
 */
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username })
}


/**
 * @class User
 * https://intellij-support.jetbrains.com/hc/en-us/community/posts/207115889-Mongoose-static-methods-autocompletion-in-WebStorm
 */
const User = mongoose.model('User', UserSchema)

export default User