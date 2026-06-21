"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-medium text-gray-950 dark:text-white">
      {children}
    </span>
  );
}

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

      <div className="text-gray-700 dark:text-white/80 space-y-4">
        <p>
          I'm a developer who actually enjoys building things for the web —{" "}
          <Highlight>TypeScript</Highlight>, <Highlight>React</Highlight>,{" "}
          <Highlight>Next.js</Highlight>, <Highlight>Node.js</Highlight>, the
          whole gang. I like making apps that feel fast and just work, the kind
          where nothing gets in your way.
        </p>
        <p>
          I also dabbled in <Highlight>Machine Learning</Highlight> for a while
          — specifically using AI to help farmers spot unhealthy crops early.
          Cool stuff, but these days it's more of a "fun fact about me" than my
          main thing, since I'm mostly heads-down on my dev career now.
        </p>
        <p>
          Right now I've got a desktop app idea that's been living in my head
          for too long, so I'm finally building it instead of just talking about
          it at 2am. Always learning something new, always one tab away from a
          random side project.
        </p>
      </div>
    </motion.section>
  );
}
