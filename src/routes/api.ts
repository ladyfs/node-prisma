import { Router } from "express";

import * as PostController from '../controllers/postController'
//import * as UserController from '../controllers/userController'

const router = Router()

router.get('/posts', PostController.all)
// router.get('/users', UserController.all)
// router.get('/post/:id', UserController.post)

// router.post('/post', PostController.create)
// router.post('/user', UserController.create)

// router.put('/post/:id', PostController.togglePost)
// router.put('/user/:id', UserController.update)

// router.delete('/post/:id', UserController.deletePost)


export default router;