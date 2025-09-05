'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AnimatedButton from "../buttons/AnimatedButton";

const NavbarDrawer = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const navItems = [
    { title: "Influencers", index: 0, route: "/influencers" },
    { title: "Marketing", index: 1, route: "/marketing" },
    { title: "Ambassadors", index: 2, route: "/ambassadors" },
    { title: "Menu Optimization", index: 3, route: "/menu-optimization" },
    { title: "Contact", index: 4, route: "/contact" },
  ];

  return (
    <>
      <div className="sticky top-0 z-[9998] hidden max-[1024px]:block">
        <div className="flex justify-between items-center px-[5%] max-[768px]:px-4 pt-3 bg-white w-full">
          <div className="flex items-center gap-3">
            <svg
              onClick={toggleDrawer}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="#012641"
                d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
              />
            </svg>
            <h1 className="text-[#012641] text-[24px] font-[800] whitespace-nowrap">
              Zoiax Media
            </h1>
          </div>
          <AnimatedButton
            onClick={() => router.push("/register")}
            title="Sign Up"
            width="110px"
            height="42px"
          />
        </div>

        <div className="grid grid-cols-2 w-full bg-white h-[10px] relative">
          <div className="absolute left-0 inset-0 w-full bg-white h-[10px]" />
          <div className="nav-first-shadow" />
          <div className="nav-third-shadow" />
        </div>
      </div>

      <div
        className={`fixed top-0 z-[9999] h-screen overflow-y-auto border-r bg-white w-[240px] dark:bg-white transition-all duration-500 ${isDrawerOpen ? "left-0" : "-left-[250px]"
          }`}
      >
        <div className="flex justify-between items-center px-4 py-3">
        <h1 className="text-[#012641] text-[24px] font-[800] whitespace-nowrap">
          Zoiax Media
        </h1>
          <svg
            onClick={toggleDrawer}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
          >
            <path
              fill="#012641"
              d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
            />
          </svg>
        </div>

        <div className="text-black font-bold text-[15px] max-[768px]:text-[14px] max-[425px]:text-[13px] px-4 space-y-2">
          {navItems.map((item) => (
            <p
              key={item.index}
              onClick={() => {
                setActiveIndex(item.index);
                router.push(item.route);
                toggleDrawer();
              }}
              className={`px-3 py-[9px] rounded-[7px] cursor-pointer transition-colors duration-300 ${activeIndex === item.index
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-black hover:text-white"
                }`}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed z-[110] inset-0 bg-black opacity-50"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default NavbarDrawer;
