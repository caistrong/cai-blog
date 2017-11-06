import Router from 'koa-router'

let router = new Router()

import articlecontroller from '../controllers/articlecontroller'

router.get('/api/articles',articlecontroller.getAllArticles)
      .post('/api/articles',articlecontroller.postArticle)
      .get('/api/articles/:id',articlecontroller.getArticle)
      .delete('/api/articles/:id',articlecontroller.deleteArticle)

export default router;