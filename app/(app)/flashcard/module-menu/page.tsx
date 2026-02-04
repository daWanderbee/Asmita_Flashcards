"use client";
import { Card } from "@/app/ui/card";
import { useRouter } from "next/navigation";

const modules = [
  {
    id: 1,
    name: "Greetings",
    description: "Basic everyday greetings",
  },
  {
    id: 2,
    name: "Food & Drinks",
    description: "Common food and beverages",
  },
  {
    id: 3,
    name: "Travel",
    description: "Words used while travelling",
  },
  {
    id: 4,
    name: "Family",
    description: "Family members and relationships",
  },
  {
    id: 5,
    name: "Daily Life",
    description: "Everyday common vocabulary",
  },
  {
    id: 6,
    name: "Numbers",
    description: "Counting, prices, and quantities",
  },

  // 🔹 Added modules
  {
    id: 7,
    name: "Time & Date",
    description: "Days, months, time expressions",
  },
  {
    id: 8,
    name: "Places",
    description: "Locations and directions",
  },
  {
    id: 9,
    name: "Transportation",
    description: "Travel modes and commuting words",
  },
  {
    id: 10,
    name: "Shopping",
    description: "Buying, prices, and stores",
  },
  {
    id: 11,
    name: "Weather",
    description: "Weather conditions and seasons",
  },
  {
    id: 12,
    name: "Health",
    description: "Body parts and basic health terms",
  },
  {
    id: 13,
    name: "Work & Office",
    description: "Workplace and job-related words",
  },
  {
    id: 14,
    name: "School & Education",
    description: "Study, classes, and exams",
  },
  {
    id: 15,
    name: "Hobbies",
    description: "Leisure activities and interests",
  },
  {
    id: 16,
    name: "Emotions",
    description: "Feelings and expressions",
  },
  {
    id: 17,
    name: "Adjectives",
    description: "Common descriptive words",
  },
  {
    id: 18,
    name: "Verbs",
    description: "Frequently used action words",
  },
  {
    id: 19,
    name: "Polite Expressions",
    description: "Formal and polite phrases",
  },
  {
    id: 20,
    name: "Technology",
    description: "Modern tech-related vocabulary",
  },
];


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
                onClick={() => router.push(`/module/${module.id}`)}
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
