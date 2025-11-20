import BecomeAmbassador from "@/components/sections/BecomeAmbassador";
import BussinessGrowthSection from "@/components/sections/BussinessGrowthSection";
import EmpoweringRestaurents from "@/components/sections/EmpoweringRestaurents";
import FaqsSection from "@/components/sections/FaqsSection";
import ReviewsSection from "@/components/sections/ReviewSection";
import ScrollingTabs from "@/components/sections/ScrollingTabs";
import VideoSection from "@/components/sections/VideoSection";
import WhoItWorkSection from "@/components/sections/WhoItWorkSection";
import WhatWeDo from "@/components/sections/WhatWeDo";
import BigInfluenceSection from "@/components/sections/BigInfluenceSection";
import MarketingChangedSection from "@/components/sections/MarketingChangedSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <EmpoweringRestaurents />
      <BussinessGrowthSection />
      <MarketingChangedSection />
      <WhatWeDo />
      <BigInfluenceSection />
      {/* <ScrollingTabs/> */}
      <WhoItWorkSection />
      {/* <BecomeAmbassador/> */}
      {/* <VideoSection/> */}
      <ReviewsSection />
      <FaqsSection />
    </div>
  );
}
