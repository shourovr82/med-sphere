/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { useState } from "react";

import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import FormSelectField from "@/components/forms/Forms/FormSelectField";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import UploadImage from "@/components/forms/ui/UploadImage";
import { Button, Col, Row, message } from "antd";
import SpecializationFormField from "@/components/forms/Forms/specializationField/SpecializationFormField";
import { useRegistrationMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";

const AddUserPage = () => {
  const roles = [
    {
      label: "USER",
      value: "USER",
    },

    {
      label: "DOCTOR",
      value: "DOCTOR",
    },
  ];

  const [isRoleIsDoctor, setIsRoleIsDoctor] = useState(false);

  const [registration, { isLoading, error }] = useRegistrationMutation();
  const router = useRouter();

  const handleCreateUserSubmit = async (values: any) => {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      role: values.role,
      email: values.email,
      password: values.password,
      profileImage: values.profileImage,
    };
    message.loading("Creating User");
    try {
      const res = await registration(userData);
      console.log(res);
      // @ts-ignore
      if (res?.data && !error) {
        message.success("Successfully Created User");
        router.push("/dashboard/user-lists");
      }
    } catch (error: any) {
      console.error(error?.data?.message);
      message.error(error?.data?.message);
    }
  };
  return (
    <div className="bg-white  p-5 rounded-2xl shadow-lg">
      <UMBreadCrumb
        items={[
          { label: `Dashboard`, link: `/dashboard` },
          { label: "User List", link: `/dashboard/add-user` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">Create New User</h1>
        </div>
        <Form submitHandler={handleCreateUserSubmit}>
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
              User information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  name="email"
                  label="Email"
                  type="email"
                  size="large"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput
                  type="password"
                  name="password"
                  label="Password"
                  size="large"
                />
              </Col>{" "}
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormSelectField
                  setIsRoleIsDoctor={setIsRoleIsDoctor}
                  name="role"
                  label="User Role"
                  options={roles}
                  size="large"
                />
              </Col>
            </Row>
          </div>
          {/* basic information  */}
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
              Basic information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput name="firstName" label="First Name" size="large" />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormInput name="lastName" label="Last Name." size="large" />
              </Col>{" "}
              <Col span={12} style={{ margin: "10px 0" }}>
                <label htmlFor="image">Profile Image</label>
                <UploadImage key="profileImage" name="profileImage" />
              </Col>
            </Row>
          </div>
          {/* Other information  */}
          {isRoleIsDoctor && (
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "5px 0px",
                }}
              >
                Other information
              </p>
              <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <SpecializationFormField
                    name="specialization"
                    label="Specialization"
                  />
                </Col>
              </Row>
            </div>
          )}
          <Button htmlType="submit">submit</Button>
        </Form>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AddUserPage;
