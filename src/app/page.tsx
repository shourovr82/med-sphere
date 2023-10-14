import AppointmentSection from "@/components/HomePage/Appointment/AppointmentSection";
import BlogPage from "@/components/HomePage/BlogPage/BlogPage";
import HealthCare from "@/components/HomePage/HealthCare";
import HeroSection from "@/components/HomePage/HeroSection";
import HighlightSection from "@/components/HomePage/HighlightSection";
import HomepageAboutSection from "@/components/HomePage/HomepageAboutSection";
import Faqs from "@/components/HomePage/faqs/Faqs";
import HomePageServiceSection from "@/components/HomePage/homePageService/HomePageServiceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Med-Sphere - Home",
  description: "Created By Shafinur Islam(@shourovr82)",
};

export default function Home() {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <HeroSection />
      </div>
      <div className="">
        <HighlightSection />
      </div>
      <div className="max-w-7xl mx-auto">
        <HomepageAboutSection />
      </div>
      <div className="max-w-7xl mx-auto">
        <HomePageServiceSection />
      </div>
      <div className="max-w-7xl mx-auto">
        <AppointmentSection />
      </div>
      <div className="max-w-7xl pt-10  mx-auto">
        <HealthCare />
      </div>
      <div className="max-w-7xl mx-auto">
        <Faqs />
      </div>
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </section>
  );
}
