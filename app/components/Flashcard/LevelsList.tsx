"use client";

import { LevelTile } from "@/app/ui/LevelTile";
import { useRouter } from "next/navigation";
import { Card } from "@/app/ui/card";

const levels = ["N5", "N4", "N3", "N2", "N1"];

const LevelsList = () => {
  const router = useRouter();

  return (
    <Card className="w-fit min-w-[70vw]">
      <h2 className="text-3xl font-bold mb-6 text-black font-fredoka">Select JLPT Level</h2>

      <div className="flex gap-4 justify-between">
        {levels.map((level) => (
          <LevelTile
           linkTo={`/flashcard/deck-menu`}
            key={level}
            level={level}
            onClick={() =>
              router.push(`/flashcard/levels/${level.toLowerCase()}`)
            }
          />
        ))}
      </div>
    </Card>
  );
};

export default LevelsList;
