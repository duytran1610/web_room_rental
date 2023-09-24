import express from 'express';
import * as areaController from '../controllers/areaController';

const areaRouter = express.Router();

areaRouter.get('/all', areaController.getAllAreas);


export default areaRouter;