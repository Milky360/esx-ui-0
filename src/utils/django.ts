// import { ApiResponse } from "@/types/ITypes";
// import { getSession } from "@/utils/get-session";

// import constants, { BACKEND_URL } from "./config";

// // Function to format the route only if needed
// const getUrl = (route: string, params?: Record<string, string | number>) => {
//   // Check if params are provided for dynamic segments
//   if (params) {
//     return route.replace(/{(\w+)}/g, (_, key) => params[key].toString());
//   }
//   return route; // Return as-is if there are no params
// };

// /**
//  * Executes the function by constructing a URL and making a request to a Django backend.
//  *
//  * @param name - The name of the function to execute, mapped to a constant.
//  * @param args - The arguments for the request body.
//  * @returns A promise resolving with the function response.
//  */
// export async function execute<T = any>(
//   name: keyof typeof constants,
//   args: Record<string, any> = {}
// ): Promise<T | ApiResponse<T>> {
//   if (!(name in constants)) {
//     throw new Error(`Function ${name} not registered`);
//   }

//   const session = await getSession();

//   // Construct the URL using the specified format
//   const url = `${BACKEND_URL}/api/v1/${getUrl(constants[name])}`;
//   const headers: HeadersInit = {
//     "Content-Type": "application/json",
//   };
//   let response: Response;

//   try {
//     if (constants[name] !== "GET_USER_METHOD" && session?.user?.accessToken) {
//       headers.Authorization = `Bearer ${session.user.accessToken}`;
//     }
//     response = await fetch(url, {
//       headers,
//       body: JSON.stringify(args),
//       method: "POST",
//     });

//     // Check if the response is ok
//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Error ${response.status}: ${errorText}`);
//     }

//     const result: T = await response.json();
//     return result;
//   } catch (e) {
//     // Handle errors
//     return {
//       status: 500,
//       error: e,
//     };
//   }
// }



// import { ApiResponse } from "@/types/ITypes";
// import constants, { BACKEND_URL } from "./config";

// const getUrl = (route: string, params?: Record<string, string | number>) => {
//   if (params) {
//     return route.replace(/{(\w+)}/g, (_, key) => params[key].toString());
//   }
//   return route;
// };

// export async function execute<T = any>(
//   name: keyof typeof constants,
//   args: Record<string, any> = {},
//   method: "GET" | "POST" | "PUT" | "DELETE" = "POST"
// ): Promise<T | ApiResponse<T>> {
//   if (!(name in constants)) {
//     throw new Error(`Function ${name} not registered`);
//   }

//   const url = `${BACKEND_URL}/api/v1/${getUrl(constants[name])}`;
//   const headers: HeadersInit = {
//     "Content-Type": "application/json",
//     "accept": "application/json",
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNTYwNTE0LCJpYXQiOjE3MzE1NTY5MTQsImp0aSI6ImJhMzNjZWMwNGJkMTQyN2U4MzFmZDQwN2RkYTQ4MDgzIiwidXNlcl9pZCI6NH0.ryqtNn-UOcHBgzTyJyx44ROOZm3Hae8YalFFwiozav4"
//   };

//   try {
//     const response = await fetch(url, {
//       headers,
//       method,
//       ...(method !== "GET" && { body: JSON.stringify(args) })
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Error ${response.status}: ${errorText}`);
//     }

//     const result: T = await response.json();
//     return result;
//   } catch (e) {
//     return {
//       status: 500,
//       error: e,
//     };
//   }
// }



// import { ApiResponse } from "@/types/ITypes";
// import constants, { BACKEND_URL } from "./config";


// const getUrl = (route: string, params: Record<string, string | number> = {}) => {
//   console.log('getUrl called with route:', route);  // Log the route
//   console.log('getUrl called with params:', params);  // Log the params object

//   // Ensure that params are passed correctly
//   if (Object.keys(params).length === 0) {
//     console.warn('Warning: No parameters provided for route:', route);
//   }

//   // Replace placeholders in the route with actual values
//   return route.replace(/{(\w+)}/g, (_, key) => {
//     const value = params[key];
//     if (value) {
//       console.log(`Replacing {${key}} with:`, value);  // Log the replacement value
//       return value.toString();
//     } else {
//       console.warn(`No value found for parameter: ${key}`);
//       return `{${key}}`;  // Return the placeholder if no value is found
//     }
//   });
// };

   
// export async function execute<T = any>(
//   name: keyof typeof constants,
//   args: Record<string, any> = {},
//   method: "GET" | "POST" | "PUT" | "DELETE" = "POST",
//   params?: Record<string, string | number> 
// ): Promise<T | ApiResponse<T>> {
//   if (!(name in constants)) {
//     throw new Error(`Function ${name} not registered`);
//   }

//   const url = `${BACKEND_URL}/api/v1/${getUrl(constants[name], params)}`;
//   console.log('Generated URL:', url); 

//   const headers: HeadersInit = {
//     "Content-Type": "application/json",
//     "accept": "application/json",
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNTc3ODg5LCJpYXQiOjE3MzE1NzQyODksImp0aSI6IjYzZmRlYzM4MzFjMjRjZGY5YjA4MDM0NTZkNzY5MmRmIiwidXNlcl9pZCI6NH0.oQ3PdRT_FuPg5uvbXuy6FUlcU9RBTDlzEkKt7DRAdRE"
//   };

//   try {
//     const response = await fetch(url, {
//       headers,
//       method,
//       ...(method !== "GET" && { body: JSON.stringify(args) })
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Error ${response.status}: ${errorText}`);
//     }

//     const result: T = await response.json();
//     return result;
//   } catch (e) {
//     console.error('API Error:', e); // Log the error
//     return {
//       status: 500,
//       error: e,
//     };
//   }
// }




// new code

// import { ApiResponse } from "@/types/ITypes";
// import API_CONFIG, {
//   BACKEND_URL,
//   MethodType,
//   RouteType,
// } from "./config";  // Assuming 'config' is the renamed file

// // Allowed HTTP methods
// const ALLOWED_METHODS: MethodType[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];

// // Function to format the route with parameters if needed
// const getUrl = (route: string, params: Record<string, string | number> = {}) => {
//   console.log("getUrl called with route:", route);
//   console.log("getUrl called with params:", params);

//   if (Object.keys(params).length === 0) {
//     console.warn("Warning: No parameters provided for route:", route);
//   }

//   return route.replace(/{(\w+)}/g, (_, key) => {
//     const value = params[key];
//     if (value) {
//       console.log(`Replacing {${key}} with:`, value);
//       return value.toString();
//     } else {
//       console.warn(`No value found for parameter: ${key}`);
//       return `{${key}}`;
//     }
//   });
// };

// /**
//  * Executes the function by constructing a URL and making a request to the backend.
//  *
//  * @param routeOrConfig - Route name or configuration object with route and method.
//  * @param args - The arguments for the request body.
//  * @param params - Dynamic route parameters.
//  * @returns A promise resolving with the function response.
//  */
// export async function execute<T = any>(
//   routeOrConfig: RouteType | { route: RouteType; method: MethodType },
//   args: Record<string, any> = {},
//   params: Record<string, string | number> = {}
// ): Promise<T | ApiResponse<T>> {
//   let route: RouteType;
//   let method: MethodType;

//   // Determine route and method based on input type
//   if (typeof routeOrConfig === "string" && routeOrConfig in API_CONFIG) {
//     route = routeOrConfig;
//     method = "GET"; // Default to GET method
//   } else if (
//     typeof routeOrConfig === "object" &&
//     routeOrConfig.route in API_CONFIG &&
//     ALLOWED_METHODS.includes(routeOrConfig.method)
//   ) {
//     route = routeOrConfig.route;
//     method = routeOrConfig.method;
//   } else {
//     throw new Error("Invalid route or method configuration.");
//   }

//   // Construct the URL with any dynamic parameters
//   const url = `${BACKEND_URL}/api/v1/${getUrl(API_CONFIG[route], params)}`;
//   console.log("Generated URL:", url);

//   // Set headers including Authorization token
//   const headers: HeadersInit = {
//     "Content-Type": "application/json",
//     "accept": "application/json",
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNjQ5NTE2LCJpYXQiOjE3MzE2NDU5MTYsImp0aSI6IjJmYWZmMTc2ZThhZTRjNTliYjBhMDVmNThhMGRjNTBjIiwidXNlcl9pZCI6NH0.LD-eH__pt09riRp6cNseB5nKI83aAa8AFP_9Un8V70I",
//   };

//   try {
//     const response = await fetch(url, {
//       headers,
//       method,
//       ...(method !== "GET" && { body: JSON.stringify(args) }),
//     });

//     // Check if response is okay
//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Error ${response.status}: ${errorText}`);
//     }

//     // Parse response as JSON
//     const result: T = await response.json();
//     return result;
//   } catch (e) {
//     console.error("API Error:", e);
//     return {
//       status: 500,
//       error: e,
//     };
//   }
// }




import { ApiResponse } from "@/types/ITypes";
import API_CONFIG, {
  BACKEND_URL,
  MethodType,
  RouteType,
} from "./config";  // Assuming 'config' is the renamed file

// Allowed HTTP methods
const ALLOWED_METHODS: MethodType[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];

// Function to format the route only if needed
const getUrl = (route: string, params?: string | number) => {
  if (params) {
    return route.replace(/{(\w+)}/g, (_, key) => params.toString());
  }
  return route; // Return as-is if there are no params
};

/**
 * Executes the function by constructing a URL and making a request to the backend.
 *
 * @param routeOrConfig - Route name or configuration object with route and method.
 * @param args - The arguments for the request body.
 * @param params - Dynamic route parameter (string or number).
 * @returns A promise resolving with the function response.
 */
export async function execute<T = any>(
  routeOrConfig: RouteType | { route: RouteType; method: MethodType },
  args: Record<string, any> = {},
  params?: string | number 
): Promise<T | ApiResponse<T>> {
  let route: RouteType;
  let method: MethodType;

  if (typeof routeOrConfig === "string" && routeOrConfig in API_CONFIG) {
    route = routeOrConfig;
    method = "GET"; 
  } else if (
    typeof routeOrConfig === "object" &&
    routeOrConfig.route in API_CONFIG &&
    ALLOWED_METHODS.includes(routeOrConfig.method)
  ) {
    route = routeOrConfig.route;
    method = routeOrConfig.method;
  } else {
    throw new Error("Invalid route or method configuration.");
  }

  const url = `${BACKEND_URL}/api/v1/${getUrl(API_CONFIG[route], params)}`;
  console.log("Generated URL:", url);

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMTgxMDU4LCJpYXQiOjE3MzIxNzc0NTgsImp0aSI6ImU5NjZmNzVlZjY5OTRkNjliMTY1NjYyNzE0MjI0NTAxIiwidXNlcl9pZCI6MX0.1JaXi6ysAXtDBEGrLO6iasQhv9WYUqEtrLdH6kLgh9Y",
  };

  try {
    const response = await fetch(url, {
      headers,
      method,
      ...(method !== "GET" && { body: JSON.stringify(args) }),
    });

    // Check if response is okay
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    // Parse response as JSON
    const result: T = await response.json();
    return result;
  } catch (e) {
    console.error("API Error:", e);
    return {
      status: 500,
      error: e,
    };
  }
}
