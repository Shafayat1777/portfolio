"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";
import { links } from "@/lib/data";
export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="relative flex justify-center z-[999] ">
      <motion.div
        className="fixed top-0 flex justify-between links-center w-10/12 xl:w-8/12 py-2 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.03]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="relative text-2xl lg:text-4xl font-bold group"
        >
          Shafayat<span className="text-secondary">.</span>
          <span
            className={cn(
              "absolute left-0 bottom-0 h-0.5 w-0 transition-all duration-300 ease-in-out bg-secondary group-hover:w-full",
              { "w-full": pathname === "/" }
            )}
          ></span>
        </Link>

        <nav className="flex justify-end flex-wrap gap-x-4 gap-y-1 text-lg font-semibold">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "relative overflow-hidden  p-2 hover:text-secondary group",
                { "text-secondary": pathname === link.href }
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute inset-0 bg-primary w-0 transition-all duration-300 ease-in-out group-hover:w-full z-[-1]",
                  { "w-full": pathname === link.href }
                )}
              ></span>
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
