import express from 'express';
import * as provinceController from '../controllers/provinceController';

const provinceRouter = express.Router();

provinceRouter.get('/all', provinceController.getAllProvinces);


export default provinceRouter;