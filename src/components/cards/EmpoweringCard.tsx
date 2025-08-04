import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

type props = {
  id: number;
  name: string;
  role: string;
  bigImageSrc: string | StaticImport;
  smallImageSrc: string | StaticImport;
}

const EmpoweringCard = ({ name, role, bigImageSrc, smallImageSrc }: props) => {

  return (
    <div className="flex-shrink-0 w-80">

      <div className="relative w-full mb-4">
        <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300 ease-in-out">
          <Image
            src={bigImageSrc}
            alt={name}
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>

      <div className="p-2 rounded-full text-white bg-[#0E0E0E] w-[80%]">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={smallImageSrc}
              alt={`${name} profile`}
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweringCard; 