import { techStackIcons } from "@/components/icons"
import { ReactNode } from "react"

type TSkills = {
  name: string;
  tech?: string;
  icon: ReactNode;
  confidence: string;
}

export const skills: TSkills[] = [
  {
    name: "HTML",
    icon: techStackIcons["html"],
    confidence: "90%"
  },
  {
    name: "CSS",
    icon: techStackIcons["css"],
    confidence: "90%"
  },
  {
    name: "JavaScript",
    icon: techStackIcons["javascript"],
    confidence: "90%"
  },
  {
    name: "TypeScript",
    icon: techStackIcons["typescript"],
    confidence: "90%"
  },
  {
    name: "React",
    icon: techStackIcons["react"],
    confidence: "90%"
  },
  {
    name: "NextJS",
    icon: techStackIcons["nextjs"],
    confidence: "70%"
  },
  {
    name: "Tailwind CSS",
    icon: techStackIcons["tailwindcss"],
    confidence: "90%"
  },
  {
    name: "Framer Motion",
    icon: techStackIcons["framer motion"],
    confidence: "80%"
  },
  {
    name: "Shadcn UI",
    icon: techStackIcons["shadcn"],
    confidence: "80%"
  },
  {
    name: "GSAP",
    icon: techStackIcons["gsap"],
    confidence: "80%"
  },
  {
    name: "MongoDB",
    icon: techStackIcons["mongodb"],
    confidence: "80%"
  },
  {
    name: "PostgreSQL",
    icon: techStackIcons["postgresql"],
    confidence: "80%"
  },
  {
    name: "Git",
    icon: techStackIcons["git"],
    confidence: "90%"
  },
  {
    name: "Github",
    icon: techStackIcons["github"],
    confidence: "90%"
  },
  {
    name: "Docker",
    icon: techStackIcons["docker"],
    confidence: "80%"
  },
  {
    name: "AWS",
    icon: techStackIcons["aws"],
    confidence: "80%"
  },
  {
    name: "Postman",
    icon: techStackIcons["postman"],
    confidence: "80%"
  },
  {
    name: "ExpressJS",
    icon: techStackIcons["express"],
    confidence: "80%"
  },
  {
    name: "NodeJS",
    icon: techStackIcons["nodejs"],
    confidence: "80%"
  },
  {
    name: "Prisma",
    icon: techStackIcons["prisma"],
    confidence: "80%"
  },
]
