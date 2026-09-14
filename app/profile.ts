export interface Profile {
  id: number;
  profilePic: string;
  userName: string;
  intent: string;
}

export const PROFILES: Profile[] = [
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