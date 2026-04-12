"use client";

import { socials } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/10 pt-12 pb-8 px-4">
      <div className="max-w-[50rem] mx-auto">
        {/* Top Section: Branding & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold dark:text-white tracking-tighter">
              Shafayat<span className="text-secondary">.</span>
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Available for new opportunities.
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
