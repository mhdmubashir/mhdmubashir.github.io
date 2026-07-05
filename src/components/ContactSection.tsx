import styles from "./ContactSection.module.css";
import type { PersonalData } from "@/types";

interface ContactSectionProps {
  personal: PersonalData;
}

export default function ContactSection({ personal }: ContactSectionProps) {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: "var(--gray)" }}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.label}>Email</div>
            <a href={`mailto:${personal.email}`} className={`${styles.value} ${styles.link}`}>
              {personal.email}
            </a>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Phone</div>
            <a href={`tel:${personal.phone}`} className={`${styles.value} ${styles.link}`}>
              {personal.phone}
            </a>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Location</div>
            <div className={styles.value}>{personal.location}</div>
          </div>
          
          <div className={styles.socials}>
            {personal.github && (
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GitHub
              </a>
            )}
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LinkedIn
              </a>
            )}
            {personal.phone && (
              <a
                href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hi Muhammed Mubashir, I came across your portfolio website and would like to connect!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
