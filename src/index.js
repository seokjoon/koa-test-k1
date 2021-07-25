//const app = require('./app')
import app from './app.js'
//const api = require('./api')
import api from './api.js'
//const Router = require('koa-router')
import Router from 'koa-router'
const router = new Router()
router.use('/api', api.routes())
app.use(router.routes()).use(router.allowedMethods())