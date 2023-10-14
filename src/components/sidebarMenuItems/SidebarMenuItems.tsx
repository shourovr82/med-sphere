import type { MenuProps } from "antd";
import {
  UsergroupAddOutlined,
  TableOutlined,
  AppstoreOutlined,
  UserOutlined,
  UsergroupDeleteOutlined,
  BookOutlined,
  PlusSquareOutlined,
  UserSwitchOutlined,
  UserAddOutlined,
  CustomerServiceOutlined,
  CloudServerOutlined,
  FolderAddOutlined,
  DiffOutlined,
  FileAddOutlined,
  FileSearchOutlined,
  SecurityScanOutlined,
  BoldOutlined,
  OrderedListOutlined,
  AlignLeftOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "@/constants/user";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UsergroupAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}`}>Account Profile</Link>,
          icon: <UserOutlined />,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          icon: <UsergroupDeleteOutlined />,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/booking-list`}>My Booking List</Link>,
      icon: <BookOutlined />,
      key: `/${role}/booking-list`,
    },
    {
      label: <Link href={`/${role}/reviews`}>My Reviews</Link>,
      icon: <PlusSquareOutlined />,
      key: `/${role}/reviews`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "User management",
      key: "user-management",
      icon: <UserSwitchOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/super-admin/add-user`}>Add user</Link>,
          key: `/add-user`,
          icon: <UserAddOutlined />,
        },
        {
          label: <Link href={`/user-list`}>User List</Link>,
          key: `/user-list`,
          icon: <UsergroupAddOutlined />,
        },
      ],
    },
    {
      label: "service management",
      key: "service-management",
      icon: <CustomerServiceOutlined />,
      children: [
        {
          label: <Link href={`/add-service`}>Add Service</Link>,
          key: `/add-service`,
          icon: <FolderAddOutlined />,
        },
        {
          label: <Link href={`/service-list`}>Service List</Link>,
          key: `/service-list`,
          icon: <CloudServerOutlined />,
        },
      ],
    },
    {
      label: "booking management",
      key: "booking-management",
      icon: <DiffOutlined />,
      children: [
        {
          label: <Link href={`/add-booking`}>Add Booking</Link>,
          key: `/add-service`,
          icon: <FileAddOutlined />,
        },
        {
          label: <Link href={`/booking-list`}>Booking List</Link>,
          key: `/booking-list`,
          icon: <FileSearchOutlined />,
        },
      ],
    },
    {
      label: "Content Management",
      key: "content-management",
      icon: <SecurityScanOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/super-admin/add-blog`}>Add Blog</Link>,
          key: `/add-blog`,
          icon: <BoldOutlined />,
        },
        {
          label: <Link href={`/blog-list`}>Blog List</Link>,
          key: `/blog-list`,
          icon: <OrderedListOutlined />,
        },
        {
          label: <Link href={`/add-faq`}>Add FAQ</Link>,
          key: `/add-faq`,
          icon: <BookOutlined />,
        },
        {
          label: <Link href={`/faq-list`}>FAQ List</Link>,
          key: `/faq-list`,
          icon: <AlignLeftOutlined />,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...adminSidebarItems,
    {
      label: "Admin-Management",
      key: "admin-management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/add-admin`}>add Admin</Link>,
          icon: <PlusCircleOutlined />,
          key: `/add-admin`,
        },
        {
          label: <Link href={`/admin-list`}>Admin List </Link>,
          icon: <TableOutlined />,
          key: `/admin-list`,
        },
      ],
    },
  ];

  const doctorSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/booking-list`}>Booking Lists</Link>,
      icon: <TableOutlined />,
      key: `/booking-list`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.DOCTOR) return doctorSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
