"use client";

import Image from "next/image";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Profile } from "../profile";

interface CardProps {
  profile: Profile;
  onPass: () => void;
  onConnect: () => void;
}

export default function Card({ profile, onPass, onConnect }: CardProps) {
  return (
    <section>
      <div className="bg-[#292830] w-85 h-135 mx-auto mt-20 rounded-3xl">
        <div>
          <Image
            src={profile.profilePic || "/image 1.png"}
            alt={profile.userName}
            width={320}
            height={50}
            className="mx-auto pt-2 rounded-4xl"
          />
        </div>
        <div>
          <div className="flex gap-1 items-center px-5 pt-5 text-xl">
            <p className="text-white font-bold">{profile.userName}</p>
            <MdOutlineWorkspacePremium className="text-white" size={24} />
          </div>
          <div>
            <p className="font-medium text-stone-400 px-5">{profile.intent}</p>
          </div>
        </div>

        <div className="flex mt-5">
          <button
            type="button"
            onClick={onPass}
            aria-label="Pass profile"
            className="w-20 h-20 bg-red-600 m-auto rounded-full flex justify-center items-center hover:scale-105 active:scale-95 transition-transform"
          >
            <IoClose size={24} className="text-white" />
          </button>
          <button
            type="button"
            onClick={onConnect}
            aria-label="Connect with profile"
            className="w-20 h-20 bg-green-600 m-auto rounded-full flex justify-center items-center hover:scale-105 active:scale-95 transition-transform"
          >
            <FaCheck className="text-white" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}