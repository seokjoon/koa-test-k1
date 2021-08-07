import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


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
 * @memberOf User#
 */
UserSchema.methods.setToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      username: this.username,
    }, //custom
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    },
  )
}


/**
 * @memberOf User
 * @returns {Promise<User>}
 */
UserSchema.statics.findByUsername = async function (username) {
  return await this.findOne({ username })
}


/**
 * @class User
 * https://intellij-support.jetbrains.com/hc/en-us/community/posts/207115889-Mongoose-static-methods-autocompletion-in-WebStorm
 */
const User = mongoose.model('User', UserSchema)


export default User