"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LoginLayout;
