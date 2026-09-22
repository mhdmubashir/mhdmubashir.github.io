/**
 * Centralised site metadata. Every page's <head>, JSON-LD, sitemap and
 * robots.txt read from here so titles/descriptions/URLs are never duplicated.
 */
export const site = {
  url: "https://mhdmubashir.github.io",
  name: "Muhammed Mubashir Portfolio",
  author: "Muhammed Mubashir",
  additionalName: "thacharakkavil",
  titleDefault: "Muhammed Mubashir | Full Stack Developer | Software Engineer",
  titleTemplate: "%s | Muhammed Mubashir",
  description:
    "Portfolio of Muhammed Mubashir (thacharakkavil), software engineer and founder/full stack developer of ExamEase learning app.",
  ogDescription:
    "Building scalable mobile and web applications with performance and precision.",
  keywords: [
    "muhammed mubashir",
    "muhammed mubashir thacharakkvil",
    "thacharakkavil",
    "mubashir",
    "software engineer",
    "developer",
    "founder and full stack developer of examease",
    "indie develper of examease learning app",
    "examease learning app",
  ],
  ogImage: {
    path: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Muhammed Mubashir — Full Stack Software Developer",
  },
  googleSiteVerification: "zcmbmoB_Sc1IBykHcNCTyAmU4mMx2N7IG9KFkBIxSvU",
  jobTitle: ["Full Stack Developer", "Software Engineer Developer"],
  worksFor: "ExamEase",
  themeColor: "#f6f4ee",
} as const;

/** Absolute URL for a site-relative path ("/", "/policies/…"). */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}
