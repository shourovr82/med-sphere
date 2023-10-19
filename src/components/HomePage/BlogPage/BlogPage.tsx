"use client";

import React from "react";
import BlogCard from "./blogCard";
import { useGetBlogsQuery } from "@/redux/features/blogs/blogApi";
import { IBlogType } from "@/types/BlogType";
import { Button } from "antd";
import Link from "next/link";

const BlogPage = () => {
  const query: Record<string, any> = {};
  query["limit"] = 6;
  const { data } = useGetBlogsQuery(query);

  return (
    <div className="mb-20 max-md:px-3">
      {/* blog news */}
      <div className="w-full md:flex justify-between items-center mb-[100px]">
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
      <div className="mt-10 flex justify-end">
        <Link href="/blogs" className="lg:w-[15%]">
          <Button className="lg:w-full" size="large" type="primary">
            View All Blogs
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
