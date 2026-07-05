import styles from "./AboutSection.module.css";
import type { AboutData } from "@/types";

interface AboutSectionProps {
  about: AboutData;
}

export default function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section-padding">
      <div className={`container ${styles.content}`}>
        <h2 className="section-title">About Me</h2>
        <p className={styles.description}>{about.description}</p>
      </div>
    </section>
  );
}
