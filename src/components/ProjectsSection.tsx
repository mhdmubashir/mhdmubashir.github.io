import styles from "./ProjectsSection.module.css";
import type { ProjectData } from "@/types";
import Link from "next/link";

interface ProjectsSectionProps {
  projects: ProjectData[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: "var(--gray)" }}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.header}>
                <h3 className={styles.name}>{project.name}</h3>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.techItem}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Visit Website
                  </a>
                )}
                {project.policies?.map((policy, idx) => (
                  <Link
                    key={idx}
                    href={`/policies/${project.name.toLowerCase().replace(/\s+/g, '-')}/${policy.type}`}
                    className={styles.link}
                  >
                    {policy.urlname}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
