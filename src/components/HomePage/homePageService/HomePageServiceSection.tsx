"use client";

import ServiceCard from "@/components/Services/ServiceCard";
import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import { Alert, Spin } from "antd";
import { useState } from "react";
const HomePageServiceSection = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  // get data
  const {
    data: serviceData,
    isLoading,
    isError,
    error,
  } = useGetAllServicesQuery({ ...query });

  return (
    <div className=" pb-[100px] max-md:px-2">
      <p className="text-primary my-10 text-center md:text-[20px] text-[16px] font-semibold">
        OUR AVAILABLE SERVICES
      </p>

      {/* service card */}

      <Spin spinning={isLoading && !isError} tip="Loading Services...">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-between">
          {serviceData?.map((service: any, index: number) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </Spin>
    </div>
  );
};

export default HomePageServiceSection;
