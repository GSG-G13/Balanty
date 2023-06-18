import { Request } from 'express';

export interface CustomRequest extends Request {
  userData?: { owner_id?: number } | undefined;
}