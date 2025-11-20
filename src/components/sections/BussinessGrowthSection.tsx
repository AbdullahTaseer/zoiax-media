"use client";
import React from "react";
import { Megaphone, Palette, Users, Globe, Calendar, Star, TrendingUp } from "lucide-react";
import GlobalButton from "../buttons/GlobalButton";
import TitleCard from "../cards/TitleCard";

const services = [
  { icon: <Megaphone size={26} color="white" />, title: "Influencer Marketing" },
  { icon: <Palette size={26} color="white" />, title: "Content Creation" },
  { icon: <Users size={26} color="white" />, title: "Social Media Management" },
  { icon: <Globe size={26} color="white" />, title: "Website Improvements" },
  { icon: <Calendar size={26} color="white" />, title: "Booking & Online Tools" },
  { icon: <Star size={26} color="white" />, title: "Google/Yelp Optimization" },
  { icon: <TrendingUp size={26} color="white" />, title: "Branding, Strategy & Marketing Support" },
];

const BusinessGrowthSection = () => {
  return (
    <div className="w-full py-16 px-[5%] max-md:px-4">

      <TitleCard title="Your Business Growth Engine Starts Here"/>

      <p className="text-center text-[#012641]/75 mt-3 text-lg max-w-3xl mx-auto">
        Whether you're a new brand or an established business, Zoiax Media is your all-in-one partner for
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.slice(0, 4).map((item, i) => (
          <div
            key={i}
            className="border border-[#E5E5E5] rounded-2xl py-6 px-4 flex items-center gap-4"
          >
            <div className="h-[55px] shrink-0 w-[55px] rounded-full flex justify-center items-center bg-gradient-to-b from-[#9833DF] to-[#D7287B]">
              {item.icon}
            </div>

            <p className="text-[#012641]">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.slice(4, 7).map((item, i) => (
          <div
            key={i}
            className="border border-[#E5E5E5] rounded-2xl py-6 px-4 flex items-center gap-4"
          >
            <div className="h-[55px] shrink-0 w-[55px] rounded-full flex justify-center items-center bg-gradient-to-b from-[#9833DF] to-[#D7287B]">
              {item.icon}
            </div>

            <p className="text-[#012641] font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      <p className="text-center font-[300] my-6">We don't just bring traffic — we help you turn attention into <span className="font-[400]">real bookings and long-term growth.</span></p>

      <div className="flex items-center max-[500px]:flex-col justify-center gap-4 sm:gap-6">
        <GlobalButton
          title="Schedule a Free Discovery Call"
          className="w-[240px] h-[46px]"
        />

        <GlobalButton
          title="Request a Full Service Quote"
          bgColor="white"
          color="#012641"
          borderColor="#CFCFCF"
          borderWidth="1px"
          className="w-[260px] max-[500px]:w-[240px] h-[46px]"
        />
      </div>
    </div>
  );
};

export default BusinessGrowthSection;
