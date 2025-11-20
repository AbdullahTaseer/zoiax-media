'use client';
import React, { useRef, useState, useEffect } from 'react';
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
import GlobalModal from '../globalModal/GlobalModal';
import BusinessInquiryForm from '../globalModal/BusinessInquiryForm';
import InfluencerApplicationForm from '../globalModal/InfluencerApplicationForm';

const imagesRow1 = [HeroImg_1, HeroImg_2, HeroImg_3, HeroImg_4, HeroImg_5, HeroImg_6];
const imagesRow2 = [HeroImg_2, HeroImg_4, HeroImg_5, HeroImg_1, HeroImg_3, HeroImg_6];
const imagesRow3 = [HeroImg_6, HeroImg_4, HeroImg_2, HeroImg_3, HeroImg_1, HeroImg_5];

const HeroSection = () => {
  const [openInquiryForm, setIsOpenInquiryForm] = useState(false);
  const [openInfluencerForm, setIsOpenInfluencerForm] = useState(false);


  return (
    <div className='grid grid-cols-2 max-[900px]:grid-cols-1 gap-5 relative py-20 max-[900px]:py-10 overflow-hidden'>
      <Image src={YellowShade} alt='img' className='absolute' />

      <div className='my-auto pl-[5%] max-md:pl-4 max-md:pr-4 relative z-10'>
        <p className='text-[62px] max-[1200px]:text-[50px] max-[800px]:text-[42px] max-[500px]:text-[34px] leading-[70px] max-[1200px]:leading-[60px] max-[800px]:leading-[50px] max-[500px]:leading-[40px] font-medium'>
          Real Creators. Real Content. Real Growth.
        </p>
        <p className='mt-8 text-[18px] max-[550px]:text-[16px] font-[300]'>
          Your customers follow people, not ads. Zoiax Media Connects your brand with the creators they already trust. we're building a smarter way to grow through verified influencers, curated content, and a team that delivers everything for you.
        </p>

        <div className="flex items-center max-[500px]:flex-col gap-4 sm:gap-6 mt-10">
          <GlobalButton onClick={() => setIsOpenInquiryForm(true)} title="Inquire About Services" className="w-[240px] max-[500px]:w-[260px] h-[46px]" />
          <GlobalButton
            onClick={() => setIsOpenInfluencerForm(true)}
            title="Preview Influencers"
            bgColor="white"
            color="#012641"
            borderColor="#CFCFCF"
            borderWidth="1px"
            className="w-[260px] h-[46px]"
          />

          <Image
            src={PlayIcon}
            alt="Play"
            className='cursor-pointer hover:opacity-80 hover:scale-105 duration-200' />
        </div>
      </div>

      <div className="space-y-4 relative">

        {[imagesRow1, imagesRow2, imagesRow3].map((row, idx) => (
          <div
            key={idx}
            className={`flex gap-4 overflow-x-scroll scrollbar-hide relative ${idx === 0 || idx === 2 ? 'pl-10' : ''}`}
            // style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            {[...row, ...row].map((img, i) => (
              <Image key={i} src={img} alt="Hero" className="shrink-0 w-[250px] max-[1100px]:w-[200px] max-[700px]:w-[150px]" />
            ))}
          </div>
        ))}
      </div>

      <GlobalModal
        title='Business Inquiry Form'
        isOpen={openInquiryForm}
        onClose={() => setIsOpenInquiryForm(false)}
        className='w-[70vw] max-[900px]:w-[80vw] max-[500px]:w-[90vw] h-[80vh] overflow-y-auto scrollbar-hide'
      >
        <BusinessInquiryForm />
      </GlobalModal>
      <GlobalModal
        title='Influencer Application Form'
        isOpen={openInfluencerForm}
        onClose={() => setIsOpenInfluencerForm(false)}
        className='w-[70vw] max-[900px]:w-[80vw] max-[500px]:w-[90vw] h-[80vh] overflow-y-auto scrollbar-hide'
      >
        <InfluencerApplicationForm />
      </GlobalModal>
    </div>
  );
};

export default HeroSection;
