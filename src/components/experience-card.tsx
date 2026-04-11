import type { ExperienceCardProps } from "@/lib/types";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

export default function ExperienceCard({
  title,
  company,
  website,
  from,
  to,
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-white/5 border border-black/[0.08] dark:border-white/[0.1] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
    >
      <div>
        <h3 className="text-lg font-bold mb-1 text-gray-800 dark:text-gray-100 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <span className="inline-block text-[10px] uppercase tracking-wider font-bold mb-3 px-3 py-1 bg-secondary/10 text-secondary rounded-full">
          {from} — {to}
        </span>
      </div>
      <Link
        href={website || ""}
        target="_blank"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-all"
      >
        <GoDotFill className="text-secondary opacity-50 group-hover:opacity-100" />
        <span className="underline-offset-4 hover:underline">{company}</span>
      </Link>
    </motion.div>
  );
}
