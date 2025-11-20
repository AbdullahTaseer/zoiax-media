"use client";

import Image from "next/image";
import TitleCard from "../cards/TitleCard";
import GlobalButton from "../buttons/GlobalButton";
import PurpleShade from "@/assets/svgs/purple-gradient.svg";
import YellowShade from "@/assets/svgs/yellow-gradient.svg";
import influenceImg_1 from "@/assets/pngs/big-influence-1.png";
import influenceImg_2 from "@/assets/pngs/big-influence-2.png";
import influenceImg_3 from "@/assets/pngs/big-influence-3.png";
import influenceImg_4 from "@/assets/pngs/big-influence-4.png";

const cards = [
  {
    img: influenceImg_1,
    title: "Micro to celebrity influencers",
  },
  {
    img: influenceImg_2,
    title: "Pre-negotiated affordable rates",
  },
  {
    img: influenceImg_3,
    title: "High-impact campaigns starting under $300",
  },
  {
    img: influenceImg_4,
    title: "Full campaign coordination and delivery",
  },
];

const BigInfluenceSection = () => {
  return (
    <section className="px-[5%] max-md:px-4 py-20 text-center relative overflow-hidden">

      <Image src={PurpleShade} alt="img" className="absolute right-0 bottom-0" />
      <Image src={YellowShade} alt="img" className="absolute top-0 left-0" />

      <TitleCard title="Big Influence. Smart Budgets." className="mb-4" />

      <p className="text-lg mb-12">
        Work directly with creators — no agencies, no markups.
      </p>

      {/* Image Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {cards.map((item, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-md group"
          >
            {/* Image */}
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-[320px] object-cover group-hover:scale-105 transition-all duration-300"
            />

            {/* Black Overlay (.20 opacity) */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-left z-10">
              <p className="text-white text-[20px] drop-shadow-lg">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <GlobalButton
          title="Start My Campaign"
          bgColor="black"
          color="white"
          className="md:w-[200px] w-[290px] h-[48px]"
        />

        <GlobalButton
          title="Request a Free Marketing Review"
          bgColor="white"
          color="#012641"
          borderColor="#CFCFCF"
          borderWidth="1px"
          className="w-[290px] h-[48px]"
        />
      </div>
    </section>
  );
};

export default BigInfluenceSection;
