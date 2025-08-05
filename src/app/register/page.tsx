import React from "react";
import Image from "next/image";

import AuthImg from "@/assets/pngs/auth-image.png";
import StarImg from "@/assets/svgs/auth-stars.svg";

const Register = () => {
  return (
    <div className="grid grid-cols-2 max-[768px]:grid-cols-1">

      <div className="relative max-[768px]:hidden">
        <Image src={AuthImg} alt="" className="absolute top-0 left-0 w-full h-screen object-cover" />

        <div className="relative z-10 h-screen w-full p-8 flex flex-col justify-between">
          <h1 className="text-white px-5 text-[24px] font-[800] whitespace-nowrap">
            Zoiax Media
          </h1>
          <div className="px-5">
            <Image src={StarImg} alt="" />
            <h1 className="text-white text-[35px] lg:text-[60px] leading-[40px] lg:leading-[60px] font-bold py-6">
              Start turning your ideas into reality.
            </h1>
            <p className="text-white font-bold w-[80%]">
              Create a free account and get full access to all features for 30-days. Get started in 2 minutes.
            </p>
          </div>

          <div />
          <div className="text-white">© 2025 Zoiax.</div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 p-[5%] min-h-screen">
        <div className='border-gray-600 border hover:border-[#FE7151] p-4 rounded-[10px] cursor-pointer flex items-center gap-4'>
          <div className='h-[80px] w-[80px] rounded-full flex justify-center shrink-0 items-center'>
            <Image src={AuthImg} alt="" className='rounded-full w-full h-full object-cover' />
          </div>
          <div>
            <p className='font-bold text-[20px]'>Test</p>
            <p className='text-[14px] line-clamp-3 text-ellipsis mt-2'>Test</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;
