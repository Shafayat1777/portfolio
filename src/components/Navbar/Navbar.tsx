"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

export default function Nav() {
  const pathname = usePathname();
  const items = [
    { name: "Services", href: "/services" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="flex justify-center">
      <div className="flex justify-between items-center w-10/12 xl:w-8/12 py-5">
        <Link href="/" className="relative text-xl lg:text-2xl group">
          Shafayat<span className="text-secondary">.</span>
          <span
            className={cn(
              "absolute left-0 bottom-0 h-0.5 w-0 bg-secondary transition-all duration-300 ease-in-out group-hover:w-full",
              { "w-full": pathname === "/" }
            )}
          ></span>
        </Link>

        <div className="flex gap-4 text-xs">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "relative overflow-hidden border border-background p-2 hover:text-secondary group",
                { "text-secondary": pathname === item.href }
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute inset-0 bg-primary translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0 z-[-1]",
                  { "translate-x-0": pathname === item.href }
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
