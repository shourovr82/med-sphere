export type IBlogType = {
  blogId: string;
  blogTitle: string;
  blogDescription: string;
  blogImage: string;
  createdAt?: string;
  updatedAt?: string;
  profileId?: string;
  profile?: {
    firstName: string;
    lastName: string;
    profileImage: string;
  };
};
