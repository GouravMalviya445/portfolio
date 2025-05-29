import { techStackIcons } from "@/components/icons"
import { ReactNode } from "react"

type Skill = {
  name: string;
  icon: ReactNode;
  confidence: string;
}

type TSkills = {
  [key: string]: Skill[];
  // frameworks: Skill[];
  // tools: Skill[];
  // databases: Skill[];
}

export const skills: TSkills = {
  languages: [
    {
      name: "C++",
      icon: techStackIcons["cpp"],
      confidence: "90%"
    },
    {
      name: "Java",
      icon: techStackIcons["java"],
      confidence: "90%"
    },
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
      name: "NodeJS",
      icon: techStackIcons["nodejs"],
      confidence: "80%"
    }
  ],
  frameworks: [
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
  ],
  tools: [
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
      name: "Prisma",
      icon: techStackIcons["prisma"],
      confidence: "80%"
    },
    {
      name: "Postman",
      icon: techStackIcons["postman"],
      confidence: "80%"
    },
  ],
  databases: [
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
      name: "MySQL",
      icon: techStackIcons["mysql"],
      confidence: "80%"
    },
  ]
}
