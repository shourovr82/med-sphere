/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutImageOne from "../../../public/assists/about_doctor_female.jpg";
import aboutImageTwo from "../../../public/assists/about_doctor-2.jpg";
import Image from "next/image";

const HomepageAboutSection = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
            Our mission at Med Sphere is clear: to make quality healthcare
            information accessible to everyone. We are driven by a set of core
            values, including transparency, accuracy, and empathy. These
            principles guide us in providing reliable and up-to-date content
            that can help individuals make informed decisions about their
            health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomepageAboutSection;
