import Image from "next/image";
import TypewriterText from "@/components/TypeWriter";
import { socials } from "@/lib/data";
import Stats from "@/components/Stats";

export default function Main() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-center">
        <h2 className="text-lg">Software Engineer</h2>
        <h1 className="text-3xl md:text-6xl font-bold">
          Hello I'm <br />
          <span className="text-secondary">Shafayat Hossain</span>
        </h1>

        <TypewriterText />

        <div className="flex gap-4 mt-5">
          {socials.map((social, index) => (
            <div className="border border-primary-light rounded-full p-2 cursor-pointer transition-all hover:scale-110">
              <social.icon key={index} size={25} />
            </div>
          ))}
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

      <Stats />
    </div>
  );
}
