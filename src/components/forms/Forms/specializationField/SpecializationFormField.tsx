import FormSelectField, { SelectOptions } from "../FormSelectField";

type ACDepartmentFieldProps = {
  name: string;
  label?: string;
};

const SpecializationFormField = ({ name, label }: ACDepartmentFieldProps) => {
  // const { data, isLoading } = useAcademicDepartmentsQuery({
  //   limit: 100,
  //   page: 1,
  // });
  const data = [
    {
      label: "shafin",
      value: "shafin",
    },
  ];
  // const academicDepartments = data?.academicDepartments;
  // const acDepartmentOptions = academicDepartments?.map((acDepartment: any) => {
  //   console.log(acDepartment?.id);
  //   return {
  //     label: acDepartment?.title,
  //     value: acDepartment?.id,
  //   };
  // });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={data as SelectOptions[]}
    />
  );
};

export default SpecializationFormField;
