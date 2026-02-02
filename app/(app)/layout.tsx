import React from "react";
import Image from "next/image";
import { Poppins, Fredoka } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fredoka",
});

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`
        min-h-screen w-full
        ${poppins.variable}
        ${fredoka.variable}
        font-poppins
      `}
    >
      {/* Navbar */}
      <header className="w-full bg-primary h-16 flex items-center px-6 shadow-sm">
        <Image
          src="/logoWhite.svg"
          alt="KonnichiWow"
          width={120}
          height={32}
          priority
        />
      </header>

      {/* Background + Content */}
      <main
        className="
          min-h-[calc(100vh-4rem)]
          flex
          items-center
          justify-center
          px-6
          py-10
          w-full
        "
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
