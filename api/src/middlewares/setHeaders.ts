import { Request, Response, NextFunction } from 'express';

const setHeaders = (_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'https://fulltimeforce-challenge-odr381fi9-nachohotz.vercel.app/',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
};

export default setHeaders;
