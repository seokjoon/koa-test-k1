import Router from 'koa-router'
import articleController from '../controller/articleController.js'
import articleMiddleware from '../middleware/articleMiddleware.js'
import userMiddleware from '../middleware/userMiddleware.js'


const articleRoute = new Router()


articleRoute.delete(
  '/articles/:id',
  userMiddleware.checkLogin,
  articleMiddleware.getItemById,
  articleMiddleware.checkItemUser,
  articleController.destroy
)


articleRoute.get('/', articleController.getReq) //FIXME
articleRoute.get('/articles', articleController.reads)
articleRoute.get(
  '/articles/:id',
  articleMiddleware.getItemById,
  articleController.read
)
articleRoute.get('/articlesSeed', articleController.seedArticle)


articleRoute.post(
  '/articles',
  userMiddleware.checkLogin,
  articleController.create
)


articleRoute.put(
  '/articles/:id',
  userMiddleware.checkLogin,
  articleMiddleware.getItemById,
  articleMiddleware.checkItemUser,
  articleController.update
)


export default articleRoute