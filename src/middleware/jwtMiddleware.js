import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import userController from '../controller/userController.js'


const jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get('access_token')
  if(!(token)) return next()
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); console.log(decoded)
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
    }

    //////// refresh BEGIN
    const now = Math.floor(Date.now() / 1000)
    if(decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id)
      const tokenNext = userController.setToken(ctx, user); console.log('tokenNext: ', tokenNext)
    }
    //////// refresh END

    return next()
  } catch (e) {
    return next()
  }
}


export default jwtMiddleware
