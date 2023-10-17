"use client";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntResistry";

import { ConfigProvider } from "antd";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#47177e",
            borderRadius: 8,
            colorText: "#000",
            fontFamily: "Default",
            colorBgSpotlight: "#47177e",
            // Alias Token
            colorBgContainer: "#fff",
          },
        }}
      >
        <Provider store={store}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </ConfigProvider>
    </>
  );
};

export default Providers;
