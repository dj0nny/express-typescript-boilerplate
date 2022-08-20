import { config } from 'dotenv';

import app from './app';

config();

const port: number | string = process.env.PORT || 5896;

app.listen(port, () =>  {
  console.log(`🚀 Server's up at http://localhost:${port}`);
});