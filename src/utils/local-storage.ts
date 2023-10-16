export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const setCollapsToLocalStorage = (key: string, token: boolean) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  // @ts-ignore
  return localStorage.setItem(key, token);
};
