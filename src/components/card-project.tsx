"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type projectProps = {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  url: string;
};

export default function CardProject({
  title,
  description,
  tags,
  image,
  url,
}: projectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 sm:mb-12 last:mb-0"
    >
      <section className="bg-white dark:bg-white/5 max-w-[45rem] border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden sm:pr-8 relative sm:h-[22rem] transition-all hover:bg-gray-100 dark:hover:bg-white/10">
        {/* Content Container - Always Left Aligned */}
        <div className="pt-6 pb-8 px-6 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold dark:text-white">{title}</h3>
            {url && (
              <Link
                href={url}
                target="_blank"
                className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-all group/link"
              >
                <ExternalLink
                  size={18}
                  className="text-secondary group-hover/link:scale-110 transition"
                />
              </Link>
            )}
          </div>

          <p className="leading-relaxed text-gray-700 dark:text-white/70 text-sm">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2 mt-6 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-gray-900/[0.05] dark:bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-gray-600 dark:text-white/70 rounded-full border border-black/[0.05] dark:border-white/[0.05]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Container - Always Right Aligned */}
        <Image
          src={image}
          alt={title}
          quality={95}
          className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-xl shadow-2xl
          transition
          translate-y-28
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-20
          group-hover:-rotate-2"
        />
      </section>
    </motion.div>
  );
}