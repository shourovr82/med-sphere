"use client";

import dayjs from "dayjs";

import { IBlogType } from "@/types/BlogType";
import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";

type Props = {
  blog: IBlogType;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="max-w-2xl overflow-hidden bg-white  rounded-lg shadow-lg ">
      <Image
        width={400}
        height={400}
        className="object-cover w-full h-64"
        src={blog?.blogImage}
        alt={`Image of ${blog?.blogTitle}`}
      />

      <div className="p-6">
        <div>
          <h4
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline"
            role="link"
          >
            {blog?.blogTitle}
          </h4>
          <p className="mt-2 text-sm text-gray-600">
            {blog?.blogDescription.slice(0, 100)}
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              {blog?.profile?.profileImage ? (
                <Image
                  width={100}
                  height={100}
                  className="object-cover h-10 rounded-full"
                  src={blog?.profile?.profileImage}
                  alt="Avatar"
                />
              ) : (
                <p className="border rounded-full h-10 w-10 p-3.5 py-2 text-lg font-bold">
                  {blog?.profile?.firstName?.charAt(0)}
                </p>
              )}
              <a
                href="#"
                className="mx-2 text-xs font-semibold text-gray-900"
                role="link"
              >
                {blog?.profile?.firstName} {blog?.profile?.lastName}
              </a>
            </div>
            <span className="mx-1  text-xs text-gray-600">
              {dayjs(blog?.createdAt).format("MMM D, YYYY hh:mm A")}
            </span>
          </div>

          <div>
            <Link href={blog?.blogId}>
              <Button type="default" size="small">
                Read More
              </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
