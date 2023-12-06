/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import notFoundRoute from './app/middleware/notFoundRoute';
import errorHandlingMiddleware from './app/middleware/errorHandlingMiddleware';
import { globalRouter } from './app/Routes';

// use middleware
app.use(express.json());
app.use(cors());

// routing
app.use('/api/v1', globalRouter);

app.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'welcome to the server',
  });
});

app.use(notFoundRoute);
app.use(errorHandlingMiddleware);

export default app;
