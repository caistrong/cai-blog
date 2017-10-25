const router = require('koa-router')()
// ()否则要let HomeRouter = new Router()

const articlecontroller = require('../controllers/articlecontroller')


router.get('/api/articles',articlecontroller.getArticles)
      .post('/api/articles',articlecontroller.postArticles)
