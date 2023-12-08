import mongoose from 'mongoose';
import { TErrorResponse, TIssues } from '../../types/errorResponse';

const handleDuplicateError = (
  err: mongoose.Error.ValidationError,
): TErrorResponse => {
  let issues: TIssues[] = [];
  const regex = /"(.*?)"/;
  const match = err.message.match(regex);

  issues = [
    {
      path: '',
      message: `Duplicate value for ${match![0]}`,
    },
  ];

  return {
    success: false,
    statusCode: 409,
    message: 'Duplicate error',
    issues,
  };
};

export default handleDuplicateError;
