export type ErrorResponse = {
  status: "error";
  message: string;
  statusCode: number;
  errors: Record<string, string[]>;
};
