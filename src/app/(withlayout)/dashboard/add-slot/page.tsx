/* eslint-disable @typescript-eslint/ban-ts-comment */

"use client";

import Form from "@/components/forms/Forms/Form";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import { useCreateSlotMutation } from "@/redux/features/slots/slotApi";
import { useState } from "react";

import { Button, Col, Row, TimePicker, message } from "antd";

const AddBooking = () => {
  const [time, setTime] = useState<any>("");
  const [createSlot, { isLoading, isError, error }] = useCreateSlotMutation();
  const slotOnSubmit = async (data: any) => {
    if (!time) {
      message.error("Please select time slot");
      return;
    }

    const SlotData = {
      slotTime: time,
    };

    console.log(SlotData);
    try {
      const res: any = await createSlot(SlotData);
      console.log(res);

      if (res?.data && !isError) {
        message.success("Slot created successfully");
        // router.push("/dashboard/booking/booking-list");
      }

      if (res?.data === undefined) {
        message.error("Slot already added");
      }
    } catch (err: any) {
      console.error(err?.data?.message);
      message.error("something went wrong");
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: "dashboard", link: `/dashboard` },
          { label: "add-booking", link: `/dashboard/add-booking` },
        ]}
      />
      <h1 className="mt-10">Create Slot</h1>
      <Form submitHandler={slotOnSubmit}>
        <Row gutter={{ xs: 24, xl: 12, lg: 8, md: 24 }}>
          <Col span={12} style={{ margin: "15px 0" }}>
            {/* <div style={{ margin: "10px 0px" }}>
              <FormDatePicker name="booking.Date" label="Appointment Date" />
            </div> */}
            <div style={{ margin: "10px 0px" }}>
              <TimePicker.RangePicker
                use12Hours
                format="h:mm a"
                onChange={(time: any, timeString: any) =>
                  setTime(`${timeString[0]}-${timeString[1]}`)
                }
              />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Create Booking
        </Button>
      </Form>
    </div>
  );
};

export default AddBooking;
