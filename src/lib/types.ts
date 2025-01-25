import { links } from "@/lib/data";

export type SectionName = {
  sectionName: string;
};

// type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextType = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};