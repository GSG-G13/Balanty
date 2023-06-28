import { Router } from 'express';
import { getPlayer, updatePlayer } from '../controllers/player';
import { errorWrapper } from '../utils';

export const playerRouter: Router = Router();

playerRouter.get('/profile/:id', errorWrapper(getPlayer));
playerRouter.patch('/profile/edit', errorWrapper(updatePlayer));
