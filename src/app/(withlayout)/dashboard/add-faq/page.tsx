"use client";

import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import FormTextArea from "@/components/forms/Forms/FormTextArea";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import React from "react";

const AddFaq = () => {
  const submitHandler = (data: any) => {
    console.log(data);
  };
  const base = "super-admin";
  return (
    <div className="bg-white  p-5 rounded-2xl shadow-lg">
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/dashboard` },
          { label: "add-blog", link: `/dashboard/add-blog` },
        ]}
      />
      <div>
        <div>
          <h1 className="text-[25px] my-[12px] font-semibold">Add FAQ</h1>
        </div>

        <Form submitHandler={submitHandler}>
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
          />
        </Form>
      </div>
    </div>
  );
};

export default AddFaq;
