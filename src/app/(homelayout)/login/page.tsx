"use client";

import InputField from "@/components/InputField/InputField";
import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/features/auth/authApi";
import { storeUserInfo } from "@/services/auth.service";

import { Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [login, { isLoading, error }] = useUserLoginMutation();
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
    <div className="min-w-screen min-h-screen bg-bgColor flex items-center justify-center px-5 py-5">
      <div className="rounded-3xl text-gray-500  shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full p-5  ">
          <Form submitHandler={onSubmit}>
            {/* profile information  */}
            <div>
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
                    placeholder="Enter Your  Password"
                  />
                </Col>
              </Row>
            </div>

            <div className="flex mt-5 justify-between gap-5">
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
    </div>
  );
};

export default LoginPage;
