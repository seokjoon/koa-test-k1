const Router = require('koa-router')

const api = new Router()

api.get('/foo', ctx => {
  ctx.body = ctx.body + '\nFOO'
  console.log('FOO')
})

module.exports = api