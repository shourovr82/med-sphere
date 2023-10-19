import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
const SERVICE_API = "/services";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: (arg: Record<string, any>) => ({
        url: `${SERVICE_API}`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.service],
    }),

    // create Faq
    createService: builder.mutation({
      query: ({ data }) => ({
        url: `${SERVICE_API}/create-service`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    // update Faq
    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `${SERVICE_API}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    getSingleService: builder.query({
      query: ({ serviceId }) => ({
        url: `${SERVICE_API}/${serviceId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),

    // delete Faq
    deleteService: builder.mutation({
      query: (id) => ({
        url: `${SERVICE_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetAllServicesQuery,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
  useGetSingleServiceQuery,
} = categoryApi;
