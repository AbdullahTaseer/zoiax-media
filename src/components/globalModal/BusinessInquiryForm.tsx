import React from 'react';
import GlobalInput from '../inputs/GlobalInput';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const BusinessInquiryForm = () => {
  return (
    <div>
      <GlobalInput title='Business Name' placeholder='Enter your business name' />
      <div>
        <p className='pl-1 pb-1 text-sm'>Primary Industry</p>
        <Select>
          <SelectTrigger className="w-full border bg-[#F6F6F6] border-transparent focus:border-[#012641] !h-[42px]">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">Industry 1</SelectItem>
              <SelectItem value="2">Industry 2</SelectItem>
              <SelectItem value="3">Industry 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BusinessInquiryForm;
