import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        // 👇 entrance effects added here ONLY
        "w-full rounded-full py-2.5 text-sm font-medium flex items-center justify-center gap-2 \
         transition-all duration-300 ease-out \
         opacity-0 translate-y-1 animate-[fadeInUp_0.35s_ease-out_forwards]",

        {
          // Primary: darker pink on hover
          "bg-primary text-white hover:bg-[#d81f54] active:bg-[#c61c4c]":
            variant === "primary",

          // Outline: pink text + border on hover
          "border border-gray-300 text-muted hover:border-foreground hover:bg-[#ec265f14]":
            variant === "outline",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
