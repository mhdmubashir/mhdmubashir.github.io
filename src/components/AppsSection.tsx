import styles from "./AppsSection.module.css";
import type { AppData } from "@/types";

interface AppsSectionProps {
  apps: AppData[];
}

export default function AppsSection({ apps }: AppsSectionProps) {
  return (
    <section id="apps" className="section-padding">
      <div className="container">
        <h2 className="section-title">Apps</h2>
        <div className={styles.grid}>
          {apps.map((app, index) => (
            <div key={index} className={styles.app}>
              <h3 className={styles.name}>{app.name}</h3>
              <div className={styles.links}>
                {app.playstore && (
                  <a
                    href={app.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Play Store
                  </a>
                )}
                {app.appstore && (
                  <a
                    href={app.appstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    App Store
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
