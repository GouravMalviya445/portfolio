import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiDocker, SiGit, SiMongodb, SiPostman, SiPrisma, SiShadcnui } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { ReactNode } from "react";
import Image from "next/image";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { DiCss3 } from "react-icons/di";

export const techIcons = [
  <FaReact key={1}/>,
  <RiNextjsFill key={2} />,
  <BiLogoTypescript key={3} />,
  <SiMongodb key={4} />,
  <RiJavascriptFill key={5} />,
  <BiLogoPostgresql key={6} />,
  <RiTailwindCssFill key={7} />,
  <BsGithub key={8} />,
  <TbBrandFramerMotion key={9} />,
  <SiPostman key={10} />,
  <SiGit key={11} />,
  <SiDocker key={12} />,
  <FaAws key={13} />,
  <SiShadcnui key={14} />,
  <SiExpress key={15} />,
  <FaNodeJs key={16} />
];

type TechStackIcons = {[key:string]: ReactNode}
export const techStackIcons: TechStackIcons = {
  "react": <FaReact className="text-[#61DAFB]"/>,
  "nextjs": <RiNextjsFill className="text-[#ffffff]]"/>,
  "typescript": <BiLogoTypescript className="text-[#007ACC]"/>,
  "mongodb": <SiMongodb className="text-[#4DB33D]"/>,
  "javascript": <RiJavascriptFill className="text-[#F7DF1E]" />,
  "postgresql": <BiLogoPostgresql className="text-[#336791]"/>,
  "tailwindcss": <RiTailwindCssFill className="text-[#38B2AC]"/>,
  "github": <BsGithub className="text-[#413d3d]"/>,
  "framer motion": <TbBrandFramerMotion className="text-[#FF0080]" />,
  "postman": <SiPostman className="text-[#FF6C37]" />,
  "git": <SiGit className="text-[#F05032]" />,
  "docker": <SiDocker className="text-[#2496ED]" />,
  "aws": <FaAws className="text-[#FF9900]" />,
  "shadcn": <SiShadcnui className="text-[#fffff]" />,
  "gsap": <Image src="/gsap.svg" width={30} height={30} alt="gsap" />,
  "express": <SiExpress className="text-[#000] dark:text-white" />,
  "nodejs": <FaNodeJs className="text-[#3C873A]" />,
  "prisma": <SiPrisma className="text-gray-900 dark:text-white" />,
  "html": <IoLogoHtml5 className="text-[#E34F26]" />,
  "css": <DiCss3 className="text-[#1572B6]" />
}