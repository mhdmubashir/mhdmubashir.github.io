import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AppsSection from "@/components/AppsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import portfolioDataJson from "@/data/portfolioData.json";
import type { PortfolioData } from "@/types";

const data = portfolioDataJson as PortfolioData;

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection personal={data.personal} cta={data.cta} />
        <AboutSection about={data.about} />
        <SkillsSection skills={data.skills} />
        <ExperienceSection experience={data.experience} />
        <ProjectsSection projects={data.projects} />
        <AppsSection apps={data.apps} />
        <ContactSection personal={data.personal} />
      </main>
      <Footer personal={data.personal} />
    </>
  );
}
