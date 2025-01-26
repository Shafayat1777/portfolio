import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import project_1 from "../../public/project-1.png";
import project_2 from "../../public/project-2.png";

export const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Shafayat1777",
    icon: FaGithubSquare,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shafayat-hossain-84a32b1b8/",
    icon: FaLinkedin,
  },
];

export const projects = [
  {
    title: "Skill Up",
    description:
      "Skill Up aims to revolutionize the way we learn by providing a dynamic and user-centric online platform.",
    tags: [
      "React.Js",
      "Node.Js",
      "Express.Js",
      "Strapi",
      "TailwindCSS",
      "MySQL",
    ],
    image: project_1,
  },
  {
    title: "Alumnet",
    description:
      "Connect with East West University alumni worldwide. Discover career opportunities, networking events, and mentorship programs.",
    tags: [
      "Next.Js",
      "Node.Js",
      "Express.Js",
      "Strapi",
      "TailwindCSS",
      "MySQL",
    ],
    image: project_2,
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.Js",
  "Node.Js",
  "Express.Js",
  "Strapi",
  "TailwindCSS",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Framer Motion",
  "Python",
  "C",
  "C++",
  "Java",
  "SQL",
  "Docker",
  "Kubernetes",
  "AWS",
];

export const experiences = [
  {
    title: "Graduate Teaching Assistant",
    company: "East West Unjversity",
    website: "https://www.ewubd.edu",
    from: "September 2023",
    to: "June 2024",
  },
  {
    title: "Web Developer",
    company: "Getsview",
    website: "https://www.getsview.com",
    from: "February 2022",
    to: "January 2023",
  },
  {
    title: "Software Engineer [Full-Stack]",
    company: "SynapTech",
    website: "",
    from: "June 2024",
    to: "Currently Working",
  },
];
