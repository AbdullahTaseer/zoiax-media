import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import OrangeShade from "@/assets/svgs/who-it-work-orange-shade.svg";
import { WhoItWorkData } from '@/lib/MockData';

type CardProps = {
  title: string;
  desc: string;
  icon: string | StaticImport
  orangeClass: string;
};

const Card = ({ title, desc, icon, orangeClass }: CardProps) => {
  return (
    <div className="relative border border-[#CED5DB] rounded-[12px] p-5 overflow-hidden bg-white">
      <Image
        src={OrangeShade}
        alt=""
        fill
        className={`absolute ${orangeClass} z-0`}
      />
      <div className="bg-[#012641] z-10 relative h-[55px] w-[55px] rounded-full flex justify-center items-center mb-4">
        <Image src={icon} alt="" />
      </div>
      <p className="font-bold text-[#012641] relative z-10">{title}</p>
      <p className="text-sm text-[#4A4A4A] relative z-10">{desc}</p>
    </div>
  );
};

const WhoItWorkSection = () => {
  return (
    <div className="py-16 px-[5%] max-md:px-4 bg-white">
      <h1 className="text-4xl max-md:text-2xl font-bold text-center text-[#012641] mb-4">
        Who it work
      </h1>
      <p className="text-center max-w-xl mx-auto text-sm text-black mb-10">
        At Zoiax, we provide you with a gateway to a diverse range of services, including e-commerce, travel, property, food delivery, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WhoItWorkData.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
            orangeClass={item.orangeClass}
          />
        ))}
      </div>
    </div>
  );
};

export default WhoItWorkSection;
