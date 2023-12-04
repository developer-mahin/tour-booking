/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express';
const app = express();
import cors from 'cors';
import createError from 'http-errors';
import { userRouter } from './app/Routes/user.route';
import { tourRouter } from './app/Routes/tour.route';
import { reviewRoutes } from './app/Routes/review.route';

// use middleware
app.use(express.json());
app.use(cors());

// routing
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tour', tourRouter);
app.use('/api/v1/review', reviewRoutes);

app.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'welcome to the server',
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(500, 'Routes not found'));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

export default app;
