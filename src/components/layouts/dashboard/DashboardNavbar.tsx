/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Dropdown, MenuProps, Space } from "antd";

import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/common";
import { useRouter } from "next/navigation";

const DashboardNavbar = () => {
  const router = useRouter();
  const user = getUserInfo() as any;

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      label: <Link href="/"> Home</Link>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <button onClick={logOut} className="text-red-600 font-semibold  w-full">
          Logout
        </button>
      ),
      key: "3",
    },
  ];

  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.06) -3px 0px 0px -8px, #e9d8ff6b -11px 23px 13px -15px",
        boxSizing: "border-box",
      }}
      className="border-b justify-between px-5 py-2 sticky top-0 h-14 flex items-center  w-full z-10 bg-[#fff]"
    >
      <div>Welcome back {user?.email}</div>
      <div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MenuOutlined className=" text-2xl" />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default DashboardNavbar;
