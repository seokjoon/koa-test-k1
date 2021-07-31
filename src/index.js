import app from './app.js' //const app = require('./app')
import route from './route.js' //const route = require('./route')
import Router from 'koa-router' //const Router = require('koa-router')


const router = new Router()
router.use('/api', route.routes())
app.use(router.routes()).use(router.allowedMethods())