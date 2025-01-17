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
    title: "Project 1",
    description: "Description of project 1",
    tags: ["tag1", "tag2", "tag3"],
    image: project_1,
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    tags: ["tag1", "tag2", "tag3"],
    image: project_2,
  },
];
