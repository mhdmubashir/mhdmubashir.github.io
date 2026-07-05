import styles from "./Footer.module.css";
import type { PersonalData } from "@/types";

interface FooterProps {
  personal: PersonalData;
}

export default function Footer({ personal }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
