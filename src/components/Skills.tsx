"use client";
import { skills } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section id="skills" ref={ref} className="mb-28  scroll-mt-28 sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-primary-dark text-secondary-light px-5 py-3"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
