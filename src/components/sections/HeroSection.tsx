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

const imagesRow1 = [HeroImg_1, HeroImg_2, HeroImg_3, HeroImg_4, HeroImg_5, HeroImg_6];
const imagesRow2 = [HeroImg_2, HeroImg_4, HeroImg_5, HeroImg_1, HeroImg_3, HeroImg_6];
const imagesRow3 = [HeroImg_6, HeroImg_4, HeroImg_2, HeroImg_3, HeroImg_1, HeroImg_5];

const HeroSection = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const rowRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null)
  ];

  const animationRef = useRef<number | null>(null);

  const smoothScroll = () => {
    if (!isScrolling) return;
    rowRefs.forEach((ref) => {
      const row = ref.current;
      if (!row) return;

      row.scrollLeft += 1.2;

      if (row.scrollLeft >= row.scrollWidth / 2) {
        row.scrollLeft = 0;
      }
    });

    animationRef.current = requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    if (isScrolling) {
      animationRef.current = requestAnimationFrame(smoothScroll);
    } else {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isScrolling]);

  const toggleScroll = () => setIsScrolling(prev => !prev);

  return (
    <div className='grid grid-cols-2 gap-5 relative py-20'>
      <Image src={YellowShade} alt='img' className='absolute' />

      <div className='my-auto pl-[5%] max-md:pl-4'>
        <p className='text-[62px] leading-[70px] font-medium'>
          Real Creators. Real Content. Real Growth.
        </p>
        <p className='mt-8 text-[18px]'>
          Your customers follow people, not ads. Zoiax Media Connects your brand with the creators they already trust. we're building a smarter way to grow through verified influencers, curated content, and a team that delivers everything for you.
        </p>

        <div className="flex items-center max-[500px]:flex-col gap-4 sm:gap-6 mt-10">
          <GlobalButton title="Inquire About Services" className="w-[240px] h-[46px]" />
          <GlobalButton
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
            onClick={toggleScroll}
            className='cursor-pointer hover:opacity-80 hover:scale-105 duration-200' />
        </div>
      </div>

      <div className="space-y-4 relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        {[imagesRow1, imagesRow2, imagesRow3].map((row, idx) => (
          <div
            key={idx}
            ref={rowRefs[idx]}
            className="flex gap-4 overflow-x-scroll scrollbar-hide relative pl-10"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            {[...row, ...row].map((img, i) => (
              <Image key={i} src={img} alt="Hero" className="shrink-0 w-[250px]" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
