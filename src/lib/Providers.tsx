"use client";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntResistry";
import store from "@/Redux/store";
import { ConfigProvider } from "antd";

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
            fontFamily: "default",
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
