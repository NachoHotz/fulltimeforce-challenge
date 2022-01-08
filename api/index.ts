import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();

const API_PORT: number | string = process.env.PORT || 3001;

app.listen(API_PORT, () => {
  console.log(`server running on port ${API_PORT}`);
});
