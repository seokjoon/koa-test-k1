const userMiddleware = {}


userMiddleware.checkLogin = (ctx, next) => {
  if(!(ctx.state.user)) return ctx.status = 401
  return next()
}


export default userMiddleware