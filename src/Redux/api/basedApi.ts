import { axiosBaseQuery } from "@/helpers/axios/axiosBasedQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "" }),
  endpoints: () => ({}),
  tagTypes: [],
});
