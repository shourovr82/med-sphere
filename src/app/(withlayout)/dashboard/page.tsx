// "use client";

// import { USER_ROLE } from "@/constants/user";
// import { getUserInfo } from "@/services/auth.service";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// const DashboardHome = () => {

//   return (
//     <div>
//       <h1 className="font-semibold ">Shafin </h1>
//     </div>
//   );
// };

// export default DashboardHome;
"use client";

import { USER_ROLE } from "@/constants/user";
import { useGetBookingQuery } from "@/redux/features/booking/bookingApi";
import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import { useGetAllUsersQuery } from "@/redux/features/users/userApi";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardCard = () => {
  const query: Record<string, any> = {};

  const { data: serviceData } = useGetAllServicesQuery({ ...query });
  const { data: bookingData } = useGetBookingQuery({ ...query });
  const { data: userDataData } = useGetAllUsersQuery({ ...query });

  const serviceCount = serviceData?.length;

  const bookingCount = bookingData?.length;

  const ratio = (bookingCount / serviceCount) * 100;

  const user = getUserInfo() as any;
  const router = useRouter();

  useEffect(() => {
    if (user?.role === USER_ROLE.USER) {
      return router.push("/dashboard/profile");
    }
  }, [router, user]);

  return (
    <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-3 sm:px-8">
      <div className="flex items-center bg-white border rounded-sm p-5 py-8 overflow-hidden shadow">
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">Total Booking</h3>
          <p className="text-3xl">{bookingCount}</p>
        </div>
      </div>
      <div className="flex items-center bg-white border rounded-sm p-5 py-8 overflow-hidden shadow">
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">Total Service</h3>
          <p className="text-3xl">{serviceCount}</p>
        </div>
      </div>
      <div className="flex items-center bg-white border rounded-sm py-8 overflow-hidden shadow p-5">
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">Ratio</h3>
          <p className="text-3xl">{ratio}%</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
