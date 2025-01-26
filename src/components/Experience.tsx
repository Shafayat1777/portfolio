"use client";
import Button from "@/ui/button";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/hooks";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import ExperienceCard from "./experience-card";
import { educations, experiences } from "@/lib/data";
import { motion } from "framer-motion";

const ButtonFadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const ExpFadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [active, setActive] = useState<boolean>(true);
  const [active2, setActive2] = useState<boolean>(false);

  return (
    <section ref={ref} id="experience" className="mb-28 sm:mb-40 scroll-mt-28">
      <SectionHeading>Experience</SectionHeading>

      <div className="flex gap-6">
        <motion.div
          className="flex flex-col gap-4"
          variants={ButtonFadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Button
            onClick={() => {
              setActive(true);
              setActive2(false);
            }}
            text="Education"
            icon={<FaGraduationCap />}
            isActive={active}
          />
          <Button
            onClick={() => {
              setActive(false);
              setActive2(true);
            }}
            text="Experiences"
            icon={<MdWork />}
            isActive={active2}
          />
        </motion.div>

        <motion.div
          variants={ExpFadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {active && (
            <div className="w-full grid grid-cols-2 gap-6">
              {educations.map((education, index) => (
                <ExperienceCard {...education} key={index} />
              ))}
            </div>
          )}
          {active2 && (
            <div className="w-full grid grid-cols-2 gap-6">
              {experiences.map((experience, index) => (
                <ExperienceCard {...experience} key={index} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
