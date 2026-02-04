"use client";
import { Card } from "@/app/ui/card";
import { useRouter } from "next/navigation";
import { modulesData } from "@/app/data/flashCards";

const modules = modulesData;

const ModuleMenuPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen mt-[10vh] sm:mt-[15vh] lg:mt-[20vh] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => router.back()}
          className="text-base sm:text-lg font-fredoka text-primary mb-4 sm:mb-6 hover:underline font-bold"
        >
          ← Back to Level
        </button>

        <Card className="w-fit lg:min-w-5xl p-4 sm:p-6 lg:p-8">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-fredoka font-bold text-gray-800 mb-6 sm:mb-8 ">
            Select Lesson
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {modules.map((module) => (
              <Card
                key={module.id}
                className="p-4 border-2 flex flex-col justify-end sm:p-6 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] hover:shadow-none hover:bg-gray-100 transition-shadow cursor-pointer"
                linkTo="/flashcard/card"
              >
                <h2 className="text-lg sm:text-xl font-fredoka font-bold text-gray-800 mb-2">
                  {module.name}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {module.description}
                </p>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ModuleMenuPage;
