"use client";
import Image from "next/image";
import TypewriterText from "@/components/TypeWriter";
import { socials } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/hooks/hooks";

export default function Main() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} className="mb-20 scroll-mt-[100rem]" id="home">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.5 }}
        >
          <h2 className="text-lg">Software Engineer</h2>
          <h1 className="text-3xl md:text-6xl font-bold">
            Hello I'm <br />
            <span className="text-secondary">Shafayat Hossain</span>
          </h1>

          <TypewriterText />
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.5 }}
        >
          <Image
            src="/profile.jpg"
            alt="Shafayat"
            width={100}
            height={100}
            quality={95}
            className="rounded-full object-cover w-56 h-56 md:w-60 md:h-60 xl:w-72 xl:h-72"
            unoptimized
          />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 1 }}
      >
        <Link
          href="#contact"
          className="flex items-center w-full sm:w-fit text-lg px-7 py-3 text-white bg-secondary-dark gap-2 transition-all outline-none focus:scale-110 active:scale-105 hover:scale-110 group"
        >
          Contact me here
          <BsArrowRight
            size={20}
            className="group-hover:translate-x-3 transition"
          />
        </Link>

        <a
          className="flex items-center w-full sm:w-fit text-lg px-7 py-3 border border-primary-light gap-2 transition-all outline-none focus:scale-110 active:scale-105 hover:scale-110 cursor-pointer"
          href="/My_CV.pdf"
          download
        >
          Download CV <HiDownload size={20} />
        </a>

        <div className="flex gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              className="border border-primary-light rounded-full p-4 flex items-center transition-all outline-none focus:scale-110 active:scale-105 hover:scale-110 text-[1.5rem] cursor-pointer"
              href={social.href}
              target="_blank"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
