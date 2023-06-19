import express, { Router } from 'express';
import { errorWrapper } from '../utils';
import getMatches from '../services/matches';

const matchRouter: Router = express.Router();

matchRouter.get('/', errorWrapper(getMatches));

export default matchRouter;
