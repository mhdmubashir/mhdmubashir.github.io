import type { MetadataRoute } from "next";
import dataJson from "@/data/portfolioData.json";
import type { PortfolioData } from "@/types";

const data = dataJson as PortfolioData;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://mhdmubashir.github.io"; // Replace with your actual deployed URL

  const sitemapData: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  data.projects.forEach((project) => {
    project.policies?.forEach((policy) => {
      sitemapData.push({
        url: `${siteUrl}/policies/${project.name.toLowerCase().replace(/\s+/g, "-")}/${policy.type}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      });
    });
  });

  return sitemapData;
}
