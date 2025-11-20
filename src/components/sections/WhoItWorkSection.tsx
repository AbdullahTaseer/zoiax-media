import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import OrangeShade from "@/assets/svgs/who-it-work-orange-shade.svg";
import { WhoItWorkData } from '@/lib/MockData';
import GlobalButton from '../buttons/GlobalButton';
import TitleCard from '../cards/TitleCard';

type CardProps = {
  title: string;
  desc: string;
  icon: string | StaticImport
};

const Card = ({ title, desc, icon }: CardProps) => {
  return (
    <div className="relative text-center border border-[#CED5DB] rounded-[12px] p-5 overflow-hidden bg-white">
      {/* <Image
        src={OrangeShade}
        alt=""
        fill
        className={`absolute ${orangeClass} z-0`}
      /> */}
      <div className="bg-gradient-to-b from-[#9833DF] to-[#D7287BB2] h-[55px] w-[55px] rounded-full flex justify-center mx-auto items-center mb-4">
        <Image src={icon} alt="" />
      </div>
      <p className="font-bold text-[24px] text-[#012641]">{title}</p>
      <p className="text-[#4A4A4A] mt-3">{desc}</p>
    </div>
  );
};

const WhoItWorkSection = () => {
  return (
    <div className="py-16 px-[5%] max-md:px-4 bg-white">

      <TitleCard title='How It Works' />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {WhoItWorkData.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
      <div className='flex items-center justify-center gap-4 sm:gap-6 mt-10'>
        <GlobalButton title='Inquire Now' className='w-[140px] h-[46px]' />
        <GlobalButton title='Fill Out My Business Profile' bgColor='white' color='#012641' borderColor='#CFCFCF' borderWidth='1px' className='w-[270px] h-[46px]' />
      </div>
    </div>
  );
};

export default WhoItWorkSection;
