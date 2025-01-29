"use client";

import SectionHeading from "./section-heading";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 sm:mb-40 scroll-mt-28 flex flex-col items-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <div className="w-[min(100%,38rem)]">
        <SectionHeading>Contact</SectionHeading>
        <p className="text-white text-center">
          Please contact me directly at{" "}
          <a
            href="mailto:shafayat1777@gmail.com"
            className="underline text-primary-light"
          >
            shafayat1777@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form action="" className="flex flex-col gap-3 mt-8">
          <input
            placeholder="Your email"
            type="text"
            className="h-14 p-4 border border-secondary-dark bg-tertiary-dark"
          />
          <textarea
            name=""
            id=""
            placeholder="Your message..."
            className="border border-secondary-dark bg-tertiary-dark h-52 p-4"
          />
          <button className="group bg-secondary-dark text-white flex gap-2 px-3 py-3 items-center justify-center outline-none transition-all hover:bg-secondary-dark/70 focus:scale-110 hover:scale-110">
            Submit{" "}
            <IoIosSend
              size={20}
              className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </form>
      </div>
    </motion.section>
  );
}
