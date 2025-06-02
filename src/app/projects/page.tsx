"use client";
import ProjectPageCard from "@/components/project/ProjectPageCard";

export default function ProjectPage() {
  return (
    <div className="mt-24">
      <div className="flex flex-col items-center gap-7">
        <ProjectPageCard
          title="SkillSwap"
          description="A freelance service marketplace to connect clients with talented developers."
          githubUrl="https://github.com/GouravMalviya445/skillswap"
          imgSrc="/gourav.png"
          projectUrl="https://skillswap.gourav.dev"
          techStack={['nextjs', 'nodejs', 'tailwindcss', 'mongodb', 'aws', 'framer motion']}
        />
        <ProjectPageCard
          title="SkillSwap"
          description="A freelance service marketplace to connect clients with talented developers."
          githubUrl="https://github.com/GouravMalviya445/skillswap"
          imgSrc="/gourav.png"
          projectUrl="https://skillswap.gourav.dev"
          techStack={['nextjs', 'nodejs', 'tailwindcss', 'mongodb', 'aws', 'framer motion']}
        />
      </div>

    </div>
  )
}