import type { APIRoute } from "astro";
import { allPolicies, policyPath, staticPages } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

/**
 * Hand-rolled sitemap so the URL stays `/sitemap.xml` (what Search Console
 * already has) and every entry is derived from the same content helpers the
 * pages use — no orphan or phantom URLs.
 */
export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);

  const entries: { loc: string; changefreq: string; priority: string }[] = [
    { loc: absoluteUrl("/"), changefreq: "monthly", priority: "1.0" },
    ...staticPages.map((p) => ({ loc: absoluteUrl(p.path), changefreq: "monthly", priority: "0.9" })),
    ...allPolicies().map(({ project, policy }) => ({
      loc: absoluteUrl(policyPath(project, policy)),
      changefreq: "yearly",
      priority: "0.8",
    })),
  ];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map(
        (e) =>
          `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
