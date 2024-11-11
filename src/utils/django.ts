import { ApiResponse } from "@/types/ITypes";
import { BACKEND_URL } from "./config";
import constants from "./config";
import { getSession } from "@/utils/getSession";

// Function to format the route only if needed
const getUrl = (route: string, params?: Record<string, string | number>) => {
  // Check if params are provided for dynamic segments
  if (params) {
    return route.replace(/{(\w+)}/g, (_, key) => params[key].toString());
  }
  return route; // Return as-is if there are no params
};

/**
 * Executes the function by constructing a URL and making a request to a Django backend.
 *
 * @param name - The name of the function to execute, mapped to a constant.
 * @param args - The arguments for the request body.
 * @returns A promise resolving with the function response.
 */
export async function execute<T = any>(
  name: keyof typeof constants,
  args: Record<string, any> = {}
): Promise<T | ApiResponse<T>> {
  if (!(name in constants)) {
    throw new Error(`Function ${name} not registered`);
  }

  const session = await getSession();

  // Construct the URL using the specified format
  const url = `${BACKEND_URL}/api/v1/${getUrl(constants[name])}`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  let response: Response;

  try {
    if (constants[name] !== "GET_USER_METHOD" && session?.user?.accessToken) {
      headers.Authorization = `Bearer ${session.user.accessToken}`;
    }
    response = await fetch(url, {
      headers,
      body: JSON.stringify(args),
      method: "POST",
    });

    // Check if the response is ok
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    const result: T = await response.json();
    return result;
  } catch (e) {
    // Handle errors
    return {
      status: 500,
      error: e,
    };
  }
}
