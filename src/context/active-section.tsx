"use client";

import { useState, createContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextType = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: React.PropsWithChildren) {
  const [active, setActive] = useState<string>("Home");
  return (
    <ActiveSectionContext.Provider value={{ active, setActive }}>
      {children}{" "}
    </ActiveSectionContext.Provider>
  );
}
