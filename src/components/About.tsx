"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring" }}
    >
      <SectionHeading>About</SectionHeading>

      <p className="text-slate-300 text-lg font-semibold  leading-8">
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        eveniet excepturi repudiandae, minus sint neque harum fugit tenetur.
        Deserunt facilis tempore ipsum dignissimos provident delectus est
        eveniet reiciendis, temporibus repellendus.
      </p>
    </motion.section>
  );
}
