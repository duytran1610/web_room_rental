import express from "express";
import * as postController from "../controllers/postController";

const postRouter = express.Router();

postRouter.get('/all', postController.getAllPosts);
postRouter.get('/limit', postController.getPostsLimit);


export default postRouter;