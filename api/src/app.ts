import express, { Application, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';

import routes from './routes/index.route';

const app: Application = express();

app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(express.json({ limit: '25mb' }));
app.use(cookieParser());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://fulltimeforce-challenge.vercel.app/',
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', routes);

type error = {
  status: number;
  message: string;
};

app.use((err: error, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(message);
});

export default app;
