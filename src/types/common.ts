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

export type IReview = {
  reviewId: string;
  reviewComment: string;
  reviewRating: string;
  createdAt?: string;
  service?: {
    serviceName: string;
    serviceId: string;
  };
  profile?: {
    firstName: string;
    lastName: string;
    profileId: string;
    profileImage: string;
  };
};
