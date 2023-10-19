"use client";

import InputField from "@/components/InputField/InputField";
import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import FormTextArea from "@/components/forms/Forms/FormTextArea";
import { useRegistrationMutation } from "@/redux/features/auth/authApi";
import regImg from "@/assets/reg.png";
import { Button, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [registration, { isLoading }] = useRegistrationMutation();

  const router = useRouter();

  // const onSubmit = async (data: any) => {
  //   try {
  //     const res = await registration(data).unwrap();
  //     console.log(res);

  //     if (res?.email || res?.userId) {
  //       router.push("/login");
  //       message.success("Registration success.Please Login");
  //       reset();
  //     }
  //   } catch (error: any) {
  //     console.error(error?.data?.message);
  //     message.error(error?.data?.message);
  //   }
  // };
  const handleCreateAccount = async (data: any) => {
    try {
      const res: any = await registration(data).unwrap();
      console.log(res);

      if (res?.email || res?.userId) {
        router.push("/login");
        message.success("Registration success.Please Login");
        reset();
      }
    } catch (error: any) {
      console.error(error?.data?.message || "Some thing was wrong");
      message.error(error?.data?.message || "Some thing was wrong");
    }
  };

  return (
    <div className="max-w-7xl mx-auto min-h-[710px] flex  justify-center items-center ">
      <div className="shadow-2xl md:p-5 bg-white rounded-2xl">
        <Form submitHandler={handleCreateAccount}>
          <div className=" px-2 md:px-5 grid grid-cols-1 md:grid-cols-2  mx-auto">
            <div>
              <Image src={regImg} alt="" />
            </div>

            <div className=" p-8  flex flex-col  ">
              <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">
                REGISTER
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600 text-[14px]">
                Enter your information to register
              </p>

              <FormInput
                name="firstName"
                label="First Name"
                placeholder="Enter Your First Name"
                type="text"
              />
              <FormInput
                name="lastName"
                label="Last Name"
                placeholder="Enter Your Last Name"
                type="text"
              />
              <FormInput
                name="email"
                label="Email"
                placeholder="Enter Your Email"
                type="email"
              />
              <FormInput
                name="password"
                label="Password"
                placeholder="Enter Your Password"
                type="password"
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
                Register
              </Button>

              <h2 className="mt-2 text-sm  ">
                Already have an account? <Link href="/login">Login Here</Link>{" "}
              </h2>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
