"use client";

import React from "react";
import TitleCard from "../cards/TitleCard";
import GlobalButton from "../buttons/GlobalButton";
import EmpoweringRestaurents from "./EmpoweringRestaurents";
import { Utensils, Heart, Dumbbell, Home, Shirt, Briefcase, ShoppingBag, Plane, Calendar } from "lucide-react";

const categories = [
  { title: "Food & Restaurants", icon: Utensils },
  { title: "Beauty & Skincare", icon: Heart },
  { title: "Fitness & Wellness", icon: Dumbbell },
  { title: "Real Estate & Interiors", icon: Home },
  { title: "Fashion & Lifestyle", icon: Shirt },
  { title: "Professional Services", icon: Briefcase },
  { title: "Retail & Product Reviews", icon: ShoppingBag },
  { title: "Travel & Experiences", icon: Plane },
  { title: "Events & Community", icon: Calendar },
];

const ExploreOurNetWork = () => {
  return (
    <div>
      <section className="px-[5%] max-md:px-4 py-16 text-center">

        <TitleCard title="Explore Our Influencer Network" />

        <p className="text-center text-black mt-2 mb-12">
          Get instant access to{" "}
          <span className="text-[#2057FA]">3,800+ verified creators</span>{" "}
          across every major industry
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border border-gray-200 rounded-xl p-5"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E5408A] to-[#845CBA]">
                <item.icon className="text-white" size={22} />
              </div>

              <p className="text-[18px] text-[#012641]">{item.title}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-10 mb-6">
          All influencers are verified and available for collaboration through inquiry.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <GlobalButton
            title="Browse Creators"
            bgColor="black"
            color="white"
            className="w-[210px] h-[48px]"
          />

          <GlobalButton
            title="Inquire to Collaborate"
            bgColor="white"
            color="#012641"
            borderColor="#CFCFCF"
            borderWidth="1px"
            className="w-[220px] h-[48px]"
          />
        </div>
      </section>
      <EmpoweringRestaurents />
    </div>
  );
};

export default ExploreOurNetWork;
