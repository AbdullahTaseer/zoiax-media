import React from 'react';
import Image from "next/image";
import TitleCard from "@/components/cards/TitleCard";
import ShadeImg from "@/assets/svgs/markrting-shade.svg";
import MarketingImg from "@/assets/pngs/marketing-img.png";

const MarketingChangedSection = () => {
  return (
    <div>
       <div className="bg-[#1E58FB] px-[5%] max-md:px-4 py-10 grid sm:grid-cols-2 gap-6 overflow-hidden relative">
        <Image src={MarketingImg} alt="Marketing Image" className="mx-auto h-[560px] mb-6" />
        <div className="text-white my-auto relative z-10">
          <TitleCard title="Marketing Has Changed. Has Your Brand?" className="text-white text-left" />
          <p className="font-[300] text-[32px] max-[1024px]:text-[24px] mt-6">Traditional advertising is fading.</p>
          <p className="font-[300] text-[32px] max-[1024px]:text-[24px]">Your customers are watching TikToks, scrolling Instagram, and trusting creators they already follow.</p>
          <p className="font-[300] text-[32px] max-[1024px]:text-[24px]">At Zoiax Media, we bring your brand to where the attention lives — real people's platforms.</p>
        </div>
        <Image src={ShadeImg} alt="" className="absolute right-0 bottom-0" />
      </div>
    </div>
  );
};

export default MarketingChangedSection;
