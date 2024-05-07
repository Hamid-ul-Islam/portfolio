import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiGatsby } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import { TbBrandNextjs } from "react-icons/tb";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import riftRally from "@/public/Hot-Wheels-Rift-Rally.png";
import socialIndex from "@/public/Social-Index-site_signup.jpg";
import dealAi from "@/public/deal-ai.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor in Computer science and engineering",
    location: "Chittagong, Bangladesh",
    description:
      "I graduated from BGC Trust University Bangladesh, Bachelor in Computer science and engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },

  {
    title: "Software developer (remote)",
    location: "Ayzenberg",
    description: "I worked as a Software developer for 1 year for this agency.",
    icon: React.createElement(SiGatsby),
    stacks: [
      "Gatsby.Js",
      "Contentful",
      "GraphQL",
      "Apollo",
      "TailwindCSS",
      "Styled Component",
      "AWS",
      "S3",
      "SocketIo",
    ],
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer (Remote)",
    location: "Deal.AI",
    description:
      "Worked as a full stack developer. I was responsible for building innovating AI application and Automation",
    icon: React.createElement(TbBrandNextjs),
    stacks: [
      "Next.Js",
      "Typescript",
      "MongoDB",
      "Redux",
      "OpenAI",
      "TailwindCSS",
      "Node.Js",
      "AWS",
      "S3",
      "SocketIo",
    ],
    date: "6 Months",
  },
  {
    title: "Full Stack Web Developer Trainer",
    location: "Deal.AI",
    description:
      "Empowered aspiring developers as a Full Stack Web Developer Trainer at BeaconIT.Designed and delivered comprehensive training modules on full stack web development, equipping students with hands-on experience in creating interactive and responsive web applications",
    icon: React.createElement(LiaChalkboardTeacherSolid),
    stacks: [
      "ReactJs",
      "TailwindCss",
      "Api",
      "Testing",
      "Freelancing",
      "Marketplace",
    ],
    date: "2021 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Rift Rally",
    description:
      "I worked as a full-stack developer on this project. Smart RC Car + Video games.",
    tags: ["Gatsby.Js", "Contentful", "GraphQL", "Tailwind", "AWS"],
    imageUrl: riftRally,
  },
  {
    title: "Social Index",
    description:
      "Social Index helps you understand the ROI of your social media, influencer and content marketing campaigns.",
    tags: [
      "Gatsby.Js",
      "Contentful",
      "GraphQL",
      "Styled component",
      "PostgreSql",
    ],
    imageUrl: socialIndex,
  },
  {
    title: "Deal.AI",
    description:
      "Intellectual Property Juris Doctorate, award-winning marketer and designer, experience scaling multiple startups through technology and brand awareness.",
    tags: [
      "Next.js",
      "Typescript",
      "Node.js",
      "Express.js",
      "Microservices",
      "MVC",
      "Redux",
      "Tailwind",
      "Shadcn UI",
    ],
    imageUrl: dealAi,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Angular.js",
  "Gatsby.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
