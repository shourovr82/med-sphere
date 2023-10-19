"use client";

import { useState } from "react";

import logo from "@/assets/logo/logo.png";

import { Layout, Menu, theme } from "antd";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { sidebarItems } from "@/components/sidebarMenuItems/SidebarMenuItems";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.service";

const { Sider } = Layout;

const DashboardSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { role } = getUserInfo() as any;

  return (
    <div className="relative   ">
      <Sider
        // collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={280}
        className="shadow-lg shadow-purple-200 "
        style={{
          background: "#fff",
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
          borderRadius: "40px 0px 0px 40px ",
        }}
      >
        <div className="m-5 flex flex-col justify-center items-center">
          <Link href="/">
            <Image src={logo} className="!w-40 object-contain" alt="" />
          </Link>
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(role)}
        />
        <div className="flex justify-center w-full absolute z-20 bg-white  bottom-0  ">
          {" "}
          <button
            className="rounded-none  flex justify-center py-4 border-t text-primary w-full   text-xl hover:bg-primary duration-300 ease-in-out transition-all hover:text-white"
            onClick={() => setCollapsed(!collapsed)}
          >
            {!collapsed ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>
      </Sider>
      {/*  */}
    </div>
  );
};

export default DashboardSidebar;
