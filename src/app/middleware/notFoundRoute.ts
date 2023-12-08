import { NextFunction, Request, Response } from 'express';
import CreateError from '../errors/createError';

const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
  next(new CreateError(404, `${req.url} Route not found`));
};

export default notFoundRoute;
