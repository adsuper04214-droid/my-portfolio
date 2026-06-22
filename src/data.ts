import { StoryStage, ProjectData, SkillGroup, ExperienceItem, EducationItem } from "./types";

export const personalInfo = {
  name: "김도현",
  englishName: "Dohyeon Kim",
  birth: "2001.04.21",
  email: "super04214@naver.com",
  phone: "010-9758-0602",
  kakao: "super04214",
  education: "신한대학교 미디어영상학과 재학",
  motto: "기획, 제작, 데이터의 삼박자를 갖춰 비즈니스 임팩트를 만드는 실전형 올라운더, AE 김도현입니다.",
  vision: "소비자의 심리적 장벽을 분석하고, 데이터로 증명하며, 행동을 이끌어내는 인식을 설계합니다."
};

export const mainAchievements = [
  {
    id: "screenx",
    title: "CJ ScreenX PT 대상",
    description: "관객의 관람 장벽을 심층 분석하여 '배경' 중심의 공간 캠페인으로 최우수 평가 획득",
    value: "대상 수상",
    suffix: "경쟁 PT",
    iconName: "Award",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "behind-ad",
    title: "Behind the AD 채널",
    description: "직접 기획/발행한 광고 분석 전문 채널, 평일 23시 도달률 최적화 설계",
    value: "2,000+",
    suffix: "팔로워 달성",
    iconName: "TrendingUp",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "catch-me",
    title: "홍보영상 최고 조회수",
    description: "상실된 2030의 취미 자회 성격 전시회 '캐취미' 홍보물 기획/디렉팅 성과",
    value: "11,000+",
    suffix: "조회수 돌파",
    iconName: "Play",
    color: "from-emerald-500 to-teal-600"
  }
];

export const storyStages: StoryStage[] = [
  {
    id: "frame-break",
    stepNumber: "01",
    badge: "프레임 너머의 각성",
    title: "화면 너머의 프레임을 깨고, 사람의 인식을 설계하는 기획으로",
    description: `광고를 보며 단 몇 초 만에 사람의 마음을 뒤흔들고 인식을 바꿀 수 있다는 점에 온전히 매료되었습니다. 그 힘을 직접 손으로 만들어보고 싶다는 뜨거운 열정 하나로 콘텐츠 제작의 길에 뛰어들었습니다. 처음에는 밤을 새우며 촬영하고 편집하는 현장의 에너지가 좋았고, 뷰파인더 너머로 완성되는 화려한 비주얼과 크리에이티브에 집중하며 수많은 프로젝트를 달렸습니다. 그러나 결과물이 쌓여갈수록 가슴 한구석에 본질적인 갈증이 남았습니다. "왜 이 장면이어야만 하는가?" "왜 이 메시지가 하필 이 방식으로 전달되어야 하는가?" 그리고 더 나아가, "왜 사람들은 알고도 움직이지 않는가?" 밤샘 작업 끝에 얻은 화려한 컷보다, 그 앞단에서 결정되는 날카로운 전략과 의도가 전체 판을 움직인다는 사실을 뼈저리게 깨달았습니다. 콘텐츠는 수많은 선택지 중 최선의 결과물일 뿐이었습니다. 진짜 승부는 사람들이 움직이지 않는 이유를 발견하고, 그 장벽을 무너뜨리는 기획에 있었습니다. 비주얼의 프레임을 깨고 나와 사람의 행동과 인식을 설계하는 AE. 그 순간부터 저의 진짜 레이스가 시작되었습니다.`
  },
  {
    id: "strategy-win",
    stepNumber: "02",
    badge: "대상을 만든 전략",
    title: "감 앞에서는 치열하게, 타깃 데이터 앞에서는 정교하게 이뤄낸 '대상'의 순간",
    description: `대한민국 최고의 광고동아리 애드파워에서 대형 브랜드들과 마주하며 기획이 실전에서 어떻게 작동하는지 온몸으로 부딪쳤습니다. CJ ScreenX 경쟁 PT 당시, 팀 내에서는 ScreenX의 핵심 가치를 두고 '현장감'과 '기술력'이라는 의견이 팽팽하게 맞서며 회의가 교착 상태에 빠졌습니다. 하지만 저는 답을 찾기보다 먼저 문제를 다시 들여다봤습니다. "사람들은 왜 ScreenX를 알고도 선택하지 않을까?" 저는 단순한 중재자에 머물지 않고 타깃이 영화를 소비하고 기억하는 본질적인 유저 저니를 다시 파고들었습니다. 관객은 영화를 기술이 아닌 '공간과 배경'으로 기억한다는 인사이트를 발견했고, "철저히 타깃의 언어로 말할 때 비로소 움직인다"는 기준 아래 전략의 방향을 재설계했습니다. 그 결과 영화 <에이리언: 로물루스>의 폐쇄 공포 공간을 활용한 'NO EXIT' 캠페인을 도출해 냈고, 결국 경쟁 PT 대상이라는 성과를 만들어냈습니다. 갈등의 순간마다 주관적인 감이 아닌 타깃의 행동과 인식을 기준으로 팀의 선택을 조율하는 짜릿함. 그것이 제가 광고에 미쳐있는 이유이자, 사람들이 움직이지 않는 이유를 끝까지 파고드는 AE로 성장하게 된 결정적인 경험이었습니다.`
  },
  {
    id: "execution-proven",
    stepNumber: "03",
    badge: "0→2,000 실행 증명",
    title: "0에서 2,000까지 직접 구르며 증명한, 실행형 AE",
    description: `이론으로만 배우는 기획은 죽은 기획이라 생각했기에 직접 필드로 나가 제 아이디어를 세상에 던졌습니다. 숫자로 설득하는 기획자가 되고자 자발적으로 광고 분석 채널을 개설했고, 콘텐츠 기획부터 제작, 데이터 분석까지 맨땅에 헤딩하며 팔로워 2,000명의 채널로 성장시켰습니다. 이 과정에서 GA4 분석을 접목해 첫 화면 스크롤 이전 단계에서 높은 이탈이 발생한다는 사실을 발견했습니다. 단순히 수치를 확인하는 데 그치지 않고 원인을 추적했습니다. 결국 히어로 카피를 네 차례 수정했고, 이탈률을 21%로 감소시키며 사람들의 행동 변화가 데이터로 증명되는 과정을 직접 경험했습니다.\n\n저는 아이디어만 던지고 뒷짐 지는 기획자가 아닙니다. 콘텐츠 제작의 현실을 알기에 제작팀과 원활하게 소통할 수 있고, 데이터를 볼 줄 알기에 클라이언트를 숫자로 설득할 수 있습니다. 무엇보다 사람들이 움직이지 않는 이유를 발견할 때까지 질문을 멈추지 않습니다. 남들이 결과를 볼 때 원인을 보고, 남들이 기능을 볼 때 사람을 보고, 남들이 답을 찾을 때 문제를 다시 정의합니다. 그것이 AE 김도현의 방식입니다. 기획의 무게를 아는 저의 열정으로, 소비자의 행동을 움직이는 전략을 만들겠습니다.`
  }
];

export const projectsData: ProjectData[] = [
  {
    id: "screenx-pt",
    category: "STRATEGY",
    title: "CJ ScreenX 경쟁 PT",
    subtitle: "소비자의 심리적 장벽을 비즈니스 가치로 치환하는 기획력",
    challenge: '"굳이 스크린X로 비싸게 영화를 봐야 해?"라는 소비자 사이에 고착된 심리적 인식 장벽 해결.',
    insight: "관객은 영화를 단순한 '기술적 스펙'이 아닌, 극 중 몰입을 극대화하는 '공간적 배경'으로 경험할 때 높은 가치를 느낌.",
    action: "<에이리언: 로물루스> 내 폐쇄 우주기지 배경을 ScreenX 3면 포맷과 결합, '벗어날 수 없는 공포감(NO EXIT)' 컨셉의 몰입형 브랜드 캠페인 제안. (기획 총괄)",
    aiUtilization: "ChatGPT를 활용해 커뮤니티 데이터 내 소비자 반응을 키워드 분석, 전략 수립의 논리적 근거로 활용하여 설득력을 높임.",
    result: "애드파워 내 대형 브랜드 경쟁 PT '대상' 수상 (평가단 만장일치).",
    businessValue: "기능 중심 소구에서 벗어나 '경험 가치' 중심의 공간 마케팅 전략을 제시, 스크린X의 고부가가치 포지셔닝 로드맵 구축.",
    metrics: [
      { label: "경쟁 PT 결과", value: "대상 수상" },
      { label: "기획 및 컨셉", value: "100% 총괄" },
      { label: "타깃 전략", value: "인식 전환" }
    ],
    period: "2024.09 ~ 2024.10",
    role: "타깃 페르소나 데이터 분석 / 브랜드 전략 커뮤니케이션 설계 / 제안서 플로우 총괄 / 발표 / 제작 디렉팅",
    tools: ["Notion", "ChatGPT", "Photoshop", "Figma"],
    color: "blue"
  },
  {
    id: "behind-the-ad",
    category: "DATA & GROWTH",
    title: "'Behind the AD' 채널 운영 및 데이터 분석",
    subtitle: "데이터 리터러시를 기반으로 퍼포먼스를 최적화하는 실전형 AE",
    challenge: "감과 직관에 의존하는 기획에서 탈피하여, 콘텐츠의 실제 도달 지표와 유저 클릭 데이터를 수치로 증명하는 능력 확보.",
    action: "광고 분석 크리에이터 채널 자발적 운영 및 프로필 연동 웹페이지 내 유저 저니(User Journey) 추적.",
    aiUtilization: "Claude를 활용해 유저 이탈 구간의 데이터를 문장화하여, 가독성이 떨어지는 카피를 논리적으로 수정함.",
    result: "누적 팔로워 2,000+ 명 확보, 첫 화면 이탈률 88% → 67% (21%p 감소).",
    businessValue: "데이터 분석을 통한 '요일/시간별 최적 노출 시간(금요일 23시)' 도출 및 카피 수정으로 광고 효율 및 페이지 도달률 41% 증대.",
    metrics: [
      { label: "채널 누적 팔로워", value: "2,000+ 명" },
      { label: "소개 페이지 이탈률", value: "88% ➡️ 67%", change: "21%p 감소" },
      { label: "황금 시간대 도달률", value: "+41% 상승", change: "금요일 23시 입증" }
    ],
    period: "2026.03 ~ 2026.06",
    role: "광고 트렌드 리서치 / 콘텐츠 주제 기획 / GA4 데이터 분석 / 소개 페이지 카피 개선",
    tools: ["Notion", "ChatGPT", "Photoshop", "Premiere Pro", "Claude", "Google Analytics 4"],
    color: "purple"
  },
  {
    id: "tlab-reels",
    category: "CONTENT",
    title: "폰트티랩 X 브랜디드 릴스",
    subtitle: "브랜드가 말하지 않아도 유저가 반응하는 '유저 중심' 컨셉 기획",
    challenge: "브랜드의 장점만 나열하는 방식에 피로감을 느끼는 대학생 타깃의 거부감 해소.",
    insight: "대학생 타깃은 브랜드 자체보다 본인들의 실질적인 일상 상황(과제 직전, PPT 제작 미션 등)에 더 솔직하게 반응함.",
    action: "브랜드의 폰트 기능을 일상의 '공감 상황'과 결합한 숏폼 콘텐츠 기획. 유저가 폰트의 필요성을 자발적으로 느끼게 하는 '상황형 마케팅' 전개.",
    aiUtilization: "ChatGPT를 활용해 대학생 커뮤니티의 '과제' 관련 페인 포인트를 분석하여, 공감대를 극대화할 수 있는 스토리라인 도출.",
    result: "숏폼 콘텐츠를 통한 브랜드 친밀도 증대 및 타깃 유저들의 자발적인 브랜드 관련 2차 창작 유도.",
    businessValue: "기능 홍보가 아닌 유저 일상 속 맥락을 건드리는 콘텐츠 기획으로 광고 매체비 대비 높은 타깃 반응(댓글 및 공유)율 달성.",
    metrics: [
      { label: "인스타 조회수", value: "2,000+ 회" },
      { label: "유저 액션", value: "+20 팔로워" },
      { label: "대학생 타깃 친밀", value: "공감 서사" }
    ],
    period: "2025.03 ~ 2025.04",
    role: "소비자 일상 심리 분석 / 콘텐츠 기획 / 제작 총괄(디렉팅)",
    tools: ["Notion", "ChatGPT", "Photoshop", "Premiere Pro"],
    color: "pink"
  },
  {
    id: "catchme-exhibition",
    category: "PRODUCTION",
    title: "애드파워 제37회 전시회 『캐취미』 총괄 디렉팅",
    subtitle: "공감에서 시작해 오프라인 참관 행동으로 끝나는 감동 전력",
    challenge: '"취미를 쫓아 사라진 나를 찾다"라는 다소 추상적인 전시 메인 테마를 2030 취준생 및 사회초년생 타깃에게 텍스트가 아닌 역동적인 영상 서사로 즉각 체험하게 할 미디어가 부족했음.',
    insight: "전시관 개요 설명식의 나열이 아닌, 현실의 압박에 취미마저 소멸해 버린 타깃 스스로가 '내 바로 어제 스토리'로 자가 이입하는 감정선 건드리기부터 설계를 시작.",
    action: "로딩창에 홀리듯 빨려 들어가는 취미 스팟 여정을 담은 감각적 내러티브 메인 홍보 영상과 주최자 심층 인터뷰를 담은 에필로그 총 2편 제작 총괄 및 촬영 연출.",
    result: "공식 홍보 영상 조회수 11,000회 돌파. 시각적 공감 자극을 통해 취준생들의 전시장 직접 방문을 효과적으로 유도하여 사후 전시장 참관 만족도 95% 획득.",
    metrics: [
      { label: "메인 영상 조회수", value: "11,000+ 회" },
      { label: "전시장 관람객 만족", value: "95% 달성" },
      { label: "제작 총괄", value: "홍보영상 2편" }
    ],
    period: "2025.09 ~ 2025.11",
    role: "관람객 감정선 설계 / 메인 홍보 영상 기획 / 촬영·편집 총괄",
    tools: ["Notion", "ChatGPT", "Photoshop", "Premiere Pro"],
    color: "emerald"
  }
];

export const outsourcingVideos: {
  id: string;
  title: string;
  period: string;
  role: string;
  thumbnailText: string;
  url?: string;
}[] = [
  {
    id: "kfhi-1",
    title: "기아대책 X 기아(주) 주니어 글로벌 봉사단 3기 - 영상 1",
    period: "2025.07",
    role: "기획 / 촬영 / 편집",
    thumbnailText: "엄마가 모르셔서 그렇지 요즘은 다들 주글봉 해요~",
    url: "https://www.youtube.com/watch?v=zBIPHiSa5fs&t=209s"
  },
  {
    id: "kfhi-2",
    title: "기아대책 X 기아(주) 주니어 글로벌 봉사단 3기 - 영상 2",
    period: "2025.07",
    role: "기획 / 촬영 / 편집",
    thumbnailText: "주글봉 3기 글로벌 봉사 다이어리",
    url: "https://youtu.be/iZ0nYJQce8E"
  },
  {
    id: "catchme-main",
    title: "제37회 애드파워 전시회 『캐취미 : 취미를 쫓아 사라진 나를 찾다』",
    period: "2025.10",
    role: "메인 홍보 영상 기획·총괄",
    thumbnailText: "캐취미 : 취미를 쫓아 사라진 나를 찾다",
    url: "https://www.youtube.com/watch?v=pb_rGpxlAL8"
  },
  {
    id: "catchme-epilogue",
    title: "『캐취미 Epilogue : 거리 너머의 두번째 이야기』",
    period: "2025.11",
    role: "에필로그 인터뷰 기획·디렉팅",
    thumbnailText: "캐취미 Epilogue : 거리 너머의 두번째 이야기",
    url: "https://www.youtube.com/watch?v=nkl38NVh6nM"
  },
  {
    id: "forest-story",
    title: "다큐멘터리 숲스토리 (외주 필름)",
    period: "2025",
    role: "외주 필름 기획·촬영·편집",
    thumbnailText: "다큐멘터리 숲스토리",
    url: "https://youtu.be/DWJ2YePkQ-Y"
  },
  {
    id: "gooddinings",
    title: "굿다이닝스 브랜드 영상 (외주 필름)",
    period: "2025",
    role: "외주 필름 기획·촬영·편집",
    thumbnailText: "굿다이닝스 GOODDININGS",
    url: "https://youtu.be/D--t5qAmZCY"
  },
  {
    id: "young-camp",
    title: "더영캠프 메이킹 필름",
    period: "2025",
    role: "현장 메이킹 촬영·편집",
    thumbnailText: "더영캠프 메이킹 필름",
    url: "https://youtu.be/7xTCUoGBmOk"
  },
  {
    id: "mission-overseas",
    title: "해외 선교영상",
    period: "2024",
    role: "기획·촬영·편집",
    thumbnailText: "해외 선교 다이어리",
    url: "https://youtu.be/nymQREocSfM"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Design & Video Tools",
    skills: [
      { name: "Figma", iconName: "figma" },
      { name: "Premiere Pro", iconName: "video" },
      { name: "Photoshop", iconName: "image" },
      { name: "CapCut", iconName: "scissors" }
    ]
  },
  {
    category: "AI Copilots",
    skills: [
      { name: "ChatGPT", iconName: "sparkles" },
      { name: "Claude", iconName: "zap" },
      { name: "Gemini", iconName: "brain" }
    ]
  },
  {
    category: "Analysis & Strategic",
    skills: [
      { name: "GA4 (Google Analytics 4)", iconName: "bar-chart" },
      { name: "Google Ads", iconName: "target" },
      { name: "Target Insight Research", iconName: "search" },
      { name: "Copywriting & Concepting", iconName: "file-text" }
    ]
  },
  {
    category: "Productivity & Office",
    skills: [
      { name: "PowerPoint", iconName: "presentation" },
      { name: "Google Slides", iconName: "presentation" },
      { name: "Excel", iconName: "table" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2024.03 ~ 2025.12",
    title: "애드파워 (ADPOWER) 광고동아리 38기 활동",
    organization: "대한민국 최우수 대표 대학생 연합 광고동아리",
    bulletPoints: [
      "CJ ScreenX, 대상그룹, SK 등 실제 대형 브랜드와 연동한 실무 경쟁 PT 및 프로모션 참여",
      "5팀장 겸 기획 총괄 리더로서 팀 의사결정을 브랜드 브리프 및 타깃 관객 데이터에 입각하여 리딩",
      "제37회 정기 전시회 '캐취미' 영상 파트 총괄 디렉터로서 메인 홍보 및 아카이빙 영상 전반 제작"
    ]
  },
  {
    period: "2025.07.09 ~ 2025.07.18",
    title: "기아(KIA) 주니어 글로벌 봉사단 3기",
    organization: "기아자동차 주관 대학생 사회공헌 프로그램",
    bulletPoints: [
      "국내외 친환경 사회적 임팩트 메이킹 활동 및 대중 소구 홍보 영상 기획",
      "글로벌 현장 밀착 취재형 다이어리 스크립팅 및 쇼츠 영상 직접 편집"
    ]
  },
  {
    period: "2026.03 ~ 현재",
    title: "Behind the AD 개인 분석 SNS 채널 개설 및 운영",
    organization: "광고/트렌드 해부 전문 퍼스널 미디어 실천",
    bulletPoints: [
      "대중 트렌드 수집을 위해 기획, 발행, 유입 경로 추적에 대한 데이터 분석 루프 설계",
      "평일 23시 업로드 등의 도달 최적화로 약 3개월 만에 충성도 높은 팔로워 2,000명 확보"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    period: "2021.03 ~ 현재 (2027.02 졸업 예정)",
    degree: "미디어영상학과 학사 과정",
    school: "신한대학교 (Shinhan University)",
    status: "재학 중"
  },
  {
    period: "2018.03 ~ 2021.02",
    degree: "고등학교 졸업",
    school: "글로벌선진학교 (GVCS)",
    status: "졸업"
  }
];

export const certifications = [
  { name: "Google Analytics 4 (GA4) Certification", issuer: "Google", date: "2025" },
  { name: "Google Ads Search Certification", issuer: "Google", date: "2025" }
];
