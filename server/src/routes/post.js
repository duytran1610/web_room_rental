import express from "express";
import * as postController from "../controllers/postController";
import verifyJWT from '../middlewares/verifyJWT';

const postRouter = express.Router();

postRouter.get('/all', postController.getAllPosts);
postRouter.get('/limit', postController.getPostsLimit);
postRouter.get('/new-post', postController.getNewPosts);

postRouter.use(verifyJWT);
postRouter.post('/create-new', postController.createNewPost);
postRouter.get('/limit-user', postController.getPostsLimitUser);
postRouter.put('/update', postController.updatePost);


export default postRouter;