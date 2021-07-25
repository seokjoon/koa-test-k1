//const Router = require('koa-router')
import Router from 'koa-router'
const api = new Router()
//const controller = require('./controller')
import * as controller from './controller.js'


api.get('/foo', ctx => {
  ctx.body = ctx.body + '\nFOO'
  console.log('FOO')
})

api.get('/bar/:bee?', ctx => {
  const { bee } = ctx.params
  ctx.body = bee ? bee : ctx.body
})

api.get('/', controller.getReq)

api.post('/foo', controller.create)


//module.exports = api
export default api