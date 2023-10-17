"use client";
import Image from "next/image";
import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import TextArea from "antd/es/input/TextArea";
import InputField from "@/components/InputField/InputField";

const AppointmentSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className=" md:grid grid-cols-2  gap-5 items-center mt-10 mb-40">
      <div className="col-span-1">
        <Image
          src="https://askproject.net/meddic/wp-content/uploads/sites/156/2023/10/team-of-doctors-discussing-something-at-hospital-c-FHAY6CS.jpg"
          alt="Picture of the author"
          width={600}
          height={600}
          className="rounded-xl  border-2 "
        />
      </div>

      {/* FAQS */}
      <div className="col-span-1 my-[20px] md:my-0 flex flex-col md:h-[400px] justify-around   w-full">
        <p className="text-primary md:text-[20px] text-[16px] font-semibold">
          APPOINTMENT
        </p>
        <p className=" md:text-[45px] text-[35px] md:w-[550px]">
          Book Your Appointment
        </p>
        <p className="md:w-[500px] text-gray-[400px]  text-gray-500">
          The benefits of MEDDPICC are that it allows sellers to quickly qualify
          or disqualify opportunities.
        </p>

        {/* apoinment form */}

        <form onSubmit={handleSubmit(onSubmit)} className="md:w-[500px]">
          <InputField
            label="Your Name"
            errors={errors}
            name="name"
            placeholder="Enter your name"
            required={true}
            register={register}
            type="text"
          />

          <div className="my-[12px] md:flex gap-2">
            <InputField
              label="Phone"
              errors={errors}
              name="number"
              placeholder="Enter your Number"
              required={true}
              register={register}
              type="number"
            />
            <InputField
              label="Email"
              errors={errors}
              name="email"
              placeholder="Enter your Email"
              required={true}
              register={register}
              type="email"
            />
          </div>
          <div className="my-[12px] md:flex gap-2">
            <InputField
              label="Date"
              errors={errors}
              name="date"
              placeholder="Select Date"
              required={true}
              register={register}
              type="date"
            />
            <InputField
              label="Time"
              errors={errors}
              name="time"
              placeholder="Enter your Email"
              required={true}
              register={register}
              type="time"
            />
          </div>

          <div>
            <div className="flex gap-1 items-center mb-1">
              <label className={`label_text`}>
                message
                {errors?.message && <span className="text-rose-500">*</span>}
              </label>
            </div>

            <TextArea
              showCount
              maxLength={100}
              style={{ height: 120, marginBottom: 24 }}
              placeholder="can resize"
              {...register("message")}
            />
          </div>

          <button type="submit" className="appointmentButton">
            Make Appoinment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentSection;
