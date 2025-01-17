"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";
import { links } from "@/lib/data";
export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center">
      <div className="flex justify-between links-center w-10/12 xl:w-8/12 py-5">
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

        <div className="flex gap-4 text-lg font-semibold">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "relative overflow-hidden border border-background p-2 hover:text-secondary group",
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
        </div>

        {/* <Menu
          size={40}
          className="border border-background rounded-full p-2 cursor-pointer hover:border-primary "
        /> */}
      </div>
    </nav>
  );
}
