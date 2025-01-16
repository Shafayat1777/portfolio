import Link from "next/link";
import { Menu } from "lucide-react";

export default function Nav() {
  const items = [
    { name: "Services", href: "/services" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="flex justify-center">
      <div className="flex justify-between items-center w-10/12 xl:w-8/12 py-5">
        <Link href="/" className="relative text-xl lg:text-2xl group">
          Shafayat<span className="text-secondary">.</span>
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-secondary transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        <div className="flex gap-4 text-xs">
          {items.map((item) => (
            <Link
              href={item.href}
              className="relative overflow-hidden border border-background hover:border-primary p-2 hover:text-secondary group"
            >
              {item.name}
              <span className="absolute inset-0 bg-primary translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0 z-[-1]"></span>
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
