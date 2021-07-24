const Router = require('koa-router')
const api = new Router()
const controller = require('./controller')


api.get('/foo', ctx => {
  ctx.body = ctx.body + '\nFOO'
  console.log('FOO')
})

api.get('/bar/:bee?', ctx => {
  const { bee } = ctx.params
  ctx.body = bee ? bee : ctx.body
})

api.get('/', controller.reqs)


api.post('/foo', controller.create)


module.exports = api