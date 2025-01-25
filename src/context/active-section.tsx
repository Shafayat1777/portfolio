"use client";

import { useState, createContext } from "react";

import type { ActiveSectionContextType } from "@/lib/types";

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: React.PropsWithChildren) {
  const [active, setActive] = useState<string>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{ active, setActive, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}{" "}
    </ActiveSectionContext.Provider>
  );
}
