import React from "react";
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithubSquare,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiHono,
  SiShadcnui,
} from "react-icons/si";
import project_1 from "../../public/project-1.png";
import project_2 from "../../public/project-2.png";

export const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Publications", href: "#publications" },
  // { name: "Contact", href: "#contact" },
] as const;

export const socials = [
  {
    name: "Mail",
    href: "mailto:shafayat1777@gmail.com",
    icon: React.createElement(FaEnvelope),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shafayat-hossain-84a32b1b8/",
    icon: React.createElement(FaLinkedin),
  },
  {
    name: "GitHub",
    href: "https://github.com/Shafayat1777",
    icon: React.createElement(FaGithubSquare),
  },
];

export const projects = [
  {
    title: "Skill Up",
    url: "",
    description:
      "SkillUp is a dynamic online platform where users can enroll in courses as students or create their own as instructors. With interactive lessons and progress tracking, it enhances learning and knowledge sharing",
    tags: ["React.Js", "Node.Js", "Express.Js", "TailwindCSS", "MySQL"],
    image: project_1,
  },
  {
    title: "Alumnet",
    url: "https://alumniportal.ewubd.edu",
    description:
      "Alumnet is an alumni network for EWU, offering a job portal, alumni directory, global map, portfolio creator, events, blogs, and a gallery to keep alumni connected and engaged",
    tags: [
      "Next.Js",
      "Node.Js",
      "Express.Js",
      "Strapi",
      "TailwindCSS",
      "MySQL",
      "Leaflet",
    ],
    image: project_2,
  },
];

export const skills = [
  { name: "HTML", icon: React.createElement(FaHtml5) },
  { name: "CSS", icon: React.createElement(FaCss3Alt) },
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "React", icon: React.createElement(FaReact) },
  { name: "Next.Js", icon: React.createElement(SiNextdotjs) },
  { name: "Node.Js", icon: React.createElement(FaNodeJs) },
  { name: "Express.Js", icon: React.createElement(SiExpress) },
  { name: "Hono.Js", icon: React.createElement(SiHono) },
  { name: "TailwindCSS", icon: React.createElement(SiTailwindcss) },
  { name: "ShadcnUI", icon: React.createElement(SiShadcnui) },
  { name: "MySQL", icon: React.createElement(SiMysql) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "Git", icon: React.createElement(FaGitAlt) },
  { name: "GitHub", icon: React.createElement(FaGithubSquare) },
  { name: "Python", icon: React.createElement(FaPython) },
  { name: "Docker", icon: React.createElement(FaDocker) },
];

export const experiences = [
  {
    title: "Graduate Teaching Assistant",
    company: "East West University",
    website: "https://www.ewubd.edu",
    from: "Sep 2023",
    to: "Jun 2024",
  },
  {
    title: "Web Developer",
    company: "Getsview",
    website: "https://www.getsview.com",
    from: "Jul 2023",
    to: "Jun 2024",
  },
  {
    title: "Software Engineer [Full-Stack]",
    company: "SynapTech",
    website: "",
    from: "Jul 2024",
    to: "Present",
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

export const publications = [
  {
    title:
      "Comprehensive dataset of annotated rice panicle image from Bangladesh",
    journal: "DataInBrief",
    type: "Journal",
    year: "2023",
    link: "https://www.sciencedirect.com/science/article/pii/S2352340923008399",
  },
  {
    title:
      "A Deep Reinforcement Learning Framework for Reducing Energy Consumption of Server CoolingSystem",
    journal: "ICO-2023",
    type: "Publication",
    year: "2023",
    link: "link.springer.com/chapter/10.1007/978-3-031-50327-6_4",
  },
  {
    title:
      "DeepCONVSVM: A Comprehensive Model for Detecting Disease in Mango Leaves",
    journal: "IBDAP-2023",
    type: "Publication",
    year: "2023",
    link: "https://ieeexplore.ieee.org/abstract/document/10272007",
  },
  {
    title:
      "Image Processing and Deep Learning Based Road Object Detection System for Safe Transportation",
    journal: "ICCCNT-2024",
    type: "Publication",
    year: "2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10726014",
  },
  {
    title: "Drone-based dataset of annotated sunflower images from Bangladesh",
    journal: "DataInBrief",
    type: "Journal",
    year: "2024",
    link: "https://www.sciencedirect.com/science/article/pii/S2352340925001490",
  },
];
