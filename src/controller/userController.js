import User from '../models/User.js'

export const create = async ctx => {
  const { username, password, } = ctx.request.body
  try {
    const isExist = await User.findByUsername(username)
    if(isExist) {
      ctx.status = 409 //conflict
      return
    }
    const user = new User({ username, })
    await user.setPassword(password)
    await user.save()
    ctx.body = user.serialize()
  } catch (e) { ctx.throw(500, e) }
}

export const checkToken = async ctx => {

}

export const createToken = async ctx => {

}

export const destroyToken = async ctx => {

}
