import express from 'express';
import * as insertController from '../controllers/insertController';

const insertRouter = express.Router();

insertRouter.post('/pa', insertController.insertPricesAndAreas);
insertRouter.post('/', insertController.insertData);

export default insertRouter;