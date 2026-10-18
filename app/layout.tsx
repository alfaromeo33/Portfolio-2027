import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "신영중 | Product Designer",
  description: "제품의 쓰임과 형태를 함께 설계하는 산업·제품 디자이너 신영중의 포트폴리오입니다.",
  openGraph: {
    title: "신영중 | Product Designer",
    description: "산업·제품 디자이너 신영중의 프로젝트와 이력",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
