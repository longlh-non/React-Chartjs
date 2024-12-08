import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
  reducerPath: "baseAPI", // Unique key for the API slice in the store
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080", // Replace with your API base URL
    prepareHeaders: (headers, { getState }) => {
      // Add authorization token if needed
      const token = getState().auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Data"], // Optional: Define tags for cache invalidation
  endpoints: () => ({}), // Empty; feature APIs will extend this
});

export default baseAPI;