import dotenv from 'dotenv';
import app from './src/app';
import { corsOptions, envConfig } from './src/config';

dotenv.config();

const { API_PORT } = envConfig;

const PORT: number | string = process.env.PORT || API_PORT!;

app.listen(PORT, () => {
  console.log('PROD_URL', corsOptions)
  console.log(`server running on port ${PORT}`);
});
