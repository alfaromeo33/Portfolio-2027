import Link from "next/link";
import { ProjectGallery } from "@/app/project-gallery";
import { getPortfolioContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { projects, site, resume } = await getPortfolioContent();
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="#top" aria-label="신영중 홈">SYJ<span>®</span></Link>
        <nav aria-label="주요 메뉴"><a href="#work">프로젝트</a><a href="#about">소개</a><a href="#resume">이력</a></nav>
        <a className="header-contact" href="mailto:syj1615@naver.com">연락하기 <span>↗</span></a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {site.heroEyebrow}</p>
          <h1>{site.heroTitle}<br /><em>{site.heroTitleEm}</em></h1>
          <p className="hero-intro">{site.heroIntro}</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">프로젝트 보기 <span>↓</span></a><a className="text-link" href="mailto:syj1615@naver.com">함께 이야기하기 <span>↗</span></a></div>
        </div>
        <div className="hero-art" aria-label="Dr.forHair 샴푸 패키지 프로젝트 이미지">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="hero-art-image"><img src="/projects/dr-forhair.jpg" alt="Dr.forHair 샴푸 패키지 제품 디자인" /></div>
          <div className="art-caption"><span>01 / 09</span><span>FORM &amp; EVERYDAY RITUAL</span></div>
          <span className="hero-side-note">DESIGNING THINGS THAT MATTER</span>
        </div>
        <div className="hero-bottom"><span>PRODUCT · MOBILITY · LIFESTYLE</span><a href="#work">SCROLL TO EXPLORE <span>↓</span></a></div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading"><div><p className="eyebrow">SELECTED WORK / 2025—2026</p><h2>프로젝트<span className="heading-count">{String(projects.length).padStart(2, "0")}</span></h2></div><p>형태와 재료, 쓰임을 탐색한<br />제품 디자인 프로젝트입니다.</p></div>
        <ProjectGallery projects={projects} />
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-layout">
          <div className="about-photo"><img src="/profile/portrait.jpg" alt="제품 디자이너 신영중" /><span className="photo-index">SHIN YOUNG JUNG · 2026</span></div>
          <div className="about-copy"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>좋은 디자인은<br />일상의 작은 차이를<br /><em>오래 남깁니다.</em></h2><p className="about-description">{site.aboutDescription}</p><div className="about-contact"><span>{site.location}</span><a href={`mailto:${site.email}`}>{site.email} <span>↗</span></a></div></div>
        </div>
      </section>

      <section className="resume-section section-shell" id="resume">
        <div className="section-heading resume-heading"><div><p className="eyebrow">EXPERIENCE / EDUCATION / RECOGNITION</p><h2>이력과 경험</h2></div><Link className="text-link" href="/resume">이력서 전체 보기 <span>↗</span></Link></div>
        <div className="resume-grid">
          <div className="resume-main"><h3>Career</h3><div className="career-list">{resume.career.map((item) => <article className="career-item" key={item.company}><span className="career-date">{item.dates}</span><div><h4>{item.company}</h4><p className="career-role">{item.role}</p><p className="career-detail">{item.detail}</p></div></article>)}</div></div>
          <aside className="resume-aside">
            <section className="resume-block"><h3>Degree</h3>{resume.education.map(([date, school, major]) => <div className="compact-row" key={school}><span>{date}</span><p>{school} {major}</p></div>)}</section>
            <section className="resume-block"><h3>Skills</h3><div className="skill-groups">{resume.skills.map(([group, first, second]) => <div key={group}><span>{group}</span><p>{first} <b>·</b> {second}</p></div>)}</div></section>
            <section className="resume-block"><h3>Lecture</h3>{resume.lectures.map(([date, title]) => <div className="compact-row" key={date}><span>{date}</span><p>{title}</p></div>)}</section>
            <section className="resume-block"><h3>Awards</h3><div className="award-list">{resume.awards.map(([date, name, award]) => <div className="compact-row" key={name}><span>{date}</span><p>{name}<small>{award}</small></p></div>)}</div></section>
          </aside>
        </div>
      </section>

      <section className="contact-section section-shell"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>함께 만들고 싶은<br /><em>이야기가 있나요?</em></h2><a className="button button-light" href={`mailto:${site.email}`}>이메일 보내기 <span>↗</span></a><p className="contact-phone">{site.phone}</p></section>
      <footer className="site-footer section-shell"><Link className="brand" href="#top">SYJ<span>®</span></Link><span>© 2026 SHIN YOUNG JUNG. ALL RIGHTS RESERVED.</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
