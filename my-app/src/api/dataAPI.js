import { baseAPI } from "./baseAPI";

export const dataAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/data", // Endpoint for fetching users
      providesTags: ["Data"], // Optional: Cache invalidation
    })
  }),
});

export const {
  useGetDataQuery
} = dataAPI;

export default dataAPI;
