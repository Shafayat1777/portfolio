import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import TypewriterText from "@/components/TypeWriter";

export default function Home() {
  return (
    <div className=" grid md:grid-cols-2 gap-4 mt-20">
      <div className="flex flex-col justify-center">
        <h2 className="text-xs">Software Engineer</h2>
        <h1 className="text-3xl">
          Hello I'm <br />
          <span className="text-secondary">Shafayat Hossain</span>
        </h1>
        
        <TypewriterText />

        <div className="flex gap-4 mt-5">
          <Linkedin
            fill="currentColor"
            size={35}
            className="border border-primary-light rounded-full p-2"
          />
          <Github
            fill="currentColor"
            size={35}
            className="border border-primary-light rounded-full p-2"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src="/profile.jpg"
          alt="Shafayat"
          width={100}
          height={100}
          className="rounded-full object-cover w-56 h-56 md:w-80 md:h-80 xl:w-96 xl:h-96"
          unoptimized
        />
      </div>
    </div>
  );
}
