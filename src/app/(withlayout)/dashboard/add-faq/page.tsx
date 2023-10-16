"use client";

import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import FormTextArea from "@/components/forms/Forms/FormTextArea";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import { useCreateFaqMutation } from "@/redux/features/faqs/faqApi";
import { Button, message } from "antd";
import React from "react";

const AddFaq = () => {
  const [createFaq, { isLoading, isSuccess }] = useCreateFaqMutation(undefined);

  const faqOnSubmit = async (data: any) => {
    message.loading("Creating new Faq");
    const faqData = {
      faqTitle: data.faqTitle,
      faqDescription: data.faqDescription,
    };
    try {
      const res = await createFaq(faqData).unwrap();
      console.log(isLoading);

      if (res && isSuccess && !isLoading) {
        message.success("FAQ created successfully");
      }
    } catch (err: any) {
      console.error(err?.data?.message);
      message.error("something went wrong");
    }
  };

  return (
    <div className="bg-white  p-5 rounded-2xl shadow-lg">
      <UMBreadCrumb
        items={[
          { label: `Dashboard`, link: `/dashboard` },
          { label: "Add FAQ", link: `/dashboard/add-faq` },
        ]}
      />
      <div>
        <div>
          <h1 className="text-[25px] my-[12px] font-semibold">Add FAQ</h1>
        </div>

        <Form submitHandler={faqOnSubmit}>
          <FormInput
            name="faqTitle"
            label="FAQ Title"
            placeholder="Enter FAQ Title"
            size="large"
            type="text"
          />
          <FormTextArea
            name="faqDescription"
            label="FAQ Description"
            placeholder="Enter FAQ Description"
            rows={8}
          />{" "}
          <div className="mt-5">
            <Button type="primary" htmlType="submit">
              Create FAQ
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddFaq;
