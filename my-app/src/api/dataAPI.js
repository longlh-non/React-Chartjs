import { baseAPI } from "./baseAPI";

export const dataAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => ({url: "/data", params: {token: "tnl" }}) // Endpoint for fetching data
      // providesTags: ["Data"], // Optional: Cache invalidation
    })
  }),
});

export const {
  useFetchDataQuery 
} = dataAPI;
