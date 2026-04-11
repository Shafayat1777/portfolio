"use client";

import { skills } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20, // Reduced from 100 for a more subtle "pop"
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Use delay instead of multiplying duration
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 mx-auto"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center gap-3 shadow-sm transition-all cursor-pointer"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{
              scale: 1.05,
              borderColor: "var(--secondary)", // assuming you have this CSS variable
              boxShadow: "0 0 15px rgba(your-secondary-rgb, 0.3)",
            }}
            viewport={{ once: true }}
            custom={index}
          >
            {/* If skill.icon is a component, it renders here */}
            <span className="text-2xl text-secondary">{skill.icon}</span>
            <span className="font-medium select-none">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
