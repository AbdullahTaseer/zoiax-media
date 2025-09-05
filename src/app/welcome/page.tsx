"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import AnimatedButton from '@/components/buttons/AnimatedButton';

const Welcome = () => {

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-orange-50 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-gray-100">

          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-[#012641] text-[24px] sm:text-[32px] font-[800] mb-4">
              Welcome to Zoiax Media
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              We&#39;re excited to have you here!
            </p>
          </div>

          <div className="text-black space-y-4 w-full mb-6 sm:mb-8">
            <div>
              <p className='text-sm text-gray-600 mb-1'>Username</p>
              <p className='text-[#012641] font-semibold text-sm sm:text-base'>john_doe</p>
            </div>
            <div>
              <p className='text-sm text-gray-600 mb-1'>Email</p>
              <p className='text-[#012641] font-semibold text-sm sm:text-base'>john.doe@example.com</p>
            </div>
          </div>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-6 sm:mt-8 text-center">
            Thank you for choosing Zoiax Media. We&#39;re here to help you grow your restaurant business with innovative marketing solutions and influencer partnerships.
          </p>

          <div className="mt-6 sm:mt-8">
            <AnimatedButton title="Continue" height="40px" onClick={() => router.push('/login')} />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Welcome; 