import type { Metadata } from "next";
import Link from "next/link";
import { awards, career, education, lectures, skills } from "@/lib/resume-data";

export const metadata: Metadata = {
  title: "이력서 | 신영중",
  description: "산업·제품 디자이너 신영중의 경력, 학력, 기술, 강의와 수상 이력입니다.",
};

export default function ResumePage() {
  return <main className="resume-page">
    <header className="site-header"><Link className="brand" href="/#top">SYJ<span>®</span></Link><nav><Link href="/#work">프로젝트</Link><Link href="/#about">소개</Link><span aria-current="page">이력</span></nav><a className="header-contact" href="mailto:syj1615@naver.com">연락하기 <span>↗</span></a></header>
    <div className="cv-shell">
      <Link className="back-link" href="/#top">← 포트폴리오로 돌아가기</Link>
      <section className="cv-intro"><div><p className="eyebrow">CURRICULUM VITAE / 2026</p><h1>신영중<span>SHIN YOUNG JUNG</span></h1><p className="cv-specialty">Industrial &amp; Product Designer / AI Expert</p><p className="cv-summary">사용자의 행동과 제품이 놓이는 맥락을 관찰하고, 형태와 쓰임을 함께 설계합니다. 제품과 모빌리티, 생활용품 분야에서 쌓은 경험을 바탕으로 아이디어부터 양산까지 이어지는 디자인을 만듭니다.</p><div className="cv-contact"><a href="mailto:syj1615@naver.com">syj1615@naver.com</a><a href="tel:+821098996786">+82 10 9899 6786</a><span>Seoul, Republic of Korea</span></div></div><div className="cv-portrait"><img src="/profile/portrait.jpg" alt="신영중 프로필 사진" /></div></section>
      <section className="cv-section"><div className="cv-section-label"><span>01</span><h2>Career</h2></div><div className="cv-career">{career.map((item) => <article className="cv-career-row" key={item.company}><time>{item.dates}</time><div><h3>{item.company}</h3><p>{item.role}</p><small>{item.detail}</small></div></article>)}</div></section>
      <section className="cv-lower-grid"><div>
        <section className="cv-section"><div className="cv-section-label"><span>02</span><h2>Degree</h2></div><div className="cv-info-list">{education.map(([date, school, major]) => <article className="cv-info-row" key={school}><time>{date}</time><div><h3>{school}</h3><p>{major}</p></div></article>)}</div></section>
        <section className="cv-section"><div className="cv-section-label"><span>03</span><h2>Skills</h2></div><div className="cv-info-list">{skills.map(([group, first, second]) => <article className="cv-info-row" key={group}><span className="cv-group">{group}</span><div><p>{first} <b>·</b> {second}</p></div></article>)}</div></section>
        <section className="cv-section"><div className="cv-section-label"><span>04</span><h2>Lecture</h2></div><div className="cv-info-list">{lectures.map(([date, title]) => <article className="cv-info-row" key={date}><span>{date}</span><div><p>{title}</p></div></article>)}</div></section>
      </div><section className="cv-section"><div className="cv-section-label"><span>05</span><h2>Awards</h2></div><div className="cv-info-list">{awards.map(([date, name, award]) => <article className="cv-info-row" key={name}><time>{date}</time><div><h3>{name}</h3><p>{award}</p></div></article>)}</div></section></section>
      <section className="cv-note"><p className="eyebrow">LET’S MAKE SOMETHING USEFUL</p><h2>새로운 프로젝트를<br />함께 이야기해요.</h2><a className="button button-dark" href="mailto:syj1615@naver.com">이메일 보내기 <span>↗</span></a></section>
    </div>
    <footer className="site-footer section-shell"><Link className="brand" href="/#top">SYJ<span>®</span></Link><span>© 2026 SHIN YOUNG JUNG. ALL RIGHTS RESERVED.</span><Link href="/#work">PORTFOLIO ↗</Link></footer>
  </main>;
}
