import { Router } from 'express';
import { errorWrapper } from '../utils';
import {
  UpdateStadiumData,
  getAllStadiums,
  getStadiumDetails,
  getStadiumProfile,
  getStadiums,
} from '../controllers';
import {
  AddStadiumImage,
  UpdateStadiumGallery,
  deleteStadiumImage,
  getBestStadiums,
  searchStadiums,
} from '../controllers';
import { checkAuth } from '../middleware';

export const stadiumRouter: Router = Router();

stadiumRouter.get('/best', errorWrapper(getBestStadiums));
stadiumRouter.use(errorWrapper(checkAuth));

stadiumRouter.get('/', errorWrapper(getAllStadiums));
stadiumRouter.get('/all/:page', errorWrapper(getStadiums));
stadiumRouter.get('/search', errorWrapper(searchStadiums));
stadiumRouter.get('/details/:id', errorWrapper(getStadiumDetails));
stadiumRouter.get('/profile/:id', errorWrapper(getStadiumProfile));
stadiumRouter.patch('/edit', errorWrapper(UpdateStadiumData));
stadiumRouter.patch('/gallery', errorWrapper(UpdateStadiumGallery));
stadiumRouter.post('/gallery', errorWrapper(AddStadiumImage));
stadiumRouter.delete(
  '/gallery/:ImageId/:StadiumId/:userId',
  errorWrapper(deleteStadiumImage),
);
