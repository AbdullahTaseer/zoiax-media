'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import FacebookIcon from "@/assets/svgs/facebook-svg.svg";
import YoutubeIcon from "@/assets/svgs/youtube-svg.svg";
import TwitterIcon from "@/assets/svgs/twitter-svg.svg";
import LinkedInIcon from "@/assets/svgs/linkedin-svg.svg";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-[#F5F5F7] text-left">
      <div className="grid grid-cols-4 py-12 border-b max-[920px]:grid-cols-2 max-[435px]:grid-cols-1 gap-x-10 max-[900px]:gap-x-4 gap-y-8 px-[5%] max-[768px]:px-4">
        
        <div className="col-span-2 max-[435px]:col-span-1">
          <h1 className="text-[#012641] text-[24px] font-[800]">Zoiax Media</h1>
          <p className="text-[14px] mt-6 text-[#000] max-[768px]:text-[13px] max-w-[90%]">
            Join Zoiax Media and unlock endless possibilities to earn, save, and grow.
          </p>
          <div className="flex items-center gap-5 mt-4">
            <Image src={FacebookIcon} alt="Facebook" className="cursor-pointer" height={17} />
            <Image src={LinkedInIcon} alt="LinkedIn" className="cursor-pointer" height={17} />
            <Image src={TwitterIcon} alt="Twitter" className="cursor-pointer" height={17} />
            <Image src={YoutubeIcon} alt="YouTube" className="cursor-pointer" height={17} />
          </div>
        </div>

        <div className="space-y-2 text-[#000] text-[15px]">
          <p className="text-[18px] font-[600] text-[#012641] mb-3">Main Page</p>
          <p onClick={() => router.push("/about")} className="cursor-pointer">What is Zoiax</p>
          <p onClick={() => router.push("/how-it-works")} className="cursor-pointer">How it works</p>
          <p onClick={() => router.push("/ambassadors")} className="cursor-pointer">Ambassadors</p>
          <p onClick={() => router.push("/services")} className="cursor-pointer">Services categories</p>
          <p onClick={() => router.push("/contact")} className="cursor-pointer">Contact</p>
        </div>

        <div className="space-y-2 text-[#000] text-[15px]">
          <p className="text-[18px] font-[600] text-[#012641] mb-3">Support</p>
          <p onClick={() => router.push("/about")} className="cursor-pointer">About</p>
          <p onClick={() => router.push("/help")} className="cursor-pointer">Help</p>
          <p onClick={() => router.push("/faqs")} className="cursor-pointer">FAQs</p>
        </div>
      </div>

      <div className="text-[14px] text-[#000] px-[5%] py-5 flex justify-between items-center flex-wrap gap-2 max-[768px]:text-[13px] max-[530px]:text-[12px]">
        <p>Zoiax © All Rights Reserved - 2025</p>
        <p className="cursor-pointer" onClick={() => router.push("/terms")}>Terms & Condition | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
