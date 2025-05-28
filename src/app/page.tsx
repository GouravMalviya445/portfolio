import AboutSection from "@/components/about";
import HeroSection from "@/components/hero";
import ProjectSection from "@/components/project";
import SkillsSection from "@/components/skills";
import TechStackMarquee from "@/components/TechStackMarquee";

export default function Home() {
  return (
    <>
      <HeroSection />  
      <TechStackMarquee />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
    </>
  );
}
