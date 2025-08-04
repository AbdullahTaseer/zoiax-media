import EmpoweringRestaurents from "@/components/sections/EmpoweringRestaurents";
import ReviewsSection from "@/components/sections/ReviewSection";
import ScrollingTabs from "@/components/sections/ScrollingTabs";
import WhoItWorkSection from "@/components/sections/WhoItWorkSection";

export default function Home() {
  return (
   <div className="min-h-screen">
    <EmpoweringRestaurents/>
    <ScrollingTabs/>
    <WhoItWorkSection/>
    <ReviewsSection/>
   </div>
  );
}
