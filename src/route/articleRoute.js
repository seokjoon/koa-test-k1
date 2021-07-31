import Router from 'koa-router'
import * as articleController from '../controller/articleController.js'
import { checkObjectId } from '../middleware/checkMiddleware.js'


const articleRoute = new Router()


articleRoute.delete('/articles/:id', checkObjectId, articleController.destroy)


articleRoute.get('/', articleController.getReq)
articleRoute.get('/articles', articleController.reads)
articleRoute.get('/articles/:id', checkObjectId, articleController.read)
articleRoute.get('/articlesSeed', articleController.seedArticle)


articleRoute.post('/articles', articleController.create)


articleRoute.put('/articles/:id', checkObjectId, articleController.update)


export default articleRoute