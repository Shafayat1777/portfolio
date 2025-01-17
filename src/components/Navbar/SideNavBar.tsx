import cn from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/lib/data";

export default function SideNavBar({
  className,
  showSideNav,
}: {
  className?: string;
  showSideNav: boolean;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "absolute right-[-100%] top-[5rem] flex flex-col gap-x-2 gap-y-1 text-lg font-semibold h-screen bg-primary-dark transition-all ease-out duration-400",
        className,
        { "right-0": showSideNav }
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
    </nav>
  );
}
