"use client";
import { useActiveSectionContext } from "@/hooks/context";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function About() {
  const { setActive } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: 0.75});

  useEffect(() => {
    if (inView) setActive("About");
  }, [inView, setActive]);

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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        eveniet excepturi repudiandae, minus sint neque harum fugit tenetur.
        Deserunt facilis tempore ipsum dignissimos provident delectus est
        eveniet reiciendis, temporibus repellendus.
      </p>
    </motion.section>
  );
}
