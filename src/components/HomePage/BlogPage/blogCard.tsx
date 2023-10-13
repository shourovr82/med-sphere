import { IBlogType } from "@/types/BlogType";
import Image from "next/image";
import React from "react";

type Props = {
  blog: IBlogType;
};

const BlogCard = ({ blog }: Props) => {
  const time = new Date(blog?.createdAt!).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="border-2 border-primary/20 hover:border-primary/80 rounded-xl w-[376px]">
      <Image
        src={blog?.blogImage}
        alt="Picture of the author"
        width={500}
        height={500}
        className=" max-w-[376px] w-full md:h-[250px] rounded-t-xl "
      />

      <div className="p-[15px] font-poppins">
        <p className="text-[18px]  text-primary">{time}</p>
        <p className="text-[20px] ">{blog.blogTitle}</p>
        <p>
          {blog.blogDescription.length > 80
            ? blog.blogDescription.slice(0, 80) + "..."
            : blog.blogDescription}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
