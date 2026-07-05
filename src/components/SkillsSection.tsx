import styles from "./SkillsSection.module.css";

interface SkillsSectionProps {
  skills: string[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: "var(--gray)" }}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
