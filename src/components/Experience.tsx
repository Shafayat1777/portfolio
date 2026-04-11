"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/hooks";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import ExperienceCard from "./experience-card";
import { educations, experiences } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [tab, setTab] = useState<"edu" | "exp">("edu");

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 max-w-[64rem] mx-auto px-4">
      <SectionHeading>Experience</SectionHeading>

      <div className="flex flex-col gap-12">
        {/* Modern Tab Switcher */}
        <div className="flex justify-center gap-4">
          {[
            { id: "edu", text: "Education", icon: <FaGraduationCap /> },
            { id: "exp", text: "Work History", icon: <MdWork /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id as "edu" | "exp")}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all outline-none
                ${tab === item.id ? "text-white" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {item.icon} {item.text}
              </span>
              {tab === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-secondary rounded-full shadow-md"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area with Animation */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {(tab === "edu" ? educations : experiences).map((item, index) => (
                <ExperienceCard {...item} key={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}