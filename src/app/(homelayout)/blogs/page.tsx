/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useGetBlogsQuery } from "@/redux/features/blogs/blogApi";
import { IBlogType } from "@/types/BlogType";

import BlogCard from "@/components/HomePage/BlogPage/blogCard";

const Blogs = () => {
  const query: Record<string, any> = {};
  query["limit"] = 100;
  const { data } = useGetBlogsQuery(query);

  return (
    <div className="my-10 max-w-7xl mx-auto ">
      {/* blog news */}
      <div className="w-full flex justify-between items-center my-10">
        <div>
          <p className="text-primary md:text-[25px] text-[16px] font-semibold">
            BLOG NEWS
          </p>
        </div>
      </div>
      {/* blogs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {data?.map((blog: IBlogType) => (
          <BlogCard key={blog?.blogId} blog={blog} />
        ))}
      </div>{" "}
    </div>
  );
};

export default Blogs;
