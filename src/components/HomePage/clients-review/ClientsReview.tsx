"use client";

import { Button, message } from "antd";

import { useCreateFeedBackMutation } from "@/redux/features/feedback/feedbackApi";
import FormInput from "@/components/forms/Forms/FormInput";
import Form from "@/components/forms/Forms/Form";
import FormTextArea from "@/components/forms/Forms/FormTextArea";
import Image from "next/image";
import feedbackImg from "@/assets/feedback.png";

const FeedBackForum = () => {
  const [createFeedBack, { isLoading }] = useCreateFeedBackMutation();

  const handleSubmit = async (data: any) => {
    try {
      const res: any = await createFeedBack(data);

      if (res?.data) {
        message.success("Feedback Submitted Successfully");
      }
    } catch (error: any) {
      console.error(error?.data?.message || "Some thing was wrong");
      message.error(error?.data?.message || "Some thing was wrong");
    }
  };

  return (
    <section className="text-gray-600 body-font relative  ">
      <h2 className="text-2xl  font-semibold">Submit your Feedback here</h2>
      <Form submitHandler={handleSubmit}>
        <div className=" px-5 py-24 grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto">
          <div>
            <Image src={feedbackImg} alt="" />
          </div>

          <div className=" bg-white rounded-lg p-8 flex flex-col  z-10 shadow-md">
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 text-[14px]">
              Medic Need your feedback to improve our service. Please give us
            </p>

            <FormInput
              name="feedbackSubject"
              label="Subject"
              placeholder="Enter Subject"
              type="text"
            />

            <FormTextArea
              name="feedbackComment"
              label="Message"
              placeholder="Enter Message"
              rows={10}
            />

            <Button
              htmlType="submit"
              type="primary"
              className="text-white mt-[8px] bg-primary border-0  px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              style={{
                background: "#3F51B5",
                color: "#fff",
              }}
            >
              Submit
            </Button>
            <p className="text-xs text-gray-500 mt-3">
              Medic provide free Hospital Services for clinics and health care
              providers.
            </p>
          </div>
        </div>
      </Form>
    </section>
  );
};
export default FeedBackForum;
