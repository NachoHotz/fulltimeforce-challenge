import { Request, Response, NextFunction } from 'express';

const setHeaders = (_req: Request, res: Response, next: NextFunction) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://fulltimeforce-challenge.vercel.app',
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
};

export default setHeaders;
