import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Configure the base API instance with the base URL and headers
export const baseAPI = createApi({
  reducerPath: "baseAPI", // Unique key for this API
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers) => {
      // Add token to headers if available
      const token = `fake-super-secret-token`;
      if (token) {
        headers.set("x-token", "fake-super-secret-token");
      }
      return headers;
    },
  }),

  endpoints: () => ({}),
  tagTypes: ["Data"], // Optional: Helps with cache invalidation if needed
});

export default baseAPI;
