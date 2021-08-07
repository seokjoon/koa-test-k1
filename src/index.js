import app from './app.js'
import aritcleRoute from './route/articleRoute.js'
import userRoute from './route/userRoute.js'
import Router from 'koa-router'


const router = new Router()


router.use('/api', aritcleRoute.routes())
router.use('/api', userRoute.routes())
app.use(router.routes()).use(router.allowedMethods())