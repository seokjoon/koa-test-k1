import Router from 'koa-router'
import * as userController from '../controller/userController.js'


const userRoute = new Router()


userRoute.get('/checkToken', userController.checkToken)


userRoute.post('/create', userController.create)
userRoute.post('/createToken', userController.createToken)
userRoute.post('/destroyToken', userController.destroyToken)

export default userRoute
