import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const siteUrl = "https://mhdmubashir.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammed Mubashir | Full Stack Developer | Software Engineer",
    template: "%s | Muhammed Mubashir",
  },
  description: "Portfolio of Muhammed Mubashir (thacharakkavil), software engineer and founder/full stack developer of ExamEase learning app.",
  keywords: [
    "muhammed mubashir",
    "muhammed mubashir thacharakkvil",
    "thacharakkavil",
    "mubashir",
    "software engineer",
    "developer",
    "founder and full stack developer of examease",
    "indie develper of examease learning app",
    "examease learning app"
  ],
  authors: [{ name: "Muhammed Mubashir" }],
  creator: "Muhammed Mubashir",
  openGraph: {
    title: "Muhammed Mubashir | Full Stack Developer | Software Engineer",
    description: "Building scalable mobile and web applications with performance and precision.",
    url: siteUrl,
    siteName: "Muhammed Mubashir Portfolio",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 628,
        alt: "Muhammed Mubashir Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Mubashir | Full Stack Developer | Software Engineer",
    description: "Portfolio of Muhammed Mubashir (thacharakkavil), software engineer and founder/full stack developer of ExamEase learning app.",
    images: [`${siteUrl}/og-image.png`],
  },
  verification: {
    google: "zcmbmoB_Sc1IBykHcNCTyAmU4mMx2N7IG9KFkBIxSvU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammed Mubashir",
              additionalName: "thacharakkavil",
              url: siteUrl,
              jobTitle: ["Full Stack Developer", "Software Engineer Developer"],
              worksFor: {
                "@type": "Organization",
                name: "ExamEase",
              },
              sameAs: [
                "https://github.com/mhdmubashir",
                "https://www.linkedin.com/in/muhammed-mubashir-399070251/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
