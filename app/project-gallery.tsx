"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";

const filters = ["전체", "제품", "모빌리티", "라이프스타일"] as const;

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("전체");
  const visible = useMemo(() => active === "전체" ? projects : projects.filter((project) => project.category === active), [active, projects]);

  return <>
    <div className="filter-row" role="group" aria-label="프로젝트 분류">
      {filters.map((filter) => <button key={filter} className={active === filter ? "filter-button active" : "filter-button"} onClick={() => setActive(filter)} aria-pressed={active === filter}>{filter}<span>{filter === "전체" ? projects.length : projects.filter((project) => project.category === filter).length}</span></button>)}
    </div>
    <div className="project-grid">
      {visible.map((project, index) => <Link className={`project-card ${index === 0 && active === "전체" ? "project-card-featured" : ""}`} href={`/work/${project.slug}`} key={project.slug}>
        <div className="project-image"><img src={project.image} alt={`${project.title} 프로젝트 이미지`} loading={index > 2 ? "lazy" : "eager"} /><span className="project-open">↗</span><span className="project-number">{project.number}</span></div>
        <div className="project-meta"><div><span className="project-client">{project.client} · {project.year}</span><h3>{project.title}</h3></div><span className="project-category">{project.category}</span></div>
        <p className="project-summary">{project.summary}</p>
      </Link>)}
    </div>
  </>;
}
