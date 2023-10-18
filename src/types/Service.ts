export type IServiceTypes = {
  serviceId: string;
  serviceName: string;
  description: string;
  serviceImage: string;
  servicePrice: number;
  location: string;
  serviceStatus: string;
  category?: ICategoryTypes;
};

export type ICategoryTypes = {
  categoryName: string;
  description: string;
  services?: IServiceTypes[];
};
