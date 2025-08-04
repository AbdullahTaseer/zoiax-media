"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import router from "next/router";
import { AnimatedtabData } from "@/lib/MockData";

import TabBtnImg1 from "@/assets/pngs/tab-btn-img-1.png";
import TabBtnImg2 from "@/assets/pngs/tab-btn-img-2.png";
import TabBtnImg3 from "@/assets/pngs/tab-btn-img-3.png";
import TabBtnImg4 from "@/assets/pngs/tab-btn-img-4.png";

type ScrollingTabsProps = {
  handleOpen?: () => void;
}

const ScrollingTabs = ({ handleOpen }: ScrollingTabsProps) => {
  const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];
  const tabBtnImages = [TabBtnImg1, TabBtnImg2, TabBtnImg3, TabBtnImg4];
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabContentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const scrollPosition = window.scrollY - container.offsetTop;
      const tabHeight = container.clientHeight / tabs.length;
      const newActiveTab = Math.floor(scrollPosition / tabHeight);

      if (newActiveTab !== activeTab && newActiveTab >= 0 && newActiveTab < tabs.length) {
        setActiveTab(newActiveTab);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, tabs.length]);

  const navigateToPage = (index: number) => {
    switch (index) {
      case 1:
        router.push("/chauffeurs-landing");
        break;
      case 2:
        router.push("/riders");
        break;
      case 3:
        router.push("/ambassadors");
        break;
      default:
        router.push("/");
    }
  };

  return (
    <div ref={containerRef} className="h-[5000px] relative w-screen">
      <div className="sticky top-0 z-[1030] w-full h-screen">
        <div className="absolute z-[1020] flex flex-col gap-4 justify-center items-end h-screen right-0 pr-[50px] max-[768px]:flex-row max-[768px]:justify-center max-[768px]:items-end max-[768px]:h-[20vh] max-[768px]:w-full max-[768px]:bottom-0 max-[768px]:pb-10">
            {AnimatedtabData.map((tab, index) => (
              <div
                key={index}
                onClick={() => {
                  if (activeTab !== index && containerRef.current) {
                    const container = containerRef.current;
                    const tabHeight = container.clientHeight / tabs.length;
                    window.scrollTo({ top: container.offsetTop + index * tabHeight, behavior: "smooth" });
                    setActiveTab(index);
                  }
                }}
                className={`w-[80px] relative h-[50px] rounded-lg cursor-pointer transition-transform duration-300 ease-in-out overflow-hidden
                ${activeTab === index ? "border-2 border-[#FE7151] scale-110" : "border border-white"}`}
              >
                <Image 
                  src={tabBtnImages[index]}
                  alt={`Tab ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
        </div>

        <div className="absolute top-0 z-[1010] h-screen w-full flex justify-center items-center overflow-hidden bg-black">
          {AnimatedtabData.map((tab, index) => (
            <div
              key={index}
              ref={(el) => {
                tabContentRefs.current[index] = el;
              }}
              className={`absolute top-0 left-0 h-screen w-full flex justify-center items-center transition-opacity duration-500
              ${activeTab === index ? "opacity-100" : "opacity-0"}`}
            >
              <div className="relative h-screen w-full flex justify-center items-center text-center">
                <div className="absolute inset-0 bg-black/60" />
                <Image
                  src={tab.img}
                  alt="background"
                  fill
                  className="object-cover -z-10"
                />
                <div className="z-[1040] px-4">
                  <h1
                    className="text-white font-bold mb-4 text-2xl cursor-pointer"
                    onClick={() => navigateToPage(index)}
                  >
                    {tab.heading}
                  </h1>
                  <p className="paragraph text-white max-w-xl mx-auto text-base whitespace-pre-wrap">
                    {tab.description}
                  </p>
                  {tab.heading === "Karhive for ambassadors" && (
                    <button
                      onClick={handleOpen}
                      className="mt-10 bg-[#FE7151] hover:bg-[#E65A3C] text-white px-4 py-2 rounded"
                    >
                      Join as a Ambassador Chauffeur
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTabs;