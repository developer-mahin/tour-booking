import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
  next(createError(404, `${req.url} Route not found`));
};

export default notFoundRoute;
