import React from 'react';

type props = {
  title: string;
  className?: string;
}

const TitleCard = ({ title, className }: props) => {
  return (
    <p className={`text-[50px] leading-[60px] max-[1140px]:text-[40px] max-[900px]:text-[36px] max-[1140px]:leading-[47px] text-center text-[#012641] ${className}`}>
      {title}
    </p>
  );
};

export default TitleCard;
