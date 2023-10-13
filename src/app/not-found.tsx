import Link from "next/link";
import React from "react";

const NotFound = () => {
  const error = {
    status: 404,
    statusText: "Page Not Found",
  };
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center ">
        <div className="bg-white  rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center ">
            <img
              loading="lazy"
              className="px-4 hidden md:block"
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt=""
            />
            <img
              loading="lazy"
              className="md:hidden"
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt=""
            />
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
              OOPS! <span className="text-red-600">{`${error?.status}`}</span>
            </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
              <span className="text-red-600">{error?.statusText}</span> <br />
              <br />
              No signal here! we cannot find the page you are looking for{" "}
            </p>
            <Link href="/">
              <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-primary hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-[#43efb9]">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
