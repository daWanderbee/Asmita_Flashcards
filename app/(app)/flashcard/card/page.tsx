"use client";

import { Card } from "@/app/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faShuffle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

// Sample flashcards
const flashcardsData = [
  {
    id: 1,
    front: "こんにちは",
    back: "Hello / Good afternoon",
    starred: false,
  },
  {
    id: 2,
    front: "ありがとう",
    back: "Thank you",
    starred: true,
  },
  {
    id: 3,
    front: "おはよう",
    back: "Good morning",
    starred: false,
  },
  {
    id: 4,
    front: "こんばんは",
    back: "Good evening",
    starred: false,
  },
  {
    id: 5,
    front: "水（みず）",
    back: "Water",
    starred: true,
  },
  {
    id: 6,
    front: "食べ物（たべもの）",
    back: "Food",
    starred: false,
  },
  {
    id: 7,
    front: "学校（がっこう）",
    back: "School",
    starred: false,
  },
  {
    id: 8,
    front: "先生（せんせい）",
    back: "Teacher",
    starred: true,
  },
  {
    id: 9,
    front: "学生（がくせい）",
    back: "Student",
    starred: false,
  },
  {
    id: 10,
    front: "行く（いく）",
    back: "To go",
    starred: false,
  },
];


const FlashcardCardPage = () => {
  const router = useRouter();

  // States
  const [showStarred, setShowStarred] = useState(false);
  const [flashcards, setFlashcards] = useState(flashcardsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Get cards to show
  const currentDeck = showStarred
    ? flashcards.filter((card) => card.starred)
    : flashcards;

  const currentCard = currentDeck[currentIndex];

  // Star/Unstar current card
  const toggleStar = () => {
    setFlashcards(
      flashcards.map((card) =>
        card.id === currentCard.id ? { ...card, starred: !card.starred } : card,
      ),
    );
  };

  // Go to next card
  const goToNext = () => {
    setIsFlipped(false);
    if (currentIndex < currentDeck.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Go to previous card
  const goToPrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentDeck.length - 1);
    }
  };

  // Shuffle cards
  const handleShuffle = () => {
    const shuffled = [...currentDeck].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="w-full  max-w-5xl mx-auto px-4">
      {/* Back Button – left aligned to card */}
      <div className="flex justify-start">
        <button
          onClick={() => router.back()}
          className="mb-6 text-lg font-fredoka text-primary font-bold hover:underline flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Module
        </button>
      </div>

      {/* Card – centered */}
      <Card className="min-w-[100%] px-8 py-12 font-fredoka">
        {/* Toggle: All Cards / Starred */}
        <div className="flex justify-center mb-8">
          <div className="relative flex rounded-full border-2 border-muted overflow-hidden bg-white">
            {/* Sliding background pill */}
            <div
              className={`absolute top-0 m-0.5 bottom-0 w-1/2 bg-primary rounded-full transition-all duration-300 ease-in-out ${
                showStarred ? "left-1/2 w-28" : "left-0"
              }`}
            />

            {/* All Cards Button */}
            <button
              onClick={() => {
                setShowStarred(false);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`relative z-10 px-8 text-sm font-bold transition-colors ${
                !showStarred ? "text-white" : "text-gray-700"
              }`}
            >
              All Cards
            </button>

            {/* Starred Button */}
            <button
              onClick={() => {
                setShowStarred(true);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`relative z-10 px-8 py-2 text-sm font-bold transition-colors ${
                showStarred ? "text-white" : "text-gray-700"
              }`}
            >
              Starred
            </button>
          </div>
        </div>

        {/* Flashcard Container */}
        <div className="mb-10" style={{ perspective: "1000px" }}>
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative w-full h-[400px] cursor-pointer transition-all duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* FRONT of card */}
            <div
              className="absolute inset-0 w-full h-full rounded-3xl border-2 hover:shadow-md border-black bg-white flex items-center justify-center text-5xl text-black "
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              {/* Star button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleStar();
                }}
                className={`absolute top-6 right-6 transition-all ${
                  currentCard?.starred ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                <FontAwesomeIcon
                  icon={currentCard?.starred ? faStar : faStar}
                  size="sm"
                />
              </button>

              {/* Front text */}
              <div className="text-center px-8 font-medium">
                {currentCard?.front || "No cards"}
              </div>
            </div>

            {/* BACK of card */}
            <div
              className="absolute inset-0 w-full h-full rounded-3xl border-2 border-black flex items-center justify-center text-5xl text-black hover:shadow-md"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              {/* Star button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleStar();
                }}
                className={`absolute top-6 right-6 transition-all ${
                  currentCard?.starred ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                <FontAwesomeIcon
                  icon={currentCard?.starred ? faStar : faStar}
                  size="sm"
                />
              </button>

              {/* Back text */}
              <div className="text-center px-8 font-medium">
                {currentCard?.back || "No cards"}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-12">
          {/* Shuffle button */}
          <button
            onClick={handleShuffle}
            className="text-gray-400 hover:text-primary hover:rotate-180 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faShuffle} size="2x" />
          </button>

          {/* Previous button */}
          <button
            onClick={goToPrev}
            className="text-primary hover:scale-125 transition-transform active:scale-95"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </button>

          {/* Counter: 1 / 15 */}
          <div className="text-gray-700 font-bold text-2xl min-w-[100px] text-center">
            {currentDeck.length > 0 ? currentIndex + 1 : 0} /{" "}
            {currentDeck.length}
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="text-primary hover:scale-125 transition-transform active:scale-95"
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default FlashcardCardPage;
