import { IServiceTypes } from "@/types/Service";
import Image from "next/image";
import React from "react";

type ServiceCardProps = {
  service: IServiceTypes;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-blue-50/75 border rounded-xl p-[30px] flex flex-col gap-3 font-inter hover:border-primary ease-in duration-100 delay-75 shadow ">
      <Image
        alt={service.serviceName}
        src={service.serviceImage}
        height={80}
        width={80}
        className="bg-white rounded-full"
      />

      <div className="flex justify-between gap-1 items-center">
        <p className="text-[22px] font-semibold text-gray-700">
          {service.serviceName}
        </p>

        <p className="bg-[#6d74dd] rounded-full p-1 text-[12px] text-white">
          {service.serviceStatus}
        </p>
      </div>

      <p className="text-gray-500 font-roboto">
        {service.description.length > 50
          ? service.description.slice(0, 50) + "..."
          : service.description}
      </p>

      <div className="flex items-center justify-between">
        <p className="text-[18px] font-inter font-semibold">
          ${service.servicePrice}
        </p>
        <p className="bg-[#7f85e2] text-white p-1 rounded-full text-[12px]">
          {service.category?.categoryName}
        </p>
      </div>

      <p className="text-[12px]">{service.location}</p>

      {/* add to card */}

      <div className="flex items-center gap-3">
        <button className="bg-primary text-white px-3 py-1 rounded-full text-[12px]">
          Add to cart
        </button>
        <button className="bg-white text-primary px-3 py-1 rounded-full text-[12px] border border-primary">
          View details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
