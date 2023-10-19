import express from 'express';
import * as userController from '../controllers/userController';
import verifyJWT from '../middlewares/verifyJWT';

const userRouter = express.Router();

// plugin middleware
userRouter.use(verifyJWT);

userRouter.get('/get-current', userController.getUser);


export default userRouter;