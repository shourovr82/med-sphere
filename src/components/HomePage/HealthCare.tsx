import React from "react";
import backgroudImage from "../../../public/assists/TaeAugust11.jpg";
import Image from "next/image";
import { Button } from "antd";

type BookAppointmentData = {
  _id: number;
  day: string;
  time: string;
};

const HealthCare = () => {
  const bookAppointmentData: BookAppointmentData[] = [
    {
      _id: 1,
      day: "Mon-Wed",
      time: "8:00am - 5:00pm",
    },
    {
      _id: 2,
      day: "Thu-Fri",
      time: "9:00am - 6:00pm",
    },
    {
      _id: 3,
      day: "Sat-Sun",
      time: "9:00am - 3:00pm",
    },
    {
      _id: 4,
      day: "Mon-Wed",
      time: "8:00am - 5:00pm",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(https://askproject.net/meddic/wp-content/uploads/sites/156/2023/10/young-multiracial-doctor-sitting-at-reception-and-GCCHF87.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[700px] rounded-xl w-full mb-[150px] flex justify-end  items-center  shadow-2xl"
    >
      <div className="bg-primary rounded-xl md:p-[60px] p-[10px] font-inter text-white md:w-[720px] md:h-[780px]">
        <p className="md:text-[18px] font-semibold pb-[16px]">WORKING HOURS</p>
        <p className="md:text-[45px] text-[25px] font-sans">
          Healthcare at Its Finest
        </p>

        <p className="text-[14px] my-[12px]">
          I am currently a senior at the University of Southern California
          pursuing a dual degree in business administration and public policy,
          management, and planning ...
        </p>

        {/* book */}
        <div className="py-[50px] flex flex-col gap-2">
          {bookAppointmentData.map((data) => (
            <div
              key={data?._id}
              className="flex w-full font-semibold justify-between md:text-[19px] text-[14px] border-b-2 border-borderColor "
            >
              <p className=" font-semibold pb-[16px] w-[30%]">{data?.day}</p>
              <p className=" font-sans w-[40%]">{data?.time}</p>
              {/* book now button */}
              {/* <button className="bg-black rounded-xl px-[15px] font-inter text-white text-[12px] ">
                Book Now
              </button> */}
              <Button
                style={{
                  backgroundColor: "black",
                }}
                type="primary"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

        <div>
          <p className="text-[20px] font-semibold">Time’s not flexible?</p>

          <button
            style={{
              backgroundColor: "white",
              color: "gray !important",
              margin: "5px 0px",
            }}
            className="appointmentButton"
          >
            Make an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
