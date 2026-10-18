import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} | 신영중`, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];
  return <main className="detail-page">
    <header className="site-header"><Link className="brand" href="/#top">SYJ<span>®</span></Link><nav><Link href="/#work">프로젝트</Link><Link href="/#about">소개</Link><Link href="/#resume">이력</Link></nav><Link className="header-contact" href="mailto:syj1615@naver.com">연락하기 <span>↗</span></Link></header>
    <div className="detail-shell"><Link className="back-link" href="/#work">← 전체 프로젝트</Link><div className="detail-title"><p className="eyebrow">PROJECT {project.number} / {project.category.toUpperCase()}</p><h1>{project.title}</h1><p>{project.titleEn}</p></div><div className="detail-hero"><img src={project.image} alt={`${project.title} 제품 디자인`} /></div><div className="detail-content"><div className="detail-description"><p className="eyebrow">OVERVIEW</p><h2>{project.summary}</h2><p>{project.description}</p></div><dl className="detail-facts"><div><dt>Client</dt><dd>{project.client}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>Category</dt><dd>{project.category}</dd></div><div><dt>Focus</dt><dd>{project.keywords.join(" · ")}</dd></div></dl></div><Link className="next-project" href={`/work/${next.slug}`}><span>NEXT PROJECT · {next.number}</span><strong>{next.title}</strong><b>↗</b></Link></div>
    <footer className="site-footer section-shell"><Link className="brand" href="/#top">SYJ<span>®</span></Link><span>© 2026 SHIN YOUNG JUNG. ALL RIGHTS RESERVED.</span><Link href="/#work">ALL PROJECTS ↗</Link></footer>
  </main>;
}
