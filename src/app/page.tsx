import About from "@/components/About";
// import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Publications />
      {/* <Contact /> */}
    </div>
  );
}
