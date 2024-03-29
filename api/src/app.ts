import express, { Application, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import routes from './routes/index.route';
import { corsOptions } from './config';

const app: Application = express();

app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(express.json({ limit: '25mb' }));
app.use(cookieParser());
app.use(cors(corsOptions));

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
