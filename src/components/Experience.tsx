"use client";
import Button from "@/ui/button";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/hooks";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [active, setActive] = useState<boolean>(true);
  const [active2, setActive2] = useState<boolean>(false);

  return (
    <section ref={ref} id="experience" className="mb-28 sm:mb-40 scroll-mt-28">
      <SectionHeading>Experience</SectionHeading>

      <div className="flex">
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => {
              setActive(true);
              setActive2(false);
            }}
            text="Education"
            icon={<FaGraduationCap />}
            isActive={active}
          />
          <Button
            onClick={() => {
              setActive(false);
              setActive2(true);
            }}
            text="Experiences"
            icon={<MdWork />}
            isActive={active2}
          />
        </div>

        <div className="border w-2/4"></div>
      </div>
    </section>
  );
}
