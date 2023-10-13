"use client";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntResistry";
import store from "@/Redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};

export default Providers;
