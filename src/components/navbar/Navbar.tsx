'use client';

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LogoImg from "@/assets/svgs/Xaioz Media.svg";
import GlobalButton from "../buttons/GlobalButton";
import leftShadowImg from "@/assets/svgs/navbar-left.svg";
import rightShadowImg from "@/assets/svgs/navbar-right.svg";

const Navbar = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItems = [
    { title: "For business", index: 0 },
    { title: "For Influencers", index: 1 },
    { title: "Services", index: 2 },
    { title: "Ambassadors", index: 3 },
    { title: "Contact", index: 4 },
  ];

  return (
    <div className="sticky top-0 z-[1000] max-[1024px]:hidden overflow-hidden h-[80px] bg-white">
      <div className="flex justify-between items-center px-[5%] max-[768px]:px-4 pt-4 bg-white w-full">
        <Image src={LogoImg} alt="" />

        <div className="flex gap-7 max-[1100px]:gap-4 items-center whitespace-nowrap text-center text-[#000000] text-[15px]">
          {navItems.map((item) => (
            <div className="relative group" key={item.index}>
              <p
                className={`cursor-pointer py-1 w-full transition-colors duration-300 ${activeIndex === item.index ? "text-[#012641]" : ""
                  }`}
                onClick={() => setActiveIndex(item.index)}
              >
                {item.title}
              </p>
              <span
                className={`absolute left-0 bottom-0 h-[3px] rounded-full transition-all duration-300 ${activeIndex === item.index
                  ? "w-full bg-[#012641]"
                  : "w-0 group-hover:w-full bg-[#012641]"
                  }`}
              />
            </div>
          ))}
        </div>
        <GlobalButton
          onClick={() => router.push("/register")}
          title="Book a Strategy Call"
          bgColor="white"
          color="#012641"
          borderColor="#012641"
          borderWidth="1px"
          hover={{ bgColor: "black", color: "white" }}
          className="w-[180px] h-[42px]"
        />
      </div>

      <div className="grid grid-cols-2">
        <Image src={leftShadowImg} alt="img" />
        <Image src={rightShadowImg} alt="img" />
      </div>
    </div>
  );
};

export default Navbar;
