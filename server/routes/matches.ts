import { Router } from 'express';
import {
  JoinToMatch,
  createMatch,
  getMatches,
  getMyMatches,
  getStadiumMatches,
  searchMatches,
  getMatchData,
} from '../controllers';
import { errorWrapper } from '../utils';

const matchRouter: Router = Router();

matchRouter.get('/', errorWrapper(getMatches));
matchRouter.get('/my-matches', errorWrapper(getMyMatches));
matchRouter.get('/match-data/:matchId', getMatchData);
matchRouter.post('/', errorWrapper(createMatch));
matchRouter.get('/search', errorWrapper(searchMatches));
matchRouter.get('/stadium/:stadiumId', errorWrapper(getStadiumMatches));
matchRouter.get('/join/:matchId', errorWrapper(JoinToMatch));

export default matchRouter;
