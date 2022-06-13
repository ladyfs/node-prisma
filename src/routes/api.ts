import { Router } from "express";

import * as PostController from '../controllers/postController'
import * as UserController from '../controllers/userController'

const router = Router()

router.get('/posts', PostController.all)
router.post('/post', PostController.create)
router.put('/post/:id', PostController.togglePost)
router.delete('/post/:id', PostController.deletePost)
router.get('/post/:id', PostController.one)

router.get('/users', UserController.all)

// router.post('/user', UserController.create)

// router.put('/user/:id', UserController.update)



export default router;