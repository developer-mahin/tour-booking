export type TErrorResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  issues: TIssues[];
};

export type TIssues = {
  path: string | number;
  message: string;
};
