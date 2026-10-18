import type { Metadata } from "next";
import Link from "next/link";
import { getPortfolioContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "이력서 | 신영중",
  description: "산업·제품 디자이너 신영중의 경력, 학력, 기술, 강의와 수상 이력입니다.",
};

export default async function ResumePage() {
  const { site, resume } = await getPortfolioContent();
  return <main className="resume-page">
    <header className="site-header"><Link className="brand" href="/#top">SYJ<span>®</span></Link><nav><Link href="/#work">프로젝트</Link><Link href="/#about">소개</Link><span aria-current="page">이력</span></nav><a className="header-contact" href={`mailto:${site.email}`}>연락하기 <span>↗</span></a></header>
    <div className="cv-shell">
      <Link className="back-link" href="/#top">← 포트폴리오로 돌아가기</Link>
      <section className="cv-intro"><div><p className="eyebrow">CURRICULUM VITAE / 2026</p><h1>{site.name}<span>SHIN YOUNG JUNG</span></h1><p className="cv-specialty">Industrial &amp; Product Designer / AI Expert</p><p className="cv-summary">{site.heroIntro}</p><div className="cv-contact"><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a><span>{site.location}</span></div></div><div className="cv-portrait"><img src="/profile/portrait.jpg" alt="신영중 프로필 사진" /></div></section>
      <section className="cv-section"><div className="cv-section-label"><span>01</span><h2>Career</h2></div><div className="cv-career">{resume.career.map((item) => <article className="cv-career-row" key={item.company}><time>{item.dates}</time><div><h3>{item.company}</h3><p>{item.role}</p><small>{item.detail}</small></div></article>)}</div></section>
      <section className="cv-lower-grid"><div>
        <section className="cv-section"><div className="cv-section-label"><span>02</span><h2>Degree</h2></div><div className="cv-info-list">{resume.education.map(([date, school, major]) => <article className="cv-info-row" key={school}><time>{date}</time><div><h3>{school}</h3><p>{major}</p></div></article>)}</div></section>
        <section className="cv-section"><div className="cv-section-label"><span>03</span><h2>Skills</h2></div><div className="cv-info-list">{resume.skills.map(([group, first, second]) => <article className="cv-info-row" key={group}><span className="cv-group">{group}</span><div><p>{first} <b>·</b> {second}</p></div></article>)}</div></section>
        <section className="cv-section"><div className="cv-section-label"><span>04</span><h2>Lecture</h2></div><div className="cv-info-list">{resume.lectures.map(([date, title]) => <article className="cv-info-row" key={date}><span>{date}</span><div><p>{title}</p></div></article>)}</div></section>
      </div><section className="cv-section"><div className="cv-section-label"><span>05</span><h2>Awards</h2></div><div className="cv-info-list">{resume.awards.map(([date, name, award]) => <article className="cv-info-row" key={name}><time>{date}</time><div><h3>{name}</h3><p>{award}</p></div></article>)}</div></section></section>
      <section className="cv-note"><p className="eyebrow">LET’S MAKE SOMETHING USEFUL</p><h2>새로운 프로젝트를<br />함께 이야기해요.</h2><a className="button button-dark" href={`mailto:${site.email}`}>이메일 보내기 <span>↗</span></a></section>
    </div>
    <footer className="site-footer section-shell"><Link className="brand" href="/#top">SYJ<span>®</span></Link><span>© 2026 SHIN YOUNG JUNG. ALL RIGHTS RESERVED.</span><Link href="/#work">PORTFOLIO ↗</Link></footer>
  </main>;
}
