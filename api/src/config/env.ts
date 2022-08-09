import dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
  API_PORT: process.env.API_PORT,
  NODE_ENV: process.env.NODE_ENV,
  CLIENT_DEV_URL: process.env.CLIENT_DEV_URL,
  CLIENT_PROD_URL: process.env.CLIENT_PROD_URL,
};
