export type INavbarType = {
  name: string;
  link: string;
  isSubMenu?: boolean;
  subMenu?: Array<ISubMenuType>;
};

export type ISubMenuType = {
  name: string;
  link: string;
};
