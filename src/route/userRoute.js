import Router from 'koa-router'
import * as userController from '../controller/userController.js'


const userRoute = new Router()


userRoute.get('/usersCheckToken', userController.checkToken)


userRoute.post('/users', userController.create)
userRoute.post('/usersCreateToken', userController.createToken)
userRoute.post('/usersDestroyToken', userController.destroyToken)

export default userRoute
