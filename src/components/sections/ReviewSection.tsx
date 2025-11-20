"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { reviews } from "@/lib/MockData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import StarRatingCard from "../cards/StarRatingCard";
import PurpleShade from "@/assets/svgs/purple-gradient.svg";

import CarouselImg from "@/assets/pngs/media-carousel.png";

interface Review {
  message: string;
  name: string;
  role: string;
  image: string | StaticImport;
}

const ReviewCard = ({ review }: { review: Review }) => (

  <div className="min-w-full p-6 max-[410px]:p-0">
    <StarRatingCard />
    <p className="text-black text-[28px] max-[1023px]:text-[20px] mt-8 line-clamp-3 text-ellipsis">{review.message}</p>
    <div className="flex justify-between items-end">
      <div className="flex gap-4 items-center mt-8">
        <div className="h-[55px] w-[55px] rounded-full bg-[#A2A8CD] relative">
          <Image src={review.image} alt={review.name} fill />
        </div>
        <div>
          <p className="font-bold text-black text-[16px]">{review.name}</p>
          <p className="text-black text-[14px]">{review.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastClicked, setLastClicked] = useState<"prev" | "next" | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setLastClicked("next");
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setLastClicked("prev");
  };

  useEffect(() => {
    timeoutRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setLastClicked(null);
    }, 4000);

    return () => {
      if (timeoutRef.current !== null) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative grid grid-cols-2 max-[768px]:grid-cols-1 gap-16 max-[1023px]:gap-8 py-12 overflow-hidden px-[5%] max-[768px]:px-4 bg-[#F4F8FB]">
      <Image src={PurpleShade} alt='img' className='absolute right-0 top-0' />

      <div className="relative mt-8 max-[1160px]:mt-0 h-[300px] max-[410px]:h-[350px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>


        <div className="absolute bottom-0 max-[1023px]:bottom-[20px] max-[410px]:bottom-3 right-0 max-[410px]:right-1/2 max-[410px]:translate-x-1/2 flex gap-4 pr-4 pb-4">
          <div
            onClick={handlePrev}
            className={`h-[40px] cursor-pointer w-[40px] flex justify-center items-center rounded-full ${lastClicked === "prev" ? "bg-[#1A1D26] text-white" : "text-black bg-white"
              }`}
          >
            <ArrowLeft />
          </div>
          <div
            onClick={handleNext}
            className={`h-[40px] cursor-pointer w-[40px] flex justify-center items-center rounded-full ${lastClicked === "next" ? "bg-[#1A1D26] text-white" : "text-black bg-white"
              }`}
          >
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image src={CarouselImg} alt="" height={300} width={500} className="max-[768px]:hidden" />
      </div>

    </div>
  );
};


export default ReviewsSection;