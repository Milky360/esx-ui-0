import { ErrorResponse } from "@/types/response-type";

const DEFAULT_MESSAGE = "An unexpected error occurred.";

export default function getErrorMessage(error: any): string {
  if (!error.response || !error.response.data) {
    if (error.message.includes("ECONNREFUSED")) {
      return "Couldn't connect to the server";
    }
    return error.message || DEFAULT_MESSAGE;
  }

  const errorResponse = error.response.data as ErrorResponse;

  console.log("ERROR-RESPONSE:", errorResponse);
  console.log("ERRORS:", errorResponse.errors);

  return errorResponse.message
    ? `Error ${errorResponse.statusCode}: ${errorResponse.message}`
    : DEFAULT_MESSAGE;
}
