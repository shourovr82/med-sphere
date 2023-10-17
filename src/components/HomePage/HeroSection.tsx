/* eslint-disable @next/next/no-img-element */
import React from "react";

import DoctorImage from "../../../public/assists/bruno-rodrigues-279xIHymPYY-unsplash-removebg-preview.png";
import Image from "next/image";

const HeroSection = () => {
  const HeroData = [
    {
      name: "25+",
      description: "Years of Experience",
    },
    {
      name: "140+",
      description: "Specialist Doctors",
    },
  ];

  return (
    <div className=" h-[740px] md:flex items-center ">
      {/* welcome */}
      <div className="font-inter my-[20px] md:my-0 flex flex-col h-[400px] justify-around">
        <p className="text-[#9c01fe] md:text-[20px] text-[16px] font-semibold">
          WELCOME TO MED-SPHERE
        </p>
        <p className=" md:text-[55px] text-[35px] md:w-[550px]">
          We Are Here to Hear <br /> and Heal Your <br /> Health Problems
        </p>
        <p className="md:w-[500px] text-gray-[400px]  text-gray-500">
          The benefits of MEDDPICC are that it allows sellers to quickly qualify
          or disqualify opportunities before they get too far into the sales
          process and gives sellers a framework to start from.
        </p>

        <div className="flex w-full gap-5 my-[10px]">
          <button className="px-[22px] py-[8px] bg-[#47177e] text-white rounded-md   hover:scale-105 ease-in-out duration-300 transition-all  ">
            Get Start
          </button>
          <button className="px-[22px] py-[8px]  rounded-md border-2  hover:scale-105 ease-in-out duration-300 transition-all  ">
            Contact Us
          </button>
        </div>
      </div>

      {/* image */}

      <div className="hidden md:block">
        <Image
          src={DoctorImage}
          alt=""
          width={500}
          height={600}
          className="md:mt-[90px] md:w-[550px] md:h-[650px]"
        />
      </div>

      {/* card */}
      <div className="flex flex-col gap-5">
        {HeroData.map((data, i) => (
          <div
            key={i}
            className="card flex flex-col items-center justify-center bg-white p-4 md:w-[250px]  rounded-xl shadow-xl"
          >
            <p className="text-[40px] font-semibold">{data.name}</p>
            <p className="text-[18px] text-gray-500">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
