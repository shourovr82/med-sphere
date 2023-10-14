"use client";

import { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import logo from "@/assets/logo/logo.png";

import type { MenuProps } from "antd";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { sidebarItems } from "@/components/sidebarMenuItems/SidebarMenuItems";
import { USER_ROLE } from "@/constants/user";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const DashboardSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="relative   ">
      <Sider
        // collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={280}
        className="shadow-2xl "
        style={{
          background: "#fff",
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
          borderRadius: "0px 50px 0px 0px ",
        }}
      >
        <div className="m-5 flex flex-col justify-center items-center">
          <Image src={logo} className="w-40" alt="" />
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(`ADMIN`)}
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
