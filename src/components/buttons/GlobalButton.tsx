'use client'
import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  title: string;
  width?: string;
  font?: string;
  color?: string;
  height?: string;
  icon?: string | StaticImport;
  bgColor?: string;
  loaderColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  className?: string;
  hover?: {
    bgColor?: string;
    color?: string;
    borderColor?: string;
  };
  onClick?: (e: React.FormEvent) => void;
};

const GlobalButton = ({
  hover,
  width,
  title,
  height,
  className,
  borderColor,
  borderWidth,
  icon,
  font = "400",
  color = "white",
  borderRadius = '12px',
  bgColor = "#012641",
  onClick,
}: Props) => {
  const hoverBgColor = hover?.bgColor || "backgroundColor";

  return (
    <div
      style={{
        width,
        color,
        height,
        borderRadius,
        fontWeight: font,
        backgroundColor: bgColor,
        border: `${borderWidth} solid ${borderColor}`,
        userSelect: 'none'
      }}
      className={`gap-2 ${className} flex justify-center items-center text-[14px] max-[1023px]:text-[13px] max-[540px]:text-[12px] leading-[22px] tracking-[0.1px] cursor-pointer`}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBgColor;
        e.currentTarget.style.color = hover?.color || color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
        e.currentTarget.style.color = color;
      }}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt="icon" />}
      {title}
    </div>
  );
};

export default GlobalButton;