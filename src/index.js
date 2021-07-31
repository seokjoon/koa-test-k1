import app from './app.js'
import aritcleRoute from './route/articleRoute.js'
import Router from 'koa-router'


const router = new Router()
router.use('/api', aritcleRoute.routes())
app.use(router.routes()).use(router.allowedMethods())