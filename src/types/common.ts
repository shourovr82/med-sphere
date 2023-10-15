export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IDepartment {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// export interface IStudent {
//   id: string;
//   name: Name & { id: string };
//   dateOfBirth: string;
//   gender: string;
//   bloodGroup: string;
//   email: string;
//   contactNo: string;
//   emergencyContactNo: string;
//   presentAddress: string;
//   permanentAddress: string;
//   guardian: Guardian & { id: string };
//   localGuardian: LocalGuardian & { id: string };
//   department: string;
//   subject: string;
//   createdAt: string;
//   updatedAt: string;
// }
