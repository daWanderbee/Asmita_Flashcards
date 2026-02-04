"use client";

import clsx from "clsx";
import Link from "next/link";

interface LevelTileProps {
  level: string;
  linkTo: string;
  onClick?: () => void;
}

export const LevelTile = ({ level, onClick, linkTo }: LevelTileProps) => {
  return (
    <Link
      href={linkTo}
      className={clsx(
        "font-fredoka w-full h-[16svh] lg:h-[30svh] rounded-xl bg-primary hover:bg-[#d81f54] text-white text-3xl",
        "flex items-center justify-center text-5xl lg:text-8xl ",
        "shadow-[4px_5px_3px_rgba(0,0,0,0.9)]",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0 hover:shadow-[0px_0px_0px_rgba(0,0,0,0.9)]",
        "active:translate-y-0 active:shadow-0",
      )} 
      style={{
        fontWeight: "900",
      }}
    >
      {level}
    </Link>
  );
};
