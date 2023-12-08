import mongoose from 'mongoose';
import { TErrorResponse, TIssues } from '../../types/errorResponse';

const handleCastError = (err: mongoose.Error.CastError): TErrorResponse => {
  let issues: TIssues[] = [];

  const regexPattern: RegExp = /"([^"]+)"/;
  const match = err.message.match(regexPattern);
  issues = [
    {
      path: err.path,
      message: `can't find data from ${err.path} ${match![0]} `,
    },
  ];

  return {
    success: false,
    statusCode: 404,
    message: 'Invalid Id',
    issues,
  };
};

export default handleCastError;
