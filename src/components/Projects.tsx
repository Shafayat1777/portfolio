import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import CardProject from "./card-project";

export default function Projects() {
  return (
    <section className="mb-28 sm:mb-40">
      <SectionHeading>Projects</SectionHeading>

      <div className="flex flex-col items-center gap-4 sm:gap-8">
        {projects.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
