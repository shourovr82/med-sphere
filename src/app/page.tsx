import HeroSection from "@/components/HomePage/HeroSection";
import HighlightSection from "@/components/HomePage/HighlightSection";
import HomepageAboutSection from "@/components/HomePage/HomepageAboutSection";

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
    </section>
  );
}
