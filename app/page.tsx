"use client";

import { useEffect, useState } from "react";
import Card from "@/app/components/profile_card";
import Navbar from "./components/navbar";
import BottomNav from "./components/bottom_bar";
import { Profile } from "@/app/profile";
import { supabase } from "./lib/supabaseClient";

export default function Home() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfiles() {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, user_name, intent, profile_pic");

      if (error) {
        console.error("Error fetching profiles:", error.message);
      } else if (data) {
        const formattedProfiles: Profile[] = data.map((item) => ({
          id: item.id,
          userName: item.user_name,
          intent: item.intent,
          profilePic: item.profile_pic,
        }));
        setProfiles(formattedProfiles);
      }
      setLoading(false);
    }

    fetchProfiles();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const currentProfile = profiles[currentIndex];

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center text-white">
        <p>Loading profiles...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1b1a21] p-4">
      <Navbar />
      {currentProfile ? (
        <Card
          profile={currentProfile}
          onPass={handleNext}
          onConnect={handleNext}
        />
      ) : (
        <div className="mt-40 text-center text-xl font-semibold text-white">
          No more profiles available!
        </div>
      )}
      <BottomNav />
    </main>
  );
}