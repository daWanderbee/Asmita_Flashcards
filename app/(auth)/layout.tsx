import React from "react";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#F3F2F0] overflow-hidden">
      {/* Top Logo */}
      <div className="absolute top-6 left-9 z-20">
        <Image
          src="/logoPink.svg"
          alt="Pink logo"
          priority
          width={121}
          height={68}
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Left Curved Green Background */}
      <div className="absolute inset-y-0 left-0 w-[80%] xl:w-[70%] hidden md:block z-0">
        <Image
          src="/Greenbg.svg"
          alt="Green curved background"
          priority
          width={1200}
          height={900}
          className="h-full w-auto object-contain"
        />
        
      </div>

      {/* Mascot */}
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 z-10 hidden md:block">
        
        <div className="relative w-2xl h-3xl -m-64">
          
          <Image
            src="/mascot.svg"
            alt="KonnichiWow mascot"
            width={835}
            height={835}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* ✅ RIGHT SIDE CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center justify-center md:justify-end px-6">
        <div className="w-full md:w-1/2 flex justify-center">{children}</div>
      </div>
    </div>
  );
};

export default layout;
