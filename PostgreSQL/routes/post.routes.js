import Router from 'express'
const router = new Router()
import PostController from '../controllers/post.controller.js'

router.post('/post', PostController.CreatePost)
router.get('/post', PostController.getPostsByUser)

export default router
//module.exports = router