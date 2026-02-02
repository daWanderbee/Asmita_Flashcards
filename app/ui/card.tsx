import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "border w-full max-w-md bg-white rounded-3xl p-8 \
         shadow-[8px_10px_3px_rgba(0,0,0,0.9)]  \
         transition-all duration-300 ease-out \
         opacity-0 translate-y-2 animate-[fadeInUp_0.45s_ease-out_forwards]",
        className,
      )}
    >
      {children}
    </div>
  );
};
