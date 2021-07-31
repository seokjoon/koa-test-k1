import app from './app.js'
import route from './route.js'
import Router from 'koa-router'


const router = new Router()
router.use('/api', route.routes())
app.use(router.routes()).use(router.allowedMethods())