import express, { Express, json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import { router } from './routes/router';
import serverError from './middleware/errorMiddleware';

const app: Express = express();

app.use([
  json(),
  urlencoded({ extended: false }),
  compression(),
  cookieParser(),
]);

app.use('/api/v1', router);
app.use(serverError);

export default app;
