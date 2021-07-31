import Router from 'koa-router'
import * as controller from './controller.js'
import { checkObjectId } from './middleware/checkMiddleware.js'


const route = new Router()


route.delete('/articles/:id', checkObjectId, controller.destroy)


route.get('/', controller.getReq)
route.get('/articles', controller.reads)
route.get('/articles/:id', checkObjectId, controller.read)
route.get('/articlesSeed', controller.seedArticle)


route.post('/articles', controller.create)


route.put('/articles/:id', checkObjectId, controller.update)


export default route


