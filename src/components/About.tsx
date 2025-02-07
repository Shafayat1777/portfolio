"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-40 scroll-mt-28"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring" }}
    >
      <SectionHeading>About</SectionHeading>

      <p className="text-slate-300 text sm:text-lg font-semibold leading-8">
        {" "}
        I'm a passionate and dedicated developer who loves problem-solving and
        building seamless web experiences. With expertise in JavaScript, React,
        Next.js, Node.js, and Express, I specialize in creating dynamic and
        high-performance applications. Beyond web development, I'm deeply
        interested in machine learning, particularly image processing
        applications in agriculture. I explore how AI can enhance precision
        farming, crop health monitoring, and automation in the agricultural
        sector. I thrive on challenges and continuously seek opportunities to
        expand my skills. Whether it’s developing intuitive user interfaces,
        optimizing backend systems, or leveraging AI for impactful solutions,
        I’m always eager to innovate.
      </p>
    </motion.section>
  );
}
