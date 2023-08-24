import express from 'express';
import * as categoryController from '../controllers/categoryController';

const categoryRouter = express.Router();

categoryRouter.get('/all', categoryController.getAllCategories);


export default categoryRouter;