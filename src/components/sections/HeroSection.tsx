import React from 'react'
import Image from 'next/image';
import GlobalButton from '../buttons/GlobalButton';
import PlayIcon from '@/assets/svgs/play-icon.svg';
import YellowShade from "@/assets/svgs/yellow-gradient.svg";
import HeroImg_1 from "@/assets/pngs/hero-img-1.png";
import HeroImg_2 from "@/assets/pngs/hero-img-2.png";
import HeroImg_3 from "@/assets/pngs/hero-img-3.png";
import HeroImg_4 from "@/assets/pngs/hero-img-4.png";
import HeroImg_5 from "@/assets/pngs/hero-img-5.png";
import HeroImg_6 from "@/assets/pngs/hero-img-6.png";

const HeroSection = () => {
  return (
    <div className='grid grid-cols-2 gap-5 relative py-20'>
      <Image src={YellowShade} alt='img' className='absolute' />
      <div className='my-auto pl-[5%] max-md:pl-4'>
        <p className='text-[62px] leading-[70px] font-medium'>Real Creators.Real Content.Real Growth.</p>
        <p className='mt-8 text-[18px]'>Your customers follow people, not ads. Zoiax Media Connects your brand with the creators they already trust. we're building a smarter way to grow through verified influencers, curated content, and a team that delivers everything for you.</p>
        <div className="flex items-center max-[500px]:flex-col gap-4 sm:gap-6 mt-10">
          <GlobalButton title="Inquire About Services" className="w-[240px] h-[46px]" />
          <GlobalButton title="Preview Influencers" bgColor="white" color="#012641" borderColor="#CFCFCF" borderWidth="1px" className="w-[260px] max-[500px]:w-[240px] h-[46px]" />
          <Image src={PlayIcon} alt="Play-icon" className='cursor-pointer hover:opacity-80 hover:scale-105 duration-200' />
        </div>
      </div>
      <div>
        <div className='flex gap-4 items-center mb-4 overflow-x-auto scrollbar-hide pl-10'>
          <Image src={HeroImg_1} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_2} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_3} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_4} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_5} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_6} alt="Hero Image" className='shrink-0 w-[250px]' />
        </div>
        <div className='flex gap-4 items-center mb-4 overflow-x-auto scrollbar-hide'>
          <Image src={HeroImg_2} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_4} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_5} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_1} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_3} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_6} alt="Hero Image" className='shrink-0 w-[250px]' />
        </div>
        <div className='flex gap-4 items-center mb-4 overflow-x-auto scrollbar-hide pl-10'>
          <Image src={HeroImg_6} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_4} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_2} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_3} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_1} alt="Hero Image" className='shrink-0 w-[250px]' />
          <Image src={HeroImg_5} alt="Hero Image" className='shrink-0 w-[250px]' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;