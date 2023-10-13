export type IServiceTypes = {
  serviceName: string;
  description: string;
  serviceImage: string | any;
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
