"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import cn from "@/utils/cn";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/hooks/context";

// Added onClose to the types
export default function SideNavBar({ 
  showSideNav, 
  onClose 
}: { 
  showSideNav: boolean; 
  onClose: () => void; 
}) {
  const { active, setActive, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <AnimatePresence>
      {showSideNav && (
        <>
          {/* --- THE BACKDROP --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Closes when clicking anywhere outside the menu
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[1000]"
          />

          {/* --- THE MENU --- */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-screen w-[75%] sm:w-[350px] bg-white dark:bg-gray-950 z-[1001] shadow-2xl p-10 flex flex-col"
          >
            <nav className="flex flex-col gap-6 mt-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setTimeOfLastClick(Date.now());
                    onClose(); // Close menu after clicking a link
                  }}
                  className={cn(
                    "text-2xl font-semibold transition-colors",
                    active === link.name ? "text-secondary" : "text-gray-500"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}