import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import MyReviewsCard from "@/components/layouts/dashboard/reviews/MyReviewsCard";
import React from "react";

type IReview = {
  name: string;
  email: string;
  rating: number;
  review: string;
  createdAt: string;
  image: string;
  category: string;
};

const MyReviews = () => {
  const reviews: IReview[] = [
    {
      name: "Shafin",
      email: "Shafin@gmail.com",
      rating: 5.0,
      review: "This is a good course",
      createdAt: "10 dec 2021 5:50pm",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      category: "React",
    },
    {
      name: "Shafin2",
      email: "Shafin2@gmail.com",
      rating: 4.2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae facere magnam, sed error obcaecati iure nobis nesciunt iste,.",
      createdAt: "10 dec 2021 5:50pm",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      category: "React",
    },
  ];

  return (
    <div className=" rounded-xl bg-white mt-1 mb-5 p-4 font-inter">
      <UMBreadCrumb
        items={[
          {
            label: "dashboard",
            link: "/dashboard",
          },
          {
            label: "My Reviews",
            link: "/dashboard/my-reviews",
          },
        ]}
      />
      <h3
        className="mt-8 mb-4 text-xl md:text-2xl xl:text-4xl   font-medium leading-tight
      "
      >
        My All Reviews
      </h3>

      <div className="inline-block py-2 px-8 mb-16 text-white bg-indigo-500 rounded-full font-semibold">
        {reviews?.length} Reviews
      </div>

      <div className="grid grid-cols-3 gap-5  justify-between">
        {reviews?.map((review, index) => (
          <MyReviewsCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
