'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AnimatedButton from "../buttons/AnimatedButton";

const Navbar = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItems = [
    { title: "Influencers", index: 0 },
    { title: "Marketing", index: 1 },
    { title: "Ambassadors", index: 2 },
    { title: "Menu Optimization", index: 3 },
    { title: "Contact", index: 4 },
  ];

  return (
    <div className="sticky top-0 z-[9999] max-[1024px]:hidden">
      <div className="flex justify-between items-center px-[5%] max-[768px]:px-4 pt-3 bg-white w-full">
        <h1 className="text-[#012641] text-[24px] font-[800] whitespace-nowrap">
          Zoiax Media
        </h1>

        <div className="flex gap-7 items-center whitespace-nowrap text-center text-[#696969] text-[15px] font-medium">
          {navItems.map((item) => (
            <div className="relative group" key={item.index}>
              <p
                className={`cursor-pointer py-1 w-full transition-colors duration-300 ${
                  activeIndex === item.index ? "text-[#012641] font-semibold" : ""
                }`}
                onClick={() => setActiveIndex(item.index)}
              >
                {item.title}
              </p>
              <span
                className={`absolute left-0 bottom-0 h-[3px] rounded-full transition-all duration-300 ${
                  activeIndex === item.index
                    ? "w-full bg-[#012641]"
                    : "w-0 group-hover:w-full bg-[#012641]"
                }`}
              />
            </div>
          ))}
        </div>

        <AnimatedButton
          onClick={() => router.push("/register")}
          title="Log in"
          width="120px"
          height="42px"
        />
      </div>

        {/* <div className="flex w-full bg-white h-[10px] relative">
          <div className="absolute left-0 inset-0 w-full bg-white h-[10px]" />
          <div className="nav-first-shadow w-[27%] max-[1300px]:w-[22%]" />
          <div className="nav-second-shadow w-[46%] max-[1300px]:w-[56%]" />
          <div className="nav-third-shadow w-[27%] max-[1300px]:w-[22%]" />
        </div> */}

      {/* Optional shadow bar */}
      <div className="grid grid-cols-2 w-full bg-white h-[10px] relative">
        <div className="absolute left-0 inset-0 w-full bg-white h-[10px]" />
        <div className="nav-first-shadow" />
        <div className="nav-third-shadow" />
      </div>
    </div>
  );
};

export default Navbar;
