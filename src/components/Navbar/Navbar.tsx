"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo/logo.png";
import Link from "next/link";
import { INavbarType } from "@/types/NavbarType";
import NavbarMenu from "./NavbarMenu";
import { MenuOutlined } from "@ant-design/icons";

import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "@/services/auth.service";
import { authKey } from "@/constants/common";
import { useRouter } from "next/navigation";
import AddToCard from "../cart/AddToCart";
import { USER_ROLE } from "@/constants/user";
import { Button } from "antd";

const Navbar = () => {
  const NavbarData: INavbarType[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Services",
      link: "/services",
    },
  ];
  const [userLogged, setUserLogged] = useState(false);

  const userLoggedIn = isLoggedIn();
  const user = getUserInfo() as any;

  const router = useRouter();

  const [isCardOpen, setIsCardOpen] = useState(false);

  useEffect(() => {
    if (userLoggedIn) {
      setUserLogged(true);
    } else {
      setUserLogged(false);
    }
  }, [userLoggedIn]);

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  return (
    <>
      <section className="border-b-2 sticky top-0 bg-bgColor shadow z-20 borderColor  max-md:px-3">
        <div className="py-2 max-w-7xl mx-auto  flex gap-3 items-center justify-between w-full ">
          {/* logo */}
          <Link href={"/"} className="md:w-full ">
            <Image src={Logo} alt="" className="w-20 " />
          </Link>
          {/* NavData */}
          <div className="md:flex hidden gap-10 w-full justify-center  ">
            {NavbarData?.map((nav: INavbarType, i: number) => (
              <NavbarMenu key={i} navbarData={nav} />
            ))}
          </div>

          {/* appointment */}

          <div className="flex gap-5 items-center w-full justify-end  ">
            {/* user */}{" "}
            <div>
              {userLogged ? (
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
                        <MenuOutlined className="text-2xl font-semibold" />
                      </button>
                    </span>
                    <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                      <div
                        className="absolute right-0 w-56 mt-2 origin-top-right bg-white  border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                        aria-labelledby="headlessui-menu-button-1"
                        id="headlessui-menu-items-117"
                        role="menu"
                      >
                        <div className="px-4 py-3">
                          <p className="text-sm leading-5">Signed in as</p>
                          <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                            {user?.email}
                          </p>
                        </div>
                        <div className="py-1">
                          <Link
                            href="/dashboard/profile"
                            className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                            role="menuitem"
                          >
                            My Profile
                          </Link>
                          {user?.role === USER_ROLE.USER && (
                            <button
                              onClick={() => setIsCardOpen(true)}
                              className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-300 hover:text-black rounded "
                              role="menuitem"
                            >
                              My Cart
                            </button>
                          )}
                          <Link
                            href="/dashboard"
                            className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                            role="menuitem"
                          >
                            Dashboard
                          </Link>
                        </div>
                        <div className="py-1">
                          <button
                            onClick={logOut}
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
                  <Button
                    type="primary"
                    title="Get quote now"
                    className="bg-gray-700 rounded-xl "
                    role="button"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>{" "}
        {userLogged && <AddToCard setOpen={setIsCardOpen} open={isCardOpen} />}
      </section>
    </>
  );
};

export default Navbar;
