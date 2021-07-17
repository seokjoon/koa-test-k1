const Router = require('koa-router')
const router = new Router()

const app = require('./app')

const api = require('./api')

router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())
