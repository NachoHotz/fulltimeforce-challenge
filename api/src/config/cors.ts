import { CorsOptions } from 'cors';
import { envConfig } from './env';

const { NODE_ENV, CLIENT_DEV_URL, CLIENT_PROD_URL } = envConfig;

export const corsOptions: CorsOptions = {
  origin: NODE_ENV === 'development' ? CLIENT_DEV_URL : CLIENT_PROD_URL,
};
