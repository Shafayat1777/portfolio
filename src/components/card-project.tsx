"use client";
import Image, { StaticImageData } from "next/image";
import React, { use, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { div } from "framer-motion/client";

type projectProps = {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
};

export default function CardProject({
  title,
  description,
  tags,
  image,
}: projectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      style={{
        scale: scale,
        opacity: scrollYProgress,
      }}
      className="group"
    >
      <section
        ref={ref}
        className="bg-secondary-dark max-w-[42rem] text-slate-100 relative sm:overflow-hidden sm:h-[20rem]"
      >
        <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[58%] flex flex-col h-full sm:group-even:ml-[16rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-sm sm:text">{description}</p>

          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-tertiary-dark px-3 py-1 uppercase tracking-wider rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={image}
          alt={title}
          className="sm:absolute top-12 -right-96 w-[40rem] rounded-t-lg shadow-2xl group-even:-left-96 transition group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
          quality={95}
        />
      </section>
    </motion.div>
  );
}
