import User from '../models/User.js'


const userController = {}


userController.create = async ctx => {
  const { username, password, } = ctx.request.body
  try {
    const isExist = await User.findByUsername(username)
    if (isExist) return ctx.status = 409 //conflict
    const user = new User({ username, })
    await user.setPassword(password)
    await user.save()
    ctx.body = user.serialize()

    userController.setToken(ctx, user)
  } catch (e) { ctx.throw(500, e) }
}


userController.checkToken = async ctx => {

}


userController.createToken = async function (ctx) {
  const { password, username, } = ctx.request.body
  if ((!(password)) || (!(username))) return ctx.status = 401
  try {
    const user = await User.findByUsername(username)
    if (!(user)) return ctx.status = 401
    const valid = await user.checkPassword(password)
    if (!(valid)) return ctx.status = 401
    ctx.body = user.serialize()

    userController.setToken(ctx, user)
  } catch (e) { ctx.throw(500, e)}
}


userController.destroyToken = async ctx => {

}


userController.setToken = function (ctx, user) {
  const token = user.setToken()
  ctx.cookies.set('access_token', token, {
    maxAge: 1000 * 60 * 60 * 24 * 7, //7일
    httpOnly: true,
  })
  return token
}


export default userController