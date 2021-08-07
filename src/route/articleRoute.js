import Router from 'koa-router'
import articleController from '../controller/articleController.js'
import checkMiddleware from '../middleware/checkMiddleware.js'


const articleRoute = new Router()


articleRoute.delete('/articles/:id', checkMiddleware.checkObjectId, checkMiddleware.checkUserLogin, articleController.destroy)


articleRoute.get('/', articleController.getReq) //FIXME
articleRoute.get('/articles', articleController.reads)
articleRoute.get('/articles/:id', checkMiddleware.checkObjectId, articleController.read)
articleRoute.get('/articlesSeed', articleController.seedArticle)


articleRoute.post('/articles', checkMiddleware.checkUserLogin, articleController.create)


articleRoute.put('/articles/:id', checkMiddleware.checkObjectId, checkMiddleware.checkUserLogin, articleController.update)


export default articleRoute