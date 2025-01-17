"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";
import { links } from "@/lib/data";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import SideNavBar from "./SideNavBar";

export default function Nav() {
  const pathname = usePathname();
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  return (
    <header className="relative z-[999] ">
      <motion.div
        className="fixed flex justify-center items-center w-full h-[5rem] top-0 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.03]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="w-10/12 xl:w-8/12 flex justify-between items-center py-4">
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
          <nav
            className={cn(
              " justify-end flex-wrap gap-x-2 gap-y-1 text-lg font-semibold hidden md:flex"
            )}
          >
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
          </nav>{" "}
          <IoMdMenu
            onClick={() => setShowSideNav(!showSideNav)}
            className="md:hidden cursor-pointer hover:bg-primary-light/20 rounded-md"
            size={30}
          />
          <SideNavBar showSideNav={showSideNav} />
        </div>
      </motion.div>
    </header>
  );
}
