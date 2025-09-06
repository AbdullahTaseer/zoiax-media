"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import GlobalButton from '@/components/buttons/GlobalButton';

import GoogleIcon from "@/assets/svgs/google-icon.png";
import FacebookIcon from '@/assets/svgs/facebook-svg.svg';

const Login = () => {

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-orange-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-gray-100">
          <h1 className="text-[#012641] text-[24px] sm:text-[32px] text-center mb-6 sm:mb-8 font-[800]">
            Zoiax Media
          </h1>

          <form className="text-black space-y-4 sm:space-y-5 w-full">
            <div>
              <p className='pb-1 text-sm'>Email Address *</p>
              <input type='email' placeholder='Enter your email' className='w-full outline-0 px-3 py-[8px] border bg-white border-[#012641] rounded-[5px] placeholder:text-sm text-sm' />
            </div>
            <div>
              <p className='pb-1 text-sm'>Password *</p>
              <input type='password' placeholder='Enter your password' className='w-full outline-0 px-3 py-[8px] border bg-white border-[#012641] rounded-[5px] placeholder:text-sm text-sm' />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 focus:ring-[#012641] accent-[#012641] border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link href="#" className="font-medium text-[#012641] hover:text-[#012641]/80 transition-colors duration-200">
                  Forgot password?
                </Link>
              </div>
            </div>

            <GlobalButton onClick={() => router.push("/welcome")} title="Sign In" height="40px" font="600" />

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200">
                <Image src={GoogleIcon} alt="google" width={20} height={20} className="mr-2" />
                Google
              </button>
              <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200">
                <Image src={FacebookIcon} alt="Facebook" width={20} height={20} className="mr-2" />
                Facebook
              </button>
            </div>

          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&#39;t have an account?{' '}
              <Link href="/register" className="font-medium text-[#012641] hover:text-[#012641]/80 transition-colors duration-200">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;