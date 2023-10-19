/* eslint-disable no-extra-boolean-cast */
"use client";

import { addToCart } from "@/redux/features/slice/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IServiceTypes } from "@/types/Service";
import { Button, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ServiceCardProps = {
  service: IServiceTypes;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (addedService: IServiceTypes) => {
    dispatch(addToCart(addedService));
    message.success("Successfully added to cart");
  };

  return (
    <div className=" p-5 bg-white rounded-2xl hover:border-primary hover:border delay-75 border border-transparent duration-300 transition-all ease-in shadow-lg">
      <div className="border rounded-xl ">
        <Image
          alt={service?.serviceName}
          src={service?.serviceImage}
          height={80}
          width={80}
          className="w-full h-[300px] object-contain  "
        />
      </div>

      <div className="px-4  py-2">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-800 uppercase ">
            {service?.serviceName}
          </h1>{" "}
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          description : {service?.description}
        </p>
        <p className="mt-2 text-xs  text-gray-600 dark:text-gray-400">
          location : {service?.location}
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 border-t">
        <h1 className="text-lg font-bold text-black">
          ${service?.servicePrice}
        </h1>
        <div className="flex gap-3">
          <Link href={`/services/${service?.serviceId}`}>
            <Button
              className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              type="primary"
            >
              View
            </Button>
          </Link>
          <Button
            onClick={() => handleAddToCart(service)}
            type="primary"
            className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
