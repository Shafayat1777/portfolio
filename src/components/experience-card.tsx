import type { ExperienceCardProps } from "@/lib/types";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

export default function ExperienceCard({
  title,
  company,
  website,
  from,
  to,
}: ExperienceCardProps) {
  return (
    <div className="bg-secondary-dark p-5 text-white">
      <p className="text-sm mb-2 bg-tertiary-dark rounded-full px-3 w-fit">
        {from} - {to}
      </p>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <Link
        className="text mb-4 hover:underline hover:text-secondary flex gap-2 items-center
      "
        href={website}
      >
        <GoDotFill className="text-secondary"/> {company}
      </Link>
    </div>
  );
}
