import BecomeAmbassador from "@/components/sections/BecomeAmbassador";
import EmpoweringRestaurents from "@/components/sections/EmpoweringRestaurents";
import FaqsSection from "@/components/sections/FaqsSection";
import ReviewsSection from "@/components/sections/ReviewSection";
import ScrollingTabs from "@/components/sections/ScrollingTabs";
import VideoSection from "@/components/sections/VideoSection";
import WhoItWorkSection from "@/components/sections/WhoItWorkSection";

export default function Home() {
  return (
   <div className="min-h-screen">
    <EmpoweringRestaurents/>
    <ScrollingTabs/>
    <WhoItWorkSection/>
    <BecomeAmbassador/>
    <VideoSection/>
    <ReviewsSection/>
    <FaqsSection/>
   </div>
  );
}
