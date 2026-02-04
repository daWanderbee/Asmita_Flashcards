"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/app/ui/button";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Top Navbar */}
      <header className="w-full h-16 bg-primary z-20 flex items-center px-6">
        <Image
          src="/logoWhite.svg"
          alt="KonnichiWow"
          width={120}
          height={32}
          priority
        />
      </header>

      {/* Main Content */}
      <main
        className="
          flex-1
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          
        "
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Tint overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "#26ECB4",
            opacity: 0.65, // adjust strength
          }}
        />
        {/* Mascot */}
        <Image
          src="/404.png"
          alt="Coming Soon"
          width={260}
          height={260}
          priority
          className="mb-6 z-20"
        />

        {/* Back Button */}
        <Button onClick={() => router.back()} className="max-w-xs">
          Back
        </Button>
      </main>
    </div>
  );
};

export default NotFoundPage;
