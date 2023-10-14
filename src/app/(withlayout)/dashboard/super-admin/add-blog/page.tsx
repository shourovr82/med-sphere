"use client";
import { useState } from "react";

import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import FormSelectField from "@/components/forms/Forms/FormSelectField";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import UploadImage from "@/components/forms/ui/UploadImage";
import { Button, Col, Row, message } from "antd";
import SpecializationFormField from "@/components/forms/Forms/specializationField/SpecializationFormField";
import FormTextArea from "@/components/forms/Forms/FormTextArea";

const AddUserPage = () => {
  const roles = [
    {
      label: "USER",
      value: "USER",
    },
    {
      label: "ADMIN",
      value: "ADMIN",
    },
    {
      label: "SUPER ADMIN",
      value: "SUPER_ADMIN",
    },
    {
      label: "DOCTOR",
      value: "DOCTOR",
    },
  ];

  const [isRoleIsDoctor, setIsRoleIsDoctor] = useState(false);

  const adminOnSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      // const res = await addFacultyWithFormData(formData);
      // if (!!res) {
      //   message.success("Faculty created successfully!");
      // }
    } catch (err: any) {
      // console.error(err.message);
    }
  };

  const base = "super-admin";
  return (
    <>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/dashboard/${base}` },
          { label: "add-blog", link: `/dashboard/${base}/add-blog` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">Create New Blog</h1>
        </div>
        <Form submitHandler={adminOnSubmit}>
          {/* faculty information */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}
            >
              Blog information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={3} style={{ margin: "10px 0" }}>
                <p className="pb-2">Blog Image</p>
                <UploadImage name="file" />
              </Col>{" "}
              <Col span={21} style={{ margin: "10px 0" }}>
                <FormTextArea name="blog" label="Blog Title" rows={4} />
              </Col>
              <Col span={24} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="blogDescription"
                  label="Blog Description"
                  rows={8}
                />
              </Col>{" "}
            </Row>
          </div>

          <Button htmlType="submit">submit</Button>
        </Form>
        <br />
        <br />

        <br />
      </div>
    </>
  );
};

export default AddUserPage;
