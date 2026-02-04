"use client";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Poppins, Fredoka } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const pathname = usePathname();
  const hideLogout = pathname === "/flashcard/levels";

  return (
    <div
      className={`
        min-h-screen w-full
        ${poppins.variable}
        ${fredoka.variable}
        font-poppins
      `}
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // 🔒 BACKGROUND LOCKED
      }}
    >
      {/* Sticky Navbar */}
      <header className="h-16 w-full bg-primary flex items-center justify-between px-6 shadow-sm sticky top-0 z-50">
        <Image
          src="/logoWhite.svg"
          alt="KonnichiWow"
          width={120}
          height={32}
          priority
        />

        {!hideLogout && (
          <button className="flex items-center gap-2 text-white text-md font-bold hover:opacity-80">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </button>
        )}
      </header>

      {/* Page content scrolls naturally */}
      <main className="w-full flex justify-center px-6 py-10">{children}</main>
    </div>
  );
};

export default AppLayout;
