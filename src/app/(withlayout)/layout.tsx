import Contents from "@/components/layouts/dashboard/Contents";
import DashboardSidebar from "@/components/layouts/dashboard/DashboardSidebar";
import { Layout } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Layout hasSider>
        <DashboardSidebar />
        <Contents>{children}</Contents>
      </Layout>
    </>
  );
};

export default DashboardLayout;
