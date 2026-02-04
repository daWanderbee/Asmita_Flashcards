"use client";

import { Card } from "@/app/ui/card";
import { useRouter } from "next/navigation";
import { LevelTile } from "@/app/ui/LevelTile";

const lessons = Array.from({ length: 40 }, (_, i) => i + 1);

const VocabularyDeckPage = () => {
  const router = useRouter();

  return  (
    <div className=" mt-[20vh] " >
      <button
        onClick={() => router.back()}
        className="text-lg mx-auto font-fredoka text-primary mb-4 hover:underline font-bold"
      >
        ← Back to Level
      </button>
      <Card className="w-fit min-w-[70vw] font-fredoka px-10 py-8">
        {/* Back */}

        {/* Title */}
        <h1 className="text-5xl text-black font-bold mb-8">Select Lesson</h1>

        {/* Tiles */}
        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-5
          gap-6
        "
        >
          {lessons.map((lesson) => (
            <LevelTile
              key={lesson}
              level={lesson.toString()}
              linkTo={`/flashcard/card`}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default VocabularyDeckPage;
