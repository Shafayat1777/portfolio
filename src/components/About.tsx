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
        I am a passionate and dedicated individual with a love for coding,
        problem-solving, and crafting innovative machine learning models.
        Proficient in the MERN (MongoDB, Express.js, React, Node.js) stack, I
        also have a keen interest in web development. Over the past two years, I
        have gained valuable experience in web development, further enhancing my
        skills in creating dynamic and responsive web applications. In addition
        to my technical skills, I have contributed significantly to the field of
        machine learning, deep learning, and image processing through my
        publications. These publications reflect my commitment to advancing
        knowledge and innovation in these domains. Currently, I am leveraging my
        expertise as a graduate teaching assistant, where I play a pivotal role
        in teaching computer programming to students. Additionally, I actively
        assist students and collaborate with teachers on research papers and
        publications. I am proficient in Python, JavaScript, and C programming,
        providing a versatile skill set for a range of projects. I bring
        valuable experience working collaboratively in a team environment. My
        flexibility and ability to adapt seamlessly to changing environments and
        workflows set me apart. I thrive in dynamic settings and find joy in
        overcoming challenges. With a strong foundation in coding, a curiosity
        that drives continuous learning, a track record of impactful
        publications, hands-on experience in web development, and mentoring
        abilities as a graduate teaching assistant, I offer a unique combination
        of technical expertise and adaptability that can positively contribute
        to any project or team.
      </p>
    </motion.section>
  );
}
