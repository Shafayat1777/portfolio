"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] mx-auto text-center leading-8 sm:mb-40 scroll-mt-28 relative"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 125 }}
    >
      <SectionHeading>About Me</SectionHeading>

      {/* Decorative background glow */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="text-gray-700 dark:text-white/80 space-y-6">
        <p className="text-lg leading-relaxed">
          I&apos;m a passionate developer who finds joy in
          <span className="font-bold text-secondary">
            {" "}
            building seamless web experiences
          </span>
          . My toolkit includes
          <span className="font-medium dark:text-white">
            {" "}
            JavaScript, React, Next.js, and Node.js
          </span>
          , where I specialize in creating high-performance applications that
          feel intuitive.
        </p>

        <p className="text-lg leading-relaxed">
          Beyond the standard web stack, I have a deep curiosity for
          <span className="italic underline decoration-secondary/50">
            {" "}
            Machine Learning
          </span>
          . I&apos;m particularly focused on
          <span className="font-semibold">
            {" "}
            image processing in agriculture
          </span>
          —exploring how AI can revolutionize precision farming and crop health
          monitoring to create a more sustainable future.
        </p>

        <p className="text-lg leading-relaxed">
          Whether I&apos;m optimizing a backend system or training a model, I
          thrive on the challenge of{" "}
          <span className="text-secondary font-medium">
            turning complex problems into elegant code
          </span>
          . I&apos;m always looking for the next innovation at the intersection
          of tech and the real world.
        </p>
      </div>
    </motion.section>
  );
}
