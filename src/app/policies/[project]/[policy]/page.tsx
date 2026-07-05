import dataJson from "@/data/portfolioData.json";
import type { PortfolioData } from "@/types";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import styles from "./policy.module.css";

const data = dataJson as PortfolioData;

export async function generateStaticParams() {
  const paths: { project: string; policy: string }[] = [];
  data.projects.forEach((project) => {
    project.policies?.forEach((policy) => {
      paths.push({
        project: project.name.toLowerCase().replace(/\s+/g, "-"),
        policy: policy.type,
      });
    });
  });
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string; policy: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = data.projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === resolvedParams.project
  );
  const policy = project?.policies?.find((p) => p.type === resolvedParams.policy);

  if (!project || !policy) {
    return { title: "Policy Not Found" };
  }

  return {
    title: `${policy.urlname} - ${project.name}`,
    description: `Read the ${policy.urlname.toLowerCase()} for ${project.name}.`,
    openGraph: {
      title: `${policy.urlname} - ${project.name} | Muhammed Mubashir`,
      description: `Read the ${policy.urlname.toLowerCase()} for ${project.name}.`,
    },
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ project: string; policy: string }>;
}) {
  const resolvedParams = await params;
  const project = data.projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === resolvedParams.project
  );

  if (!project) return notFound();

  const policy = project.policies?.find((p) => p.type === resolvedParams.policy);

  if (!policy) return notFound();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/" className="btn btn-outline">
          &larr; Back to Portfolio
        </Link>
      </nav>
      <main className={styles.content}>
        <ReactMarkdown>{policy.content}</ReactMarkdown>
      </main>
    </div>
  );
}
