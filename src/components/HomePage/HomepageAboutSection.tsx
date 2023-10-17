import React from "react";
import aboutImageOne from "../../../public/assists/about_doctor_female.jpg";
import aboutImageTwo from "../../../public/assists/about_doctor-2.jpg";
import Image from "next/image";

const HomepageAboutSection = () => {
  return (
    <div className=" md:grid grid-cols-4 w-full  justify-between my-20 items-center gap-10">
      <div className="col-span-2  ">
        <Image
          src={aboutImageTwo}
          alt="Picture of the author"
          className="w-full rounded-xl  shadow-xl  "
        />
      </div>

      {/* about */}
      <div className="col-span-2  font-inter my-[20px] md:my-0 flex flex-col h-[400px] justify-around ">
        <p className="text-[#47177e] md:text-[20px] text-[16px] font-semibold">
          ABOUT US
        </p>
        <p className=" md:text-[45px] text-[35px] md:w-[550px]">
          We Collaborate for Better Healthcare
        </p>
        <p className="md:w-[500px] text-gray-[400px]  text-gray-500">
          The benefits of MED-SPHERE are that it allows sellers to quickly
          qualify or disqualify opportunities.
        </p>

        <div className="flex w-full gap-5 my-[10px]">
          <button className="border px-5 py-2 bg-primary text-white rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageAboutSection;
