"use client";

import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/features/auth/authApi";
import { storeUserInfo } from "@/services/auth.service";

import { Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [login, { isLoading }] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const res = await login(data).unwrap();
      console.log(res);

      if (res?.accessToken) {
        storeUserInfo({ accessToken: res?.accessToken });
        router.push("/");
        message.success("User logged in successfully!");
      }
    } catch (error: any) {
      console.error(error?.data?.message);
      message.error(error?.data?.message);
    }
  };

  return (
    <div className="h-screen flex  bg-bgColor  items-center justify-center px-5  ">
      <div className="  p-10 rounded-xl shadow-xl bg-white  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Form submitHandler={onSubmit}>
          {/* profile information  */}
          <div className=" w-full  ">
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={24}>
                <FormInput
                  name="email"
                  label="Email"
                  size="large"
                  type="email"
                  placeholder="Enter your Email"
                />
              </Col>

              <Col span={24}>
                <FormInput
                  name="password"
                  label="Password"
                  size="large"
                  type="password"
                  placeholder="Enter Your  Password"
                />
              </Col>
            </Row>
          </div>

          <div className="flex items-center mt-5 justify-between gap-5">
            <Link
              className="text-xs  hover:text-blue-600 hover:underline"
              href="/sign-up"
            >
              Want to Register?
            </Link>
            <Button
              htmlType="submit"
              type="primary"
              className="w-[40%]"
              loading={isLoading}
              disabled={isLoading}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
