import mongoose from 'mongoose';
import { TErrorResponse, TIssues } from '../../types/errorResponse';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TErrorResponse => {
  const errorValues = Object.values(err.errors);
  const issues: TIssues[] = [];

  errorValues.forEach((errObj) => {
    issues.push({
      path: errObj.path,
      message: errObj.message,
    });
  });

  return {
    statusCode: 400,
    success: false,
    message: 'validation error',
    issues: issues,
  };
};

export default handleValidationError;
