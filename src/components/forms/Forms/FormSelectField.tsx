"use client";

import { USER_ROLE } from "@/constants/user";
import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  handleChange?: (el: string) => void;
  setIsRoleIsDoctor?: (el: boolean) => void;
};

const FormSelectField = ({
  name,
  size = "large",
  value,
  placeholder = "select",
  options,
  label,
  defaultValue,
  handleChange,
  setIsRoleIsDoctor,
}: SelectFieldProps) => {
  const { control, watch } = useFormContext();
  const srv = watch();

  if (srv?.role === USER_ROLE.DOCTOR && setIsRoleIsDoctor) {
    setIsRoleIsDoctor(true);
  } else if (srv?.role !== USER_ROLE.DOCTOR && setIsRoleIsDoctor) {
    setIsRoleIsDoctor(false);
  }

  return (
    <>
      <p className="mb-2">{label ? label : null}</p>

      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={handleChange ? handleChange : onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
