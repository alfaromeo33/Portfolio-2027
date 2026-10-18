export type Project = {
  slug: string;
  number: string;
  title: string;
  titleEn: string;
  client: string;
  category: "제품" | "모빌리티" | "라이프스타일";
  year: string;
  image: string;
  summary: string;
  description: string;
  keywords: string[];
};

export const projects: Project[] = [
  {
    slug: "dr-forhair", number: "01", title: "두피 케어 샴푸 패키지", titleEn: "Dr.forHair Shampoo Bottle",
    client: "Dr.forHair", category: "제품", year: "2025", image: "/projects/dr-forhair.jpg",
    summary: "손에 익는 형태와 투명한 소재로 완성한 헤어 케어 패키지.",
    description: "익숙한 사용 경험을 유지하면서도 제품군의 개성을 더하는 패키지 디자인입니다. 잡기 편한 부드러운 실루엣, 반광과 투명 소재의 대비, 톤온톤 컬러를 조합해 매대에서 하나의 패밀리 룩으로 읽히도록 구성했습니다.",
    keywords: ["패키지 디자인", "제품 디자인", "브랜딩"],
  },
  {
    slug: "hechora-hood", number: "02", title: "홈 캠핑 테이블 후드", titleEn: "Hechora Range Hood Concept",
    client: "Hechora", category: "라이프스타일", year: "2025", image: "/projects/hechora-hood.jpg",
    summary: "집 안의 캠핑 분위기를 만드는 오브제형 테이블 후드.",
    description: "테이블 위에 자연스럽게 놓이는 인테리어 오브제의 감성과 관리의 편리함을 함께 고려했습니다. 분리형 구조로 사용과 세척을 간편하게 하고, 간결한 구조와 중심이 낮은 안정적인 비례를 제안했습니다.",
    keywords: ["제품 콘셉트", "가전", "사용성"],
  },
  {
    slug: "planet-bike", number: "03", title: "도심형 접이식 전기자전거", titleEn: "Mando Footloose · Planet",
    client: "Mando Footloose", category: "모빌리티", year: "2025", image: "/projects/planet-bike.jpg",
    summary: "도시 이동을 위한 간결하고 패셔너블한 전기자전거.",
    description: "도심에서 가장 효율적인 이동 수단이라는 목표를 바탕으로 접이식 구조와 전동 파워트레인을 하나의 간결한 실루엣 안에 담았습니다. 이동과 보관, 일상에서의 존재감을 함께 살핀 모빌리티 콘셉트입니다.",
    keywords: ["모빌리티", "전기자전거", "콘셉트 디자인"],
  },
  {
    slug: "nike-wraith", number: "04", title: "축구화 콘셉트 디자인", titleEn: "Nike Wraith Football Cleat",
    client: "Nike", category: "제품", year: "2025", image: "/projects/nike-wraith.jpg",
    summary: "니트 컨트롤과 소재의 레이어를 탐구한 축구화 콘셉트.",
    description: "소재의 혼합과 투명도, 표면의 돌출 텍스처를 바탕으로 첫인상과 착용 기능을 동시에 설계했습니다. 제품의 형태가 움직임을 돕고, 시각적으로도 속도감을 전달하는 방향을 탐구했습니다.",
    keywords: ["풋웨어", "CMF", "스포츠"],
  },
  {
    slug: "luna-storage", number: "05", title: "아이를 위한 UV 수납함", titleEn: "Luna Story UV Storage",
    client: "Luna Story", category: "라이프스타일", year: "2025", image: "/projects/luna-storage.jpg",
    summary: "정리하는 시간을 아이의 즐거운 놀이로 바꾸는 수납 디자인.",
    description: "아이 스스로 정리하는 과정을 즐길 수 있도록 수납과 놀이의 경계를 부드럽게 연결했습니다. 매끄러운 곡면과 안전한 손잡이, 햅틱 피드백 터치 패널을 통해 직관적인 사용 경험을 제안합니다.",
    keywords: ["키즈", "수납", "사용자 경험"],
  },
  {
    slug: "push-swingcar", number: "06", title: "가디언 푸시 스윙카", titleEn: "Luna Story Swing Car",
    client: "Luna Story", category: "라이프스타일", year: "2025", image: "/projects/push-swingcar.jpg",
    summary: "아이와 보호자가 함께 안심하고 즐기는 클래식 라이드 온.",
    description: "낮은 무게중심과 전면 스토퍼로 안정감을 높이고, 보호자가 조절하는 푸시 핸들 및 넓은 좌석을 더했습니다. 조용한 베어링과 폴리우레탄 휠로 실내에서도 편안하게 탈 수 있도록 구성했습니다.",
    keywords: ["키즈 모빌리티", "제품 디자인", "안전"],
  },
  {
    slug: "spirra", number: "07", title: "스피라 스포츠카 페이스리프트", titleEn: "Oullim Motors Spirra",
    client: "Oullim Motors", category: "모빌리티", year: "2025", image: "/projects/spirra.jpg",
    summary: "차량의 전체 실루엣과 양산 파츠를 다듬은 스포츠카 디자인.",
    description: "기존 스피라의 고유한 비례를 바탕으로 전·후면의 인상과 생산 파츠를 정리한 페이스리프트 프로젝트입니다. 차체의 볼륨과 디테일이 하나의 선명한 실루엣으로 연결되도록 조율했습니다.",
    keywords: ["자동차 디자인", "페이스리프트", "양산 디자인"],
  },
  {
    slug: "hycan-urban", number: "08", title: "HYCAN 어반 CUV 콘셉트", titleEn: "HYCAN Urban CUV Concept",
    client: "HYCAN", category: "모빌리티", year: "2025", image: "/projects/hycan-urban.jpg",
    summary: "전면과 측면의 볼륨을 자연스럽게 연결한 전기차 콘셉트.",
    description: "복잡한 전면 요소를 덜어내고 강한 L자 램프의 인상을 정리해 미래적인 전기차 감성을 표현했습니다. 부드러운 면과 넓은 볼륨, 역동적인 엣지 사이의 균형을 여러 방향으로 탐색했습니다.",
    keywords: ["전기차", "CUV", "익스테리어"],
  },
  {
    slug: "chaser-harvester", number: "09", title: "수확기 콘셉트 디자인", titleEn: "Kukje Machinery Chaser",
    client: "Kukje Machinery", category: "제품", year: "2025", image: "/projects/chaser-harvester.jpg",
    summary: "현장과 작업 흐름을 고려해 형태를 제안한 농기계 프로젝트.",
    description: "국제종합기계의 수확기 콘셉트 프로젝트입니다. 작업 환경에서 필요한 기능과 기계의 견고한 인상을 함께 고려해 전체 형태를 전개했습니다.",
    keywords: ["산업 디자인", "농기계", "콘셉트"],
  },
];
