'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

import Avatar1 from "@/assets/pngs/small-ava.png";
import Avatar2 from "@/assets/pngs/small-ava2.png";
import Avatar3 from "@/assets/pngs/small-ava3.png";
import Blured from "@/assets/pngs/video-blured-img.png";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="py-16 px-[5%] max-md:px-4 bg-white">
      <h1 className="text-4xl max-md:text-2xl font-bold max-w-sm mx-auto text-center text-[#012641] mb-4">
        With this guide, you will learn how to
      </h1>

      <div className='bg-[#012641] flex items-center gap-4 rounded-full px-2 py-1 max-w-sm mx-auto mb-8'>
        <div className='flex -space-x-4'>
          <Image src={Avatar1} alt="" className='h-[40px] w-[40px] rounded-full' />
          <Image src={Avatar2} alt="" className='h-[40px] w-[40px] rounded-full' />
          <Image src={Avatar3} alt="" className='h-[40px] w-[40px] rounded-full' />
        </div>
        <p className='text-white text-sm'>Join 456+ people and teams using Zoiax</p>
      </div>

      <div className="relative mx-auto w-full aspect-video rounded-xl overflow-hidden">
        {!isPlaying ? (
          <>
            <Image
              src={Blured}
              alt="Video preview"
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 transition hover:bg-black/50"
            >
              <div className="bg-white p-3 rounded-full">
                <Play className="h-6 w-6 text-black" />
              </div>
            </button>
          </>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Video Player"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
