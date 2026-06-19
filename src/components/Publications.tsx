"use client";

import { publications } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Publications() {
  const { ref } = useSectionInView("Publications", 0.3);

  return (
    <section
      id="publications"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 mx-auto"
    >
      <div className="mt-8 xs:mt-0">
        <SectionHeading>Publications</SectionHeading>
      </div>

      <ul className="flex flex-col gap-4">
        {publications.map((pub, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * index, type: "spring", stiffness: 100, damping: 12 }}
            className="bg-white dark:bg-white/5 border border-black/[0.08] dark:border-white/10 rounded-2xl px-6 py-5 shadow-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-medium text-gray-900 dark:text-white/90 leading-snug">
                {pub.title}
              </p>
              {pub.link && (
                <Link
                  href={pub.link}
                  target="_blank"
                  className="shrink-0 p-1.5 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-all"
                >
                  <ExternalLink size={15} className="text-secondary" />
                </Link>
              )}
            </div>

            <div className="flex items-center gap-3 mt-2.5">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium border border-secondary/20">
                {pub.type}
              </span>
              <span className="text-sm text-gray-500 dark:text-white/50">
                {pub.journal}
              </span>
              <span className="text-sm text-gray-400 dark:text-white/40">
                {pub.year}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
