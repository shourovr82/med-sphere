import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
const REVIEWS_API = "/review-ratings";

const ratingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: `${REVIEWS_API}`,
        method: "GET",
      }),
      providesTags: [tagTypes.reviews],
    }),
    getMyReviews: builder.query({
      query: () => ({
        url: `${REVIEWS_API}/get-my-reviews`,
        method: "GET",
      }),
      providesTags: [tagTypes.reviews],
    }),

    // create Review
    createReview: builder.mutation({
      query: (data) => ({
        url: `${REVIEWS_API}/add-review`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.reviews, tagTypes.service],
    }),
    // update Review
    updateReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `${REVIEWS_API}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.reviews],
    }),

    // delete Review
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/${REVIEWS_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.reviews],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetMyReviewsQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = ratingApi;
