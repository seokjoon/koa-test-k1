import Router from 'koa-router' //const Router = require('koa-router')
import * as controller from './controller.js'
import { checkObjectId } from './middleware/check.js' //const controller = require('./controller')


const route = new Router()


route.delete('/articles/:id', checkObjectId, controller.destroy)


route.get('/', controller.getReq)

// route.get('/foo', ctx => {
//   ctx.body = ctx.body + '\nFOO'
// })
//
// route.get('/bar/:bee?', ctx => {
//   const { bee } = ctx.params
//   ctx.body = bee ? bee : ctx.body
// })

// route.get('/articles/:id', controller.read)
route.get('/articles/:id', checkObjectId, controller.read)

route.get('/articles', controller.reads)


route.post('/articles', controller.create)


route.put('/articles/:id', checkObjectId, controller.update)


export default route //module.exports = route
