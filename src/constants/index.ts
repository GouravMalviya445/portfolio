import { techStackIcons } from "@/components/icons"
import { ReactNode } from "react"

type TSkills = {
  name: string,
  icon: ReactNode,
  confidence: string
}

export const skills: TSkills[] = [
  {
    name: "html",
    icon: techStackIcons["html"],
    confidence: "90%"
  },
  {
    name: "css",
    icon: techStackIcons["css"],
    confidence: "90%"
  },
  {
    name: "javascript",
    icon: techStackIcons["javascript"],
    confidence: "90%"
  },
  {
    name: "typescript",
    icon: techStackIcons["typescript"],
    confidence: "90%"
  },
  {
    name: "react",
    icon: techStackIcons["react"],
    confidence: "90%"
  },
  {
    name: "nextjs",
    icon: techStackIcons["nextjs"],
    confidence: "70%"
  },
  {
    name: "tailwindcss",
    icon: techStackIcons["tailwindcss"],
    confidence: "90%"
  },
  {
    name: "framer motion",
    icon: techStackIcons["framer motion"],
    confidence: "80%"
  },
  {
    name: "shadcn",
    icon: techStackIcons["shadcn"],
    confidence: "80%"
  },
  {
    name: "gsap",
    icon: techStackIcons["gsap"],
    confidence: "80%"
  },
  {
    name: "mongodb",
    icon: techStackIcons["mongodb"],
    confidence: "80%"
  },
  {
    name: "postgresql",
    icon: techStackIcons["postgresql"],
    confidence: "80%"
  },
  {
    name: "git",
    icon: techStackIcons["git"],
    confidence: "90%"
  },
  {
    name: "github",
    icon: techStackIcons["github"],
    confidence: "90%"
  },
  {
    name: "docker",
    icon: techStackIcons["docker"],
    confidence: "80%"
  },
  {
    name: "aws",
    icon: techStackIcons["aws"],
    confidence: "80%"
  },
  {
    name: "postman",
    icon: techStackIcons["postman"],
    confidence: "80%"
  },
  {
    name: "express",
    icon: techStackIcons["express"],
    confidence: "80%"
  },
  {
    name: "nodejs",
    icon: techStackIcons["nodejs"],
    confidence: "80%"
  },
  {
    name: "prisma",
    icon: techStackIcons["prisma"],
    confidence: "80%"
  },
]
