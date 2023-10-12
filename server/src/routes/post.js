import express from "express";
import * as postController from "../controllers/postController";

const postRouter = express.Router();

postRouter.get('/all', postController.getAllPosts);
postRouter.get('/limit', postController.getPostsLimit);
postRouter.get('/new-post', postController.getNewPosts);


export default postRouter;