import express, { Application } from 'express';

import errorMiddleware from './middleware/error.middleware';
import apiRoute from './routes';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoute);

app.use(errorMiddleware);

export default app;