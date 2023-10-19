"use client";
import Image from "next/image";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { Modal, message } from "antd";
const { confirm } = Modal;
import { ExclamationCircleFilled } from "@ant-design/icons";
import { isLoggedIn } from "@/services/auth.service";
import { useGetSlotsQuery } from "@/redux/features/slots/slotApi";
import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import { useCreateBookingMutation } from "@/redux/features/booking/bookingApi";
import Form from "@/components/forms/Forms/Form";
import FormDatePicker from "@/components/forms/Forms/FormDatePicker";
import FormSelectField from "@/components/forms/Forms/FormSelectField";

const Appointment = () => {
  const userLoggedIn = isLoggedIn();

  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  query["searchTerm"] = searchTerm;

  const { data: slotData, isLoading: slotLoading } =
    useGetSlotsQuery(undefined);

  const { data: serviceData, isLoading: serviceLoading } =
    useGetAllServicesQuery({ limit: 20 });

  const [createBooking, { isLoading, isError }] = useCreateBookingMutation();

  const router = useRouter();

  const bookingOnSubmit = async (data: any) => {
    const dateString = data?.appointmentDate?.$d;
    const dateObject = new Date(dateString);

    const isoString = dateObject?.toISOString();

    const BookingData = {
      appointmentDate: isoString,
      slotId: data.slot.slotId,
      serviceId: data.service.serviceId,
    };

    if (!userLoggedIn) {
      confirm({
        title: "Please Login First",
        icon: <ExclamationCircleFilled />,
        content: "You need to login first to book. Do you want to login?",
        onOk() {
          return router.push("/login");
        },
        onCancel() {},
      });

      return;
    } else {
      try {
        const res: any = await createBooking(BookingData);

        if (res?.data) {
          message.success(
            "Slot added on your booking.admin will verified and confirm your booking"
          );
        }
      } catch (error: any) {
        console.error(error);
        message.error(error?.data?.message);
      }
    }
  };

  return (
    <div className="common md:flex gap-10 items-center mb-[60px]">
      <Image
        src="https://askproject.net/meddic/wp-content/uploads/sites/156/2023/10/team-of-doctors-discussing-something-at-hospital-c-FHAY6CS.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        className="rounded-xl md:w-[550px] md:h-[660px] border-2 "
      />

      {/* FAQS */}
      <div className="font-inter my-[20px] md:my-0 flex flex-col md:h-[400px] justify-around ">
        <p className="text-primary md:text-[20px] text-[16px] font-semibold">
          APPOINTMENT
        </p>
        <p className="font-poppins md:text-[45px] text-[35px] md:w-[550px]">
          Book Your Appointment
        </p>
        <p className="md:w-[500px] text-gray-[400px] font-poppins text-gray-500">
          The benefits of MEDDPICC are that it allows sellers to quickly qualify
          or disqualify opportunities.
        </p>

        {/* apoinment form */}

        <Form submitHandler={bookingOnSubmit}>
          <div className="my-[12px] flex flex-col items-center justify-center gap-2 w-full">
            <div style={{ margin: "10px 0px", width: "100%" }}>
              <FormDatePicker name="appointmentDate" label="Appointment Date" />
            </div>
            <div style={{ margin: "10px 0px", width: "100%" }}>
              <FormSelectField
                name="slot.slotId"
                label="Booking Slot"
                options={slotData?.map((c: any) => ({
                  label: c.slotTime,
                  value: c.slotId,
                }))}
              />
            </div>
            <div style={{ margin: "10px 0px", width: "100%" }}>
              <FormSelectField
                name="service.serviceId"
                label="Service Name"
                options={serviceData?.map((c: any) => ({
                  label: c.serviceName,
                  value: c.serviceId,
                }))}
              />
            </div>
          </div>

          <button type="submit" className="appointmentButton">
            Make Appointment
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Appointment;
