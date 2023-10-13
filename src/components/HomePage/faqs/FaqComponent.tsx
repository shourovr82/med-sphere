"use client";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { FaqType } from "@/types/FaQType";

type Props = {
  itemData: FaqType[];
  setData?: React.Dispatch<React.SetStateAction<any>>;
  size: "small" | "middle" | "large";
};

const FaqComponent = ({ itemData, setData, size }: Props) => {
  const onChange = (key: string | string[]) => {
    setData && setData(key);
  };

  const items: CollapseProps["items"] = itemData;
  return (
    <div className="!w-full relative">
      <Collapse
        className="!w-full"
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
        size={size}
      />
    </div>
  );
};

export default FaqComponent;
