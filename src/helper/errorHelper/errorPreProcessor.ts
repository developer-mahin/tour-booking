/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { TErrorResponse } from '../../types/errorResponse';
import handleValidationError from './handleValidationError';
import handleDuplicateError from './handleDuplicateError';
import CreateError from '../../app/errors/createError';
import handleCastError from './handleCastError';
import handleGenericError from './handleGenericError';
import { ZodError } from 'zod';
import handleZodError from './handleZodError';

const errorPreProcessor = (err: any): TErrorResponse => {
  if (err instanceof ZodError) {
    return handleZodError(err);
  } else if (err instanceof mongoose.Error.ValidationError) {
    return handleValidationError(err);
  } else if (err && err.code === 11000) {
    return handleDuplicateError(err);
  } else if (err && err.name === 'CastError') {
    return handleCastError(err);
  } else if (err instanceof CreateError) {
    return handleGenericError(err);
  } else {
    return {
      statusCode: 400,
      message: 'unknown error',
      success: false,
      issues: [
        {
          path: '',
          message: err.message,
        },
      ],
    };
  }
};

export default errorPreProcessor;
