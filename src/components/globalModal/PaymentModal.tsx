import React from 'react';
import GlobalButton from '../buttons/GlobalButton';

const PaymentModal = ({ cancelClick }: { cancelClick: () => void }) => {
  return (
    <div className="text-black space-y-5 w-full">
      <div>
        <p className='pb-1 text-sm'>Card name *</p>
        <input type='text' placeholder='Card name' className='w-full outline-0 px-3 py-[6px] border bg-white border-[#012641] rounded-[5px]' />
      </div>
      <div>
        <p className='pb-1 text-sm'>Card number *</p>
        <input type='text' placeholder='1234 1234 1234 1234' className='w-full outline-0 px-3 py-[6px] border bg-white border-[#012641] rounded-[5px]' />
      </div>
      <div>
        <p className='pb-1 text-sm'>Card name *</p>
        <input type='text' placeholder='Name' className='w-full outline-0 px-3 py-[6px] border bg-white border-[#012641] rounded-[5px]' />
      </div>
      <div>
        <p className='pb-1 text-sm'>CVC *</p>
        <input type='text' placeholder='Name' className='w-full outline-0 px-3 py-[6px] border bg-white border-[#012641] rounded-[5px]' />
      </div>
      <div className="flex flex-wrap justify-end gap-4 mt-4">
        <GlobalButton onClick={cancelClick} title='Cancel' height='40px' width='80px' color="#012641" bgColor='white' borderColor='#012641' borderWidth='1px' />
        <GlobalButton title='Submit Payment' height='40px' width='140px' />
      </div>
    </div>
  );
};

export default PaymentModal;