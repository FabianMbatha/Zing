"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiContractLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full pt-5 px-5">
      {/* Top Header Row */}
      <div className="flex justify-between items-center">
        <div>
          <Image
            src="/zing_logo.png"
            width={35}
            height={35}
            alt="Zing Logo"
            className="rounded-lg"
          />
        </div>
        <button className="p-2" onClick={handleClick}>
          {isOpen ? (
            <IoClose className="text-white" size={24} />
          ) : (
            <RxHamburgerMenu className="text-white" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="flex flex-col space-y-6 pt-6 pb-4 px-4 bg-[#18181b] rounded-2xl mt-4 border border-zinc-800"
        >
          {/* Mode Selector */}
          <div>
            <p className="text-xs text-zinc-400 font-semibold mb-2 uppercase tracking-wider">
              Networking Intent
            </p>
            <div className="flex flex-col space-y-2">
              <button className="text-left py-2 px-3 bg-zinc-800 text-white text-sm rounded-lg border border-teal-500/50 flex gap-2 items-center">
                <MdOutlinePeopleAlt size={24} /> Seeking Co-Founder
              </button>
              <button className="text-left py-2 px-3 text-zinc-400 hover:text-white text-sm rounded-lg hover:bg-zinc-800/50 flex gap-2 items-center">
                <RiContractLine size={24} /> Open to Hire
              </button>
            </div>
          </div>

          {/* Utilities */}
          <div className="border-t border-zinc-800 pt-4 flex flex-col space-y-3 text-sm text-zinc-300">
            <button className="text-left hover:text-white">Profile Verification</button>
            <button className="text-left hover:text-white">Help & Support</button>
            <button className="text-left text-red-400 hover:text-red-300 pt-2">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}