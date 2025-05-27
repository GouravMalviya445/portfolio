import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { ReactNode } from "react";


export const techIcons = [
  <FaReact />,
  <RiNextjsFill />,
  <BiLogoTypescript />,
  <SiMongodb />,
  <RiJavascriptFill />,
  <BiLogoPostgresql />,
  <RiTailwindCssFill />,
  <BsGithub />,
  <TbBrandFramerMotion />,
  <SiPostman />
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
  "github": <BsGithub className="text-[#181717]"/>,
  "framer motion": <TbBrandFramerMotion className="text-[#FF0080]" />,
  "postman": <SiPostman className="text-[#FF6C37]" />,
}