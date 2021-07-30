import Router from 'koa-router' //const Router = require('koa-router')
import * as controller from './controller.js' //const controller = require('./controller')


const route = new Router()


route.get('/foo', ctx => {
  ctx.body = ctx.body + '\nFOO'
  console.log('FOO')
})

route.get('/bar/:bee?', ctx => {
  const { bee } = ctx.params
  ctx.body = bee ? bee : ctx.body
})

route.get('/', controller.getReq)


route.post('/foo', controller.create)


export default route //module.exports = route
