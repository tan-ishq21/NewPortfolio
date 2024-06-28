// Disable the prettier rule for this line
// eslint-disable-next-line prettier/prettier

import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "RecruitHive",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "ShadCN UI", "SupaBase", "Vercel"],
    image: {
      LIGHT: "/images/projects/RecruitHive1.webp",
      DARK: "/images/projects/RecruitHive1.webp",
    },
  },
  {
    index: 1,
    title: "Food Wheels",
    href: "/projects",
    tags: [
      "Reactjs",
      "BootStrap",
      "Css",
      "MERN",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/FoodApp1.webp",
      DARK: "/images/projects/FoodApp1.webp",
    },
  },
  {
    index: 2,
    title: "Portfolio",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Vercel", "Framer-Motion", "TypeScript"],
    image: {
      LIGHT: "/images/projects/Portfolio1.webp",
      DARK: "/images/projects/Portfolio2.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "RecruitHive",
    favicon: "/images/projects/logos/recruithive.ico",
    imageUrl: [
      "/images/projects/RecruitHive1.webp",
      "/images/projects/RecruitHive2.webp",
      "/images/projects/RecruitHive3.webp",
    ],
    description:
      "A Next.js web application with distinct views for candidates and recruiters. Candidates can upload their CV and only authenticated Recruiters can see Candidate's Data who are applying for jobs. ",
    sourceCodeHref: "https://github.com/tan-ishq21/hirevolve",
    liveWebsiteHref: "https://hirevolve-xq8x.vercel.app/",
  },
  {
    name: "Food Wheels",
    favicon: "/images/projects/logos/foodapp.ico",
    imageUrl: [
      "/images/projects/FoodApp1.webp",
      "/images/projects/FoodApp2.webp",
    ],
    description:
      "A Food Ordering Website where one can add Food Items in the cart and Checkout. Built Using MERN Stack and connected with stripe's Payment gateway. Deplyed on Vercel. ",
    sourceCodeHref: "https://github.com/tan-ishq21/foodapp",
    liveWebsiteHref: "https://foodapp-frontend-nine.vercel.app/",
  },
  {
    name: "Portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/Portfolio1.webp",
      "/images/projects/Portfolio2.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/tan-ishq21/NewPortfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  
];
