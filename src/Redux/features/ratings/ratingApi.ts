import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

const RatingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRating: builder.mutation({
      query: (body) => ({
        url: `/review-ratings/add-review`,
        method: "POST",
        data: body,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    // get my reviews
    getMyReviews: builder.query({
      query: () => ({
        url: `/review-ratings/my-reviews`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
      transformResponse: (response: any) => response.data,
    }),
    // delete reviews
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/review-ratings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useCreateRatingMutation,
  useGetMyReviewsQuery,
  useDeleteReviewMutation,
} = RatingApi;
