import { NextFunction, Request, Response } from 'express';
import Match from '../../models/Match';
import CustomError from '../../utils/errorHandler/CustomError';

const getMatches = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const matches = await Match.findAll();
  console.log(matches);
};
export default getMatches;
