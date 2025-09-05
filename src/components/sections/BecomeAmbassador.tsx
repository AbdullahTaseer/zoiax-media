import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AnimatedButton from '../buttons/AnimatedButton';

const BecomeAmbassador = () => {
  return (
    <div className="py-16 px-[5%] max-md:px-4 bg-[#F4F8FB]">
      <h1 className="text-4xl max-md:text-2xl font-bold text-center text-[#012641] mb-4">
        Become an Ambassador.
      </h1>
      <p className="text-center max-w-xl mx-auto text-sm text-black mb-10">
        Explore the top businesses collaborating with influencers to create impactful campaigns.
      </p>
      <div className='grid grid-cols-2 max-[500px]:grid-cols-1 gap-6'>
        <div>
          <p className='pl-1 pb-1 text-sm'>Name *</p>
          <input type='text' placeholder='Name' className='w-full outline-0 shadow-sm px-4 py-2 border bg-white border-transparent focus:border-[#012641] rounded-[12px]' />
        </div>
        <div>
          <p className='pl-1 pb-1 text-sm'>Email *</p>
          <input type='email' placeholder='Email' className='w-full outline-0 shadow-sm px-4 py-2 border bg-white border-transparent focus:border-[#012641] rounded-[12px]' />
        </div>
        <div>
          <p className='pl-1 pb-1 text-sm'>Phone number *</p>
          <input type='tel' placeholder='Phone number' className='w-full outline-0 shadow-sm px-4 py-2 border bg-white border-transparent focus:border-[#012641] rounded-[12px]' />
        </div>
        <div>
          <p className='pl-1 pb-1 text-sm'>Country</p>
          <Select>
            <SelectTrigger className="w-full border bg-white border-transparent focus:border-[#012641] shadow-sm !h-[42px]">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">Pak</SelectItem>
                <SelectItem value="2">Ind</SelectItem>
                <SelectItem value="3">USA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <AnimatedButton title='Submit' width='200px' height='40px' className='mx-auto mt-10' />
    </div>
  );
};

export default BecomeAmbassador;