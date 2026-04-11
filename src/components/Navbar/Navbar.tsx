"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import cn from "@/utils/cn";
import { links } from "@/lib/data";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import SideNavBar from "./SideNavBar";
import { useActiveSectionContext } from "@/hooks/context";

export default function Nav() {
  const { active, setActive, setTimeOfLastClick } = useActiveSectionContext();
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  return (
    <header className="z-[999] relative">
      {/* Desktop Navigation */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full -translate-x-1/2 border border-white border-opacity-40 bg-white/70 shadow-lg shadow-black/[0.03] backdrop-blur-[12px] sm:top-6 sm:h-[3.2rem] sm:w-auto sm:rounded-full sm:px-2 dark:bg-gray-950/75 dark:border-black/40"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <nav className="flex items-center justify-between h-full px-6 sm:px-0">
          {/* Logo - Elegant & Simple */}
          <Link
            href="#home"
            className="text-xl font-bold tracking-tighter mr-8 hidden sm:block hover:opacity-70 transition"
            onClick={() => {
              setActive("Home");
              setTimeOfLastClick(Date.now());
            }}
          >
            Shafayat<span className="text-secondary">.</span>
          </Link>

          {/* Links Container */}
          <ul className="hidden sm:flex flex-wrap items-center justify-center gap-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-1">
            {links.map((link) => (
              <li
                className="h-3/4 flex items-center justify-center relative"
                key={link.href}
              >
                <Link
                  className={cn(
                    "flex w-full items-center justify-center px-4 py-2 transition-colors hover:text-gray-950 dark:hover:text-gray-200",
                    active === link.name && "text-gray-950 dark:text-white",
                  )}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {/* The "Magic" Background Slider */}
                  {link.name === active && (
                    <motion.span
                      className="absolute inset-0 bg-gray-100 rounded-full -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden flex w-full justify-between items-center">
            <span className="font-bold text-lg">Shafayat.</span>
            <button
              onClick={() => setShowSideNav(!showSideNav)}
              className="p-2 hover:bg-black/5 rounded-lg transition"
            >
              {showSideNav ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
            </button>
          </div>
        </nav>
      </motion.div>

      <SideNavBar
        showSideNav={showSideNav}
        onClose={() => setShowSideNav(false)}
      />
    </header>
  );
}
