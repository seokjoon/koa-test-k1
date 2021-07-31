import Router from 'koa-router' //const Router = require('koa-router')
import * as controller from './controller.js' //const controller = require('./controller')


const route = new Router()


route.delete('/delete', controller.destroy)


route.get('/', controller.getReq)

// route.get('/foo', ctx => {
//   ctx.body = ctx.body + '\nFOO'
// })
//
// route.get('/bar/:bee?', ctx => {
//   const { bee } = ctx.params
//   ctx.body = bee ? bee : ctx.body
// })

route.get('/reads/:id', controller.read)

route.get('/reads', controller.reads)


route.post('/create', controller.create)


route.put('/update', controller.update)


export default route //module.exports = route
