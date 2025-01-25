"use client";

import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import CardProject from "./card-project";
import { useSectionInView } from "@/hooks/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", .5);
  return (
    <section ref={ref} className="mb-28 sm:mb-40 scroll-mt-28" id="projects">
      <SectionHeading>Projects</SectionHeading>

      <div className="flex flex-col items-center gap-4 sm:gap-8">
        {projects.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
