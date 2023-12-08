import { TErrorResponse, TIssues } from '../../types/errorResponse';

const handleGenericError = (err: Error): TErrorResponse => {
  let issues: TIssues[] = [];

  issues = [
    {
      path: '',
      message: err.message,
    },
  ];

  return {
    statusCode: 500,
    message: 'unknown error',
    success: false,
    issues,
  };
};

export default handleGenericError;
