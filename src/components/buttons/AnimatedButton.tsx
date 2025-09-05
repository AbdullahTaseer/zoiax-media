"use client";
import React, { useEffect, useState } from "react";

type AnimatedButtonProps = {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  width?: string;
  height?: string;
  background?: string;
  className?: string;
};

const ANIM_MS = 1000;
const GAP_MS = 1000;

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  title,
  onClick,
  width = "100%",
  height = "46px",
  background = "#012641",
  className,
}) => {
  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let startTimeout: ReturnType<typeof setTimeout> | undefined;
    let stopTimeout: ReturnType<typeof setTimeout> | undefined;

    const runCycle = () => {
      setAnimate(true);
      stopTimeout = setTimeout(() => {
        setAnimate(false);
        startTimeout = setTimeout(() => {
          if (hovered) runCycle();
        }, GAP_MS);
      }, ANIM_MS);
    };

    if (hovered) {
      runCycle();
    } else {
      setAnimate(false);
    }

    return () => {
      if (startTimeout) clearTimeout(startTimeout);
      if (stopTimeout) clearTimeout(stopTimeout);
    };
  }, [hovered]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden flex rounded-[7px] items-center cursor-pointer justify-center transition-colors duration-300 ${className}`}
      style={{ width, height, background }}
    >
      <div className="relative flex items-center text-sm flex-col overflow-hidden">
        <p className={`block text-white ${animate ? "-translate-y-10 duration-500" : "translate-y-2.5"}`}>
          {title}
        </p>
        <p className={`block text-white ${animate ? "-translate-y-2.5 duration-500" : "translate-y-10"}`}>
          {title}
        </p>
      </div>

      <span className="absolute left-2 top-2 text-white sparkle1 pointer-events-none">✦</span>
      <span className="absolute right-2 top-2 text-white sparkle2 pointer-events-none">✦</span>
      <span className="absolute left-10 -bottom-1 text-white sparkle3 pointer-events-none">✦</span>
    </button>
  );
};

export default AnimatedButton;