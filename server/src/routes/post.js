import express from "express";
import * as postController from "../controllers/postController";
import verifyJWT from '../middlewares/verifyJWT';

const postRouter = express.Router();

postRouter.get('/all', postController.getAllPosts);
postRouter.get('/limit', postController.getPostsLimit);
postRouter.get('/order-post', postController.getOrderPosts);
postRouter.get('/id', postController.getPostById);

postRouter.use(verifyJWT);
postRouter.post('/create-new', postController.createNewPost);
postRouter.get('/limit-user', postController.getPostsLimitUser);
postRouter.put('/update', postController.updatePost);
postRouter.delete('/delete', postController.deletePost);



export default postRouter;