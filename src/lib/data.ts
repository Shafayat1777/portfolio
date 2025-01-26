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
    from: "Sep 2023",
    to: "Jun 2024",
  },
  {
    title: "Web Developer",
    company: "Getsview",
    website: "https://www.getsview.com",
    from: "Feb 2022",
    to: "Jan 2023",
  },
  {
    title: "Software Engineer [Full-Stack]",
    company: "SynapTech",
    website: "",
    from: "Jun 2024",
    to: "Currently Working",
  },
];

export const educations = [
  {
    title: "SSC",
    company: "Motijheel Govt. Boy's High School",
    website: "https://www.ewubd.edu",
    from: "2015",
    to: "2016",
  },
  // {
  //   title: "HSC",
  //   company: "Motijheel Govt. Boy's High School",
  //   website: "https://www.getsview.com",
  //   from: "2016",
  //   to: "2018",
  // },
  {
    title: "Bsc. Computer Science & Engineering",
    company: "East West University",
    website: "https://www.ewubd.edu",
    from: "Sep 2019",
    to: "Sep 2023",
  },
];
