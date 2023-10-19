"use client";
import Image from "next/image";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { Button, Modal, message } from "antd";
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
    <div className="max-md:px-2 shadow-2xl p-5   rounded-2xl md:flex gap-10 items-center mb-[60px]">
      {/* FAQS */}
      <div className="font-inter my-[20px] w-full md:my-0 flex flex-col md:h-[400px] justify-around ">
        <p className="text-primary md:text-[20px] text-[16px] font-semibold">
          APPOINTMENT
        </p>
        <p className="font-poppins md:text-[45px] text-[35px] md:w-[550px]">
          Book Your Appointment
        </p>
        <p className="md:w-[500px] text-gray-[400px] font-poppins text-gray-500">
          The benefits of MED SPHERE are that it allows sellers to quickly
          qualify or disqualify opportunities.
        </p>

        {/* apoinment form */}

        <Form submitHandler={bookingOnSubmit}>
          <div className="my-[12px] grid grid-cols-2 md:grid-cols-7 items-end gap-2 w-full">
            <div className="col-span-2">
              <FormDatePicker name="appointmentDate" label="Appointment Date" />
            </div>
            <div className="col-span-2">
              <FormSelectField
                name="slot.slotId"
                label="Booking Slot"
                options={slotData?.map((c: any) => ({
                  label: c.slotTime,
                  value: c.slotId,
                }))}
              />
            </div>
            <div className="md:col-span-2">
              <FormSelectField
                name="service.serviceId"
                label="Service Name"
                options={serviceData?.map((c: any) => ({
                  label: c.serviceName,
                  value: c.serviceId,
                }))}
              />
            </div>
            <div className="col-span-1">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="appointmentButton"
              >
                Make Appointment
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Appointment;
