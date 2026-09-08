"use client";

import { HiBookmark, HiCog, HiChatAlt2 } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { TbSearchFilled } from "react-icons/tb";

export default function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 z-50">
      <div className="relative flex items-center justify-center">
        {/* SVG Container with Concave Cutout */}
        <svg
          viewBox="0 0 320 64"
          className="w-full h-16 drop-shadow-lg fill-[#1E1E22]"
        >
          <path
            d="M 24 0 
               H 110 
               C 122 0, 126 8, 132 16 
               C 140 28, 180 28, 188 16 
               C 194 8, 198 0, 210 0 
               H 296 
               A 24 24 0 0 1 320 24 
               V 40 
               A 24 24 0 0 1 296 64 
               H 24 
               A 24 24 0 0 1 0 40 
               V 24 
               A 24 24 0 0 1 24 0 
               Z"
          />
        </svg>

        {/* Center Floating Action Button */}
        <button
          type="button"
          aria-label="Main Action"
          className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
        >
          <HiChatAlt2 className="w-7 h-7 text-[#1E1E22]" />
        </button>

        {/* Navigation Links Layer */}
        <nav className="absolute inset-0 grid grid-cols-5 items-center px-4">
          <button
            type="button"
            aria-label="Home"
            className="flex justify-center text-gray-300 hover:text-white transition-colors"
          >
            <GoHomeFill className="w-6 h-6" />
          </button>

          <button
            type="button"
            aria-label="Search"
            className="flex justify-center text-gray-300 hover:text-white transition-colors"
          >
            <TbSearchFilled className="w-6 h-6" />
          </button>

          {/* Spacer for Center Notch */}
          <div />

          <button
            type="button"
            aria-label="Bookmarks"
            className="flex justify-center text-gray-300 hover:text-white transition-colors"
          >
            <HiBookmark className="w-6 h-6" />
          </button>

          <button
            type="button"
            aria-label="Settings"
            className="flex justify-center text-gray-300 hover:text-white transition-colors"
          >
            <HiCog className="w-6 h-6" />
          </button>
        </nav>
      </div>
    </div>
  );
}