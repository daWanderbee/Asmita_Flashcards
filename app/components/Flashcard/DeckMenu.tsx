"use client";

import { Card } from "@/app/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DeckMenu = () => {
  const router = useRouter();

  return (
    <div>
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="text-lg font-fredoka text-primary mb-4 hover:underline font-bold"
      >
        ← Back to Level
      </button>
      {/* Deck Menu Card */}
      <Card
        className="
        w-full
        font-fredoka
        px-10
        py-8
        md:min-w-4xl
        lg:min-w-5xl
      "
      >
        {/* Title */}
        <h2 className="text-5xl font-bold text-black mb-2">Select Deck</h2>

        {/* Deck options */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          w-full
        "
        >
          {/* Vocabulary */}
          <Card
          linkTo="/flashcard/deck/vocabulary"
            className="
            border-2
            w-full
            min-h-[30vh]
            flex items-center justify-between
            px-8
            cursor-pointer
            hover:bg-stone-100 transition-all
            hover:shadow-[0px_0px_0px_rgba(0,0,0,0.9)]
          "
            onClick={() => router.push("/flashcard/deck/vocabulary")}
          >
            <span className="text-4xl text-black">Vocabulary</span>

            <Image
              className="w-60"
              src="/vocabulary.png"
              alt="Vocabulary"
              width={96}
              height={96}
            />
          </Card>

          {/* Kanji */}
          <Card
            className="
            border-2
            w-full
            min-h-[30vh]
            flex items-center justify-between
            px-8
            cursor-pointer
            hover:bg-stone-100 hover:shadow-[0px_0px_0px_rgba(0,0,0,0.9)] transition-all
          "
            linkTo="/flashcard/deck/kanji"
          >
            <span className="text-4xl text-black">Kanji</span>

            <Image
              className="w-60"
              src="/kanji.png"
              alt="Kanji"
              width={96}
              height={96}
            />
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default DeckMenu;
