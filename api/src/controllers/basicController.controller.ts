import { Request, Response, NextFunction } from 'express';
import basicService from '../services/basicService.service';

export const basicController = (
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const response: object = basicService();
  res.status(200).send(response);
};
