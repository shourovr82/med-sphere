"use client";

import Contents from "@/components/layouts/dashboard/Contents";
import DashboardSidebar from "@/components/layouts/dashboard/DashboardSidebar";
import { USER_ROLE } from "@/constants/user";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);

  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }
  return (
    <>
      <Layout hasSider>
        <DashboardSidebar />
        <Contents>{children}</Contents>
      </Layout>
    </>
  );
};

export default DashboardLayout;
