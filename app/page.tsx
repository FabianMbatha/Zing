"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import Card from "./components/profile_card";
import BottomNav from "./components/bottom_bar";

// Mock profiles data
const PROFILES = [
  {
    id: 1,
    profilePic: "/image 1.png",
    userName: "Andrea Michael",
    intent: "Seeking Co-Founder",
  },
  {
    id: 2,
    profilePic: "/image 1.png",
    userName: "Maxwell Luthenburg",
    intent: "Job Searching",
  },
  {
    id: 3,
    profilePic: "/image 1.png",
    userName: "Alice Susan",
    intent: "Hiring",
  },
  {
    id: 4,
    profilePic: "/image 1.png",
    userName: "Omar Ali",
    intent: "Looking for Investors",
  },
  {
    id: 5,
    profilePic: "/image 1.png",
    userName: "Liam Wilson",
    intent: "Job Searching",
  },
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const currentProfile = PROFILES[currentIndex];

  return (
    <main className="min-h-screen bg-[#18171C]">
      <Navbar />

      {currentProfile ? (
        <Card
          profile={currentProfile}
          onPass={handleNext}
          onConnect={handleNext}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-135 mt-20 text-white">
          <h2 className="text-2xl font-bold mb-2">No more profiles!</h2>
          <p className="text-stone-400 mb-4">Check back later for new matches.</p>
          <button
            onClick={() => setCurrentIndex(0)}
            className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-semibold hover:bg-indigo-500 transition-colors"
          >
            Reset Deck
          </button>
        </div>
      )}

      <BottomNav />
    </main>
  );
}