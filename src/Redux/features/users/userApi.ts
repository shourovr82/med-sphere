import { tagTypes } from "../../tag-types";
import { baseApi } from "../../api/baseApi";
const USER_API = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: `${USER_API}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
