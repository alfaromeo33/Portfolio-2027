import { projects as fallbackProjects, type Project } from "@/lib/projects";
import { awards, career, education, lectures, skills } from "@/lib/resume-data";
import { getPortfolioDatabase } from "@/lib/mongodb";

export type CareerItem = { dates: string; company: string; role: string; detail: string };
export type ResumeContent = {
  career: CareerItem[];
  education: string[][];
  skills: string[][];
  lectures: string[][];
  awards: string[][];
};

export type PortfolioContent = {
  site: {
    name: string;
    email: string;
    phone: string;
    location: string;
    heroIntro: string;
    aboutDescription: string;
  };
  projects: Project[];
  resume: ResumeContent;
};

export const fallbackContent: PortfolioContent = {
  site: {
    name: "신영중",
    email: "syj1615@naver.com",
    phone: "+82 10 9899 6786",
    location: "SEOUL, REPUBLIC OF KOREA",
    heroIntro: "신영중입니다. 제품과 모빌리티, 생활의 장면을 관찰하고 더 나은 경험으로 이어지는 형태를 만듭니다.",
    aboutDescription: "산업 디자인을 바탕으로 제품, 모빌리티, 가구와 생활용품을 만들어 왔습니다. 사용자의 행동을 살피고 재료와 제조의 가능성을 함께 고민하며, 오래 곁에 두고 싶은 제품을 설계합니다.",
  },
  projects: fallbackProjects,
  resume: {
    career: career.map((item) => ({ ...item })),
    education: education.map((item) => [...item]),
    skills: skills.map((item) => [...item]),
    lectures: lectures.map((item) => [...item]),
    awards: awards.map((item) => [...item]),
  },
};

export async function getPortfolioContent(): Promise<PortfolioContent> {
  if (!process.env.MONGODB_URI) return fallbackContent;
  try {
    const db = await getPortfolioDatabase();
    const stored = await db.collection<PortfolioContent>("content").findOne({ _id: "portfolio" } as never);
    if (!stored) return fallbackContent;
    return {
      ...fallbackContent,
      ...stored,
      site: { ...fallbackContent.site, ...stored.site },
      resume: { ...fallbackContent.resume, ...stored.resume },
    };
  } catch (error) {
    console.error("Unable to read portfolio content from MongoDB", error);
    return fallbackContent;
  }
}

export async function savePortfolioContent(content: PortfolioContent) {
  const db = await getPortfolioDatabase();
  await db.collection<PortfolioContent>("content").replaceOne(
    { _id: "portfolio" } as never,
    { ...content, _id: "portfolio", updatedAt: new Date() } as never,
    { upsert: true },
  );
}

export { awards, career, education, lectures, skills };
