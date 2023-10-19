"use client";

import { USER_ROLE } from "@/constants/user";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardHome = () => {
  const user = getUserInfo() as any;
  const router = useRouter();

  useEffect(() => {
    if (user?.role === USER_ROLE.USER) {
      return router.push("/dashboard/profile");
    }
  }, [router, user]);

  return (
    <div>
      <h1 className="font-semibold ">Shafin </h1>
    </div>
  );
};

export default DashboardHome;
