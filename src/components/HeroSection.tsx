"use client";

import styles from "./HeroSection.module.css";
import type { PersonalData, CTAData } from "@/types";

interface HeroSectionProps {
  personal: PersonalData;
  cta: CTAData;
}

export default function HeroSection({ personal, cta }: HeroSectionProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 72,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{personal.name}</h1>
        <h2 className={styles.subtitle}>{personal.title}</h2>
        <p className={styles.tagline}>{personal.tagline}</p>
        <div className={styles.actions}>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="btn btn-primary"
          >
            {cta.primary}
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="btn btn-outline"
          >
            {cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
