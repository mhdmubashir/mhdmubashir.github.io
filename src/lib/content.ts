import dataJson from "@/data/portfolioData.json";
import type { PolicyData, PortfolioData, ProjectData } from "@/types";

export const data = dataJson as PortfolioData;

/** Slug used in policy URLs: "ExamEase" -> "examease". Single source of truth. */
export function projectSlug(project: Pick<ProjectData, "name">): string {
  return project.name.toLowerCase().replace(/\s+/g, "-");
}

/** Site-relative path of a project's policy page (URL scheme preserved from v1). */
export function policyPath(project: ProjectData, policy: PolicyData): string {
  return `/policies/${projectSlug(project)}/${policy.type}`;
}

/** Every (project, policy) pair — used by static paths and the sitemap. */
export function allPolicies(): { project: ProjectData; policy: PolicyData }[] {
  return data.projects.flatMap((project) =>
    (project.policies ?? []).map((policy) => ({ project, policy })),
  );
}

/** Home page sections, in order. Ids are anchor targets and must stay stable. */
export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "apps", label: "Apps" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;

/** Static pages other than the home page, for sitemap and nav. */
export const staticPages = [{ path: "/about", label: "About" }] as const;

export type SectionId = (typeof sections)[number]["id"];

/** WhatsApp deep link with the same prefilled greeting as v1. */
export function whatsappUrl(phone: string): string {
  const digits = phone.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(
    "Hi Muhammed Mubashir, I came across your portfolio website and would like to connect!",
  );
  return `https://wa.me/${digits}?text=${text}`;
}
