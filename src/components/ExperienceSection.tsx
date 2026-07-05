import styles from "./ExperienceSection.module.css";
import type { ExperienceData } from "@/types";

interface ExperienceSectionProps {
  experience: ExperienceData[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className={styles.timeline}>
          {experience.map((exp, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.company}>{exp.company}</div>
                <div className={styles.duration}>{exp.duration}</div>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
