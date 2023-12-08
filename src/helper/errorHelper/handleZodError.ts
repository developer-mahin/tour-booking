import { TErrorResponse, TIssues } from '../../types/errorResponse';
import { ZodError } from 'zod';

const handleZodError = (err: ZodError): TErrorResponse => {
  const issues: TIssues[] = err.issues.map((issue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  return {
    statusCode: 400,
    success: false,
    message: 'validation error',
    issues,
  };
};

export default handleZodError;
