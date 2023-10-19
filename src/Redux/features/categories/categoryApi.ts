import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
const CATEGORIES_API = "/categories";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: `${CATEGORIES_API}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),

    // create Faq
    createCategory: builder.mutation({
      query: (data) => ({
        url: `${CATEGORIES_API}/create-category`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    // update Faq
    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `${CATEGORIES_API}/update/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.category],
    }),

    // delete Faq
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${CATEGORIES_API}/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
