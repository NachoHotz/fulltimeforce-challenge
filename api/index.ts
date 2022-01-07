import app from './src/app';

const API_PORT: number = 3001;

app.listen(API_PORT, () => {
  console.log(`server running on port ${API_PORT}`);
});
