"use client";

import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import CardProject from "./card-project";
import { useActiveSectionContext } from "@/hooks/context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Projects() {
  const { setActive } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActive("Projects");
  }, [inView, setActive]);

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
