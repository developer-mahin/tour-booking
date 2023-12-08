/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler } from 'express';
import { TErrorResponse } from '../../types/errorResponse';
import config from '../../config';
import errorPreProcessor from '../../helper/errorHelper/errorPreProcessor';

const errorHandlingMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  let errorResponse: TErrorResponse = {
    statusCode: err.statusCode || 500,
    message: err.message || 'something went wrong',
    success: false,
    issues: err.issues || [],
  };

  //
  errorResponse = errorPreProcessor(err);

  res.status(errorResponse.statusCode).json({
    message: errorResponse.message,
    success: errorResponse.success,
    issues: errorResponse.issues,
    // eslint-disable-next-line no-undefined
    stack: config.NODE_ENV === 'development' ? err.stack : undefined,
    // err
  });
};

export default errorHandlingMiddleware;
