"use client";

import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import GlobalButton from "../buttons/GlobalButton";
import img_1 from "@/assets/pngs/what-we-do-1.png";
import img_2 from "@/assets/pngs/what-we-do-2.png";
import img_3 from "@/assets/pngs/what-we-do-3.png";
import TitleCard from "../cards/TitleCard";

const whatWeDoData = [
  {
    title: "Influencer Marketing Made Easy",
    img: img_1,
    points: [
      "Share your goals",
      "We match you with the perfect creator",
      "We manage the entire campaign",
      "You receive content, exposure, and measurable results without the stress",
    ],
  },
  {
    title: "Content Creation & Brand Visibility",
    img: img_2,
    points: [
      "Custom photo + video production",
      "Reels, testimonials, promos, and storytelling",
      "Google/Yelp presence cleanup & optimization",
    ],
  },
  {
    title: "Social Media Support",
    img: img_3,
    points: [
      "Account setup, redesign, or rebranding",
      "Optional full-service posting & engagement",
      "Monthly performance reports",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <div className="px-[5%] max-md:px-4 py-16 text-center bg-[#F8FAFB]">
      <TitleCard title="What We Do" />

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {whatWeDoData.map((item, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white"
          >
            <Image
              src={item.img}
              width={600}
              height={400}
              alt={item.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

              <ul className="space-y-3">
                {item.points.map((p, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <CircleCheckBig size={20} className="mt-0.5 shrink-0 text-[#012641]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <GlobalButton
          title="Request a Custom Quote"
          bgColor="white"
          color="#012641"
          borderColor="#CFCFCF"
          borderWidth="1px"
          className="w-[270px] h-[46px]"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
