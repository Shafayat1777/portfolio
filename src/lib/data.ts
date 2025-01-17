import { FaLinkedin, FaGithub } from "react-icons/fa";

export const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;

export const socials = [
  { name: "GitHub", href: "https://github.com/Shafayat1777", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shafayat-hossain-84a32b1b8/",
    icon: FaLinkedin,
  },
];
