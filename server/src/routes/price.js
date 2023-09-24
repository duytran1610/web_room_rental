import express from 'express';
import * as priceController from '../controllers/priceController';

const priceRouter = express.Router();

priceRouter.get('/all', priceController.getAllPrices);


export default priceRouter;