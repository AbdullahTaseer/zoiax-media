import React from 'react';

type props = {
  title: string;
  className?: string;
}

const TitleCard = ({ title, className }: props) => {
  return (
    <p className={`text-[50px] max-md:text-2xl text-center text-[#012641] ${className}`}>
      {title}
    </p>
  );
};

export default TitleCard;
