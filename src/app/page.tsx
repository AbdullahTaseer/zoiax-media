import BecomeAmbassador from "@/components/sections/BecomeAmbassador";
import BussinessGrowthSection from "@/components/sections/BussinessGrowthSection";
import EmpoweringRestaurents from "@/components/sections/EmpoweringRestaurents";
import FaqsSection from "@/components/sections/FaqsSection";
import ReviewsSection from "@/components/sections/ReviewSection";
import ScrollingTabs from "@/components/sections/ScrollingTabs";
import VideoSection from "@/components/sections/VideoSection";
import WhoItWorkSection from "@/components/sections/WhoItWorkSection";
import Image from "next/image";
import MarketingImg from "@/assets/pngs/marketing-img.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <EmpoweringRestaurents />
      <BussinessGrowthSection />
      <div className="bg-[#1E58FB] px-[5%] max-md:px-4 py-10 grid sm:grid-cols-2 gap-6">
        <Image src={MarketingImg} alt="Marketing Image" className="mx-auto h-[560px] mb-6" />
        <div className="text-white my-auto">
          <p className="text-[50px] leading-[60px] max-[1100px]:text-4xl max-[110px]:leading-[35px] font-medium text-white">Marketing Has Changed. Has Your Brand?</p>
          <p className="font-[300] text-[32px] max-[1024px]:text-[24px]">Traditional advertising is fading.</p>
          <p className="font-[300] text-[32px] max-[1024px]:text-[24px]">Your customers are watching TikToks, scrolling Instagram, and trusting creators they already follow.</p>
          <p className="font-[300] text-[32px] max-[1024px]:text-[24px]">At Zoiax Media, we bring your brand to where the attention lives — real people's platforms.</p>
        </div>
      </div>
      {/* <ScrollingTabs/> */}
      <WhoItWorkSection />
      {/* <BecomeAmbassador/> */}
      {/* <VideoSection/> */}
      <ReviewsSection />
      <FaqsSection />
    </div>
  );
}
