"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/logo/logo.png";
import Link from "next/link";
import { INavbarType } from "@/types/NavbarType";
import NavbarMenu from "./NavbarMenu";
import { PhoneTwoTone } from "@ant-design/icons";
import { AppstoreOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = {
    name: "John Doe",
    email: "shafin",
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const NavbarData: INavbarType[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
      isSubMenu: true,
      subMenu: [
        {
          name: "Services",
          link: "/services",
        },
        {
          name: "Services Details",
          link: "/services-details",
        },
      ],
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <section className="border-b-2 borderColor">
        <div className="py-2 max-w-7xl mx-auto  flex gap-3 items-center justify-between w-full ">
          {/* logo */}
          <Link href={"/"} className="md:w-full ">
            <Image src={Logo} alt="" className="w-20 " />
          </Link>
          {/* NavData */}
          <div className="md:flex hidden gap-3 w-full justify-between ">
            {NavbarData?.map((nav: INavbarType, i: number) => (
              <NavbarMenu key={i} navbarData={nav} />
            ))}
          </div>

          {/* appoinment */}

          <div className="flex gap-5 items-center w-full justify-end  ">
            {/* emergengy call */}
            <div className="hidden md:flex items-center gap-2 cursor-pointer ">
              <PhoneTwoTone className="text-primary" />
              <p>Emergency Call</p>
            </div>

            {/* apointment */}
            <button
              style={{
                boxShadow: " 3px 3px 3px 0px rgba(109,40,217)",
              }}
              className=" hidden md:block appointmentButton"
            >
              Apointment{" "}
            </button>
            {/* button and drower */}
            <>
              <button
                onClick={showDrawer}
                className="block md:hidden text-[32px] border rounded-lg "
              >
                <AppstoreOutlined />
              </button>

              <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                open={open}
                className="text-[20px] text-center"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                {NavbarData?.map((nav: INavbarType, i: number) => (
                  <p key={i} className="text-[20px] my-[20px]">
                    {nav.name}
                  </p>
                ))}
              </Drawer>
            </>

            {/* user */}

            {user ? (
              <div className="flex items-center justify-center ">
                <div className=" relative inline-block text-left dropdown">
                  <span className="rounded-md shadow-sm">
                    <button
                      className="inline-flex justify-center w-full  text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out  rounded-md hover:text-gray-500 "
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="true"
                      aria-controls="headlessui-menu-items-117"
                    >
                      <Image
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </button>
                  </span>
                  <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div
                      className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                      aria-labelledby="headlessui-menu-button-1"
                      id="headlessui-menu-items-117"
                      role="menu"
                    >
                      <div className="px-4 py-3">
                        <p className="text-sm leading-5">Signed in as</p>
                        <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                          masud@gmail.com
                        </p>
                      </div>
                      <div className="py-1">
                        <Link
                          href="/profile"
                          className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Profile Settings
                        </Link>
                        <a
                          href="javascript:void(0)"
                          className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Support
                        </a>
                        <span
                          role="menuitem"
                          className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                          aria-disabled="true"
                        >
                          New feature (soon)
                        </span>
                      </div>
                      <div className="py-1">
                        <button
                          className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link href={"/login"}>
                <div className="relative inline-flex  group">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <a
                    href="#"
                    title="Get quote now"
                    className="relative inline-flex items-center justify-center px-4 py-2 text-lg  text-white transition-all duration-200 bg-gray-700 font-pj rounded-xl "
                    role="button"
                  >
                    Login
                  </a>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
