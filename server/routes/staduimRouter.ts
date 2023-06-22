import { Router } from 'express';
import { errorWrapper } from '../utils';
import {
  getAllStadiums,
  getStadiumDetails,
  getStadiumMatches,
} from '../controllers';

export const stadiumRouter: Router = Router();

stadiumRouter.get('/', errorWrapper(getAllStadiums));
stadiumRouter.get('/details/:id', errorWrapper(getStadiumDetails));
stadiumRouter.get('/matches/:stadiumId', errorWrapper(getStadiumMatches));