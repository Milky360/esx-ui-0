// // Define the URL and constants with types
// export const BACKEND_URL: string = "http://localhost:8000"; // prod

// export const USER_LOGIN = "user/login";

// export const REGISTER_ISSUER = "issuers/";

// export const GET_USER_METHOD: string = "user/login";

// export const GET_USER_ID_METHOD: string = "users/login";

// export const GET_SINGLE_APPLICATION_DETAIL: string = "users/login";


// export const GET_CAMPAIGNS: string = "campaigns/";

// export const GET_CAMPAIGN_BY_ID: string = "campaigns/{id}/"; 
// // Export the constants for usage in other modules
// export default {
//   BACKEND_URL,
//   USER_LOGIN,
//   REGISTER_ISSUER,
//   GET_USER_METHOD,
//   GET_USER_ID_METHOD,
//   GET_SINGLE_APPLICATION_DETAIL,
//   GET_CAMPAIGNS,
//   GET_CAMPAIGN_BY_ID

// };







// new code
// Define the URL and constants with types
export const BACKEND_URL: string = "http://localhost:8000";

export const USER_LOGIN = "user/login";
export const REGISTER_ISSUER = "issuers/";
export const GET_USER_METHOD: string = "user/login";
export const GET_USER_ID_METHOD: string = "users/login";
export const GET_SINGLE_APPLICATION_DETAIL: string = "users/login";
export const GET_CAMPAIGNS: string = "campaigns/";
export const GET_CAMPAIGN_BY_ID: string = "campaigns/{id}/";
export const GET_ISSUER_BY_ID: string = "issuers/{id}/";

// Export the constants for usage in other modules
const API_CONFIG = {
  BACKEND_URL,
  USER_LOGIN,
  REGISTER_ISSUER,
  GET_USER_METHOD,
  GET_USER_ID_METHOD,
  GET_SINGLE_APPLICATION_DETAIL,
  GET_CAMPAIGNS,
  GET_CAMPAIGN_BY_ID,
  GET_ISSUER_BY_ID
};

export default API_CONFIG;

// Define RouteType as a union of keys in API_CONFIG
export type RouteType = keyof typeof API_CONFIG;

// Define MethodType as specific HTTP methods
export type MethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
