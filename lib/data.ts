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
import testimonialMichael from "@/public/testimonial-michael.png";
import testimonialMariglen from "@/public/testimonial-mariglen.png";
import testimonialMohammad from "@/public/testimonial-mohammad.jpg";
import testimonialJimmy from "@/public/testimonial-jimmy.png";

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
    name: "Testimonial",
    hash: "#testimonial",
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
    stacks: [
      "OOP",
      "Databases",
      "DSA",
      "OS",
      "Computer Networks",
      "Machine Learning",
      "Data Mining",
      "Image Processing",
    ],
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
    location: "BeaconIT",
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

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
 
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
 
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

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

export const testimonialsData = [
  {
    title: "Michael Marina",
    description:
      "Hamid is a great developer and our team thoroughly enjoyed working with him. He is diligent, dependable, and a good communicator.",
    link: "https://www.upwork.com/freelancers/~01a26ffca66acc6668",
    image: testimonialMichael,
    company:"Ayzenberg Group"
  },
  {
    title: "Mariglen Myzyri",
    description:
      "Hamidul is very friendly, co-operative and skilled. Honestly, it was smooth and convenient to work with him. He helped us in creating very good solutions that have solve diffrent problems to our company. Thank you Hamidul and we are sure that anyone who engages him will benefit from his skill, friendliness and creativity.",
    link: "https://www.upwork.com/freelancers/~01a26ffca66acc6668",
    image: testimonialMariglen,
    company:"Safary Tech"
  },
  {
    title: "Mohammad",
    description:
      "I had the pleasure of working with Hamidul Islam on a project recently and I couldn't be more impressed with his problem-solving abilities and development skills. From the start, he demonstrated a deep understanding of the project requirements and was able to quickly come up with creative solutions to some of our most challenging problems.Overall, I would highly recommend Hamidul Islam to anyone looking for a talented and reliable developer. He was an absolute pleasure to work with and I look forward to collaborating with him again in the future.",
    link: "https://www.upwork.com/freelancers/~01a26ffca66acc6668",
    image: testimonialMohammad,
    company:"Hire Up"
  },
  {
    title: "Jimmy Hopkins",
    description:
      "This freelancer was great to work with. I more than recommend their services. He was so professional and extremely skilled.",
    link: "https://www.upwork.com/freelancers/~01a26ffca66acc6668",
    image: testimonialJimmy,
    company:"JimmyHop"
  },
];
