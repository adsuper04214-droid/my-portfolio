/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  Award, 
  TrendingUp, 
  Play, 
  CheckCircle2, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  ArrowUpRight, 
  Layers,
  Sparkles,
  Zap,
  BarChart3,
  Target,
  Search,
  FileText,
  Video,
  Image,
  Scissors
} from "lucide-react";
import { 
  personalInfo, 
  mainAchievements, 
  storyStages, 
  projectsData, 
  outsourcingVideos, 
  skillGroups, 
  experienceData, 
  educationData, 
  certifications 
} from "./data";
import { ProjectData } from "./types";
import profilePhoto from "./profile.png";
import screenxSlide1 from "./screenx-slide1.png";
import screenxSlide2 from "./screenx-slide2.png";
import screenxSlide3 from "./screenx-slide3.png";
import behindSlide1 from "./behind-slide1.png";
import behindSlide2 from "./behind-slide2.png";
import tlabSlide1 from "./tlab-slide1.png";
import tlabSlide2 from "./tlab-slide2.png";

const renderHighlightedText = (text: string, colorClass: string, isColorActive: boolean = false) => {
  if (!text) return null;
  const lines = text.split("\n");
  return (
    <span className="block space-y-2">
      {lines.map((line, lIdx) => {
        const parts = line.split(/\{([^}]+)\}/g);
        return (
          <span key={lIdx} className="block leading-relaxed tracking-wide" style={{ fontSize: "11pt", letterSpacing: "0.03em" }}>
            {parts.map((part, index) => {
              if (index % 2 === 1) {
                return (
                  <span key={index} className={`font-black ${isColorActive ? colorClass : "text-slate-950"}`}>
                    {part}
                  </span>
                );
              }
              return part;
            })}
          </span>
        );
      })}
    </span>
  );
};

export default function App() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const screenxSlides = [
    { image: screenxSlide1, title: "마케팅 제안서 표지" },
    { image: screenxSlide2, title: "컨셉 제안 - NO EXIT 경고판" },
    { image: screenxSlide3, title: "CGV 앱/웹 팝업 배너 시안" }
  ];

  const behindSlides = [
    { image: behindSlide1, title: "퍼스널 브랜딩 소개페이지 & 인스타그램 채널 시안" },
    { image: behindSlide2, title: "인스타그램 숏폼/릴스 기획 및 발행 썸네일 그리드" }
  ];

  const tlabSlides = [
    { image: tlabSlide1, title: "인스타그램 릴스 상황극 업로드 및 상세 자막 캡처" },
    { image: tlabSlide2, title: "폰트티랩 공식 인스타그램 피드 릴스 발행 그리드" }
  ];

  // Helper to get project style
  const getThemeColors = (category: string) => {
    switch(category) {
      case "STRATEGY":
        return {
          bg: "bg-blue-50/70 border-blue-200 text-blue-700",
          accent: "blue",
          primary: "text-blue-600",
          gradient: "from-blue-600 to-indigo-600",
          lightGradient: "from-blue-50 to-indigo-50/50"
        };
      case "DATA & GROWTH":
        return {
          bg: "bg-purple-50/70 border-purple-200 text-purple-700",
          accent: "purple",
          primary: "text-purple-600",
          gradient: "from-purple-600 to-pink-600",
          lightGradient: "from-purple-50 to-pink-50/50"
        };
      case "CONTENT":
        return {
          bg: "bg-pink-50/70 border-pink-200 text-pink-700",
          accent: "pink",
          primary: "text-pink-600",
          gradient: "from-pink-600 to-rose-600",
          lightGradient: "from-pink-50 to-rose-50/50"
        };
      case "PRODUCTION":
        return {
          bg: "bg-emerald-50/70 border-emerald-200 text-emerald-700",
          accent: "emerald",
          primary: "text-emerald-600",
          gradient: "from-emerald-600 to-teal-600",
          lightGradient: "from-emerald-50 to-teal-50/50"
        };
      default:
        return {
          bg: "bg-slate-50 border-slate-200 text-slate-700",
          accent: "slate",
          primary: "text-slate-600",
          gradient: "from-slate-600 to-slate-800",
          lightGradient: "from-slate-50 to-slate-100"
        };
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const nextProject = () => {
    setActiveProjectIdx((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setActiveProjectIdx((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const curProject = projectsData[activeProjectIdx];
  const curProjColors = getThemeColors(curProject.category);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60" id="header_nav">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2 font-title">
              DOHYEON <span className="bg-slate-900 text-white text-[10px] uppercase font-mono px-2 py-0.5 rounded tracking-widest font-normal">AE</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-950 transition-colors py-1">BUILD-UP STORY</a>
            <a href="#portfolio" className="hover:text-slate-950 transition-colors py-1">PROJECT ARCHIVE</a>
            <a href="#video-skills" className="hover:text-slate-950 transition-colors py-1">PRODUCTION</a>
            <a href="#resume" className="hover:text-slate-950 transition-colors py-1">EXPERIENCE</a>
          </nav>
          <a
            href="#contact"
            className="text-xs bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-full transition-all flex items-center gap-1.5 shadow-sm"
            id="nav_cta"
          >
            CONTACT ME <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION (메인 홈) */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/50 py-16 lg:py-24" id="hero">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8" id="hero_text_container">
            <div className="inline-flex self-start items-center gap-2 px-3 py-1 bg-slate-100 hover:bg-slate-200/85 transition-colors rounded-full border border-slate-200 text-xs text-slate-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              기획 × 제작 × 데이터의 삼박자
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.3] text-slate-900 tracking-tight font-title" id="main_title">
                기획, 제작, 데이터의 삼박자를 갖춰 <br />
                <span className="relative inline-block text-slate-950 whitespace-nowrap">
                  비즈니스 임팩트를 만드는
                </span> <br />
                실전형 올라운더, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  AE 김도현입니다.
                </span>
              </h1>

              <p className="text-slate-600 text-base lg:text-lg leading-relaxed font-sans max-w-2xl font-light" id="sub_brief">
                소비자의 심리적 장벽을 분석하고, 데이터로 증명하며, 행동을 이끌어내는 인식을 설계합니다.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#portfolio" 
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg transition-all text-sm flex items-center gap-2 shadow-md shadow-slate-900/10"
                id="hero_portfolio_btn"
              >
                포트폴리오 보러가기 <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#about" 
                className="border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-3 px-6 rounded-lg transition-all text-sm"
                id="hero_about_btn"
              >
                핵심 서사 전개
              </a>
            </div>
          </div>

          {/* Hero Right Visual Layout: Smart professional showcase without holding camera */}
          <div className="lg:col-span-5 flex justify-center" id="hero_visual_container">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              {/* Outer Glow Circles */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/20 via-indigo-300/15 to-purple-400/20 rounded-full blur-3xl -z-10" />
              
              {/* Profile Card Mockup */}
              <div className="w-full h-full bg-[#121B2C] rounded-3xl p-6 shadow-2xl flex flex-col justify-between text-white border border-[#1d273a] relative z-10 overflow-hidden">
                {/* Visual Accent Overlay */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-[#1d273a] pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">OFFICIAL PROFILE</span>
                </div>

                <div className="my-auto space-y-6">
                  {/* Profile Photo */}
                  <div className="flex justify-center">
                    <div className="w-full h-64 rounded-2xl overflow-hidden relative border border-[#1d273a] shadow-inner bg-[#121B2C]">
                      <img 
                        src={profilePhoto} 
                        alt="김도현 프로필" 
                        className="w-full h-full object-cover object-top scale-100 select-none" 
                      />
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold font-title">김도현</h3>
                    <p className="text-xs text-slate-400 font-mono">Dohyeon Kim / 2001.04.21</p>
                    <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                      <span className="text-[10px] tracking-tight bg-slate-800/80 text-blue-300 px-2 py-0.5 rounded border border-blue-900/40">기획전략 STRATEGY</span>
                      <span className="text-[10px] tracking-tight bg-slate-800/80 text-purple-300 px-2 py-0.5 rounded border border-purple-900/40">생산제작 CONTENT</span>
                      <span className="text-[10px] tracking-tight bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-900/40">데이터 GA4</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#1d273a] pt-4 flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>SHINHAN UNIV</span>
                  <span className="text-slate-500">● ACTIVE</span>
                </div>
              </div>

              {/* Float Badge 1 - PT Winner */}
              <div className="absolute -top-4 -left-4 bg-white border border-slate-200 p-3 rounded-xl shadow-lg flex items-center gap-2.5 max-w-xs animate-bounce" style={{animationDuration: '6s'}}>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase font-mono tracking-wider">CJ ScreenX</p>
                  <p className="text-xs font-bold text-slate-900">경쟁 PT 대상</p>
                </div>
              </div>

              {/* Float Badge 2 - Data */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 p-3 rounded-xl shadow-lg flex items-center gap-2.5 max-w-xs">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <TrendingUp className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase font-mono tracking-wider">Behind the AD</p>
                  <p className="text-xs font-bold text-slate-900">도달률 +41% 최적화</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3대 핵심 성과 (인포그래픽 칩 형태로 배치) */}
        <div className="max-w-6xl mx-auto px-6 mt-16 lg:mt-24" id="infographics_chips">
          <div className="border-t border-slate-200/80 pt-8">
            <h2 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-6 text-center lg:text-left">AE 김도현의 3대 핵심 실적지표</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Metric 1 - CJ ScreenX */}
              <div className="bg-slate-50 hover:bg-slate-100/50 transition-all border border-slate-200/70 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-blue-600">PRESTIGE AWARD</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-900 font-title">CJ ScreenX 대상</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    대형 브랜드 경쟁 PT 팀장/총괄, 타깃 리서치 기반 공간 전환 마케팅 완벽 입증
                  </p>
                </div>
              </div>

              {/* Metric 2 - Behind the AD */}
              <div className="bg-slate-50 hover:bg-slate-100/50 transition-all border border-slate-200/70 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-purple-600">GROWTH HACKING</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-900 font-title">팔로워 1,200명</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    광고 해부 SNS 채널 무드설계, 타깃 활동 분석 통해 평일 도달률 41% 최적화
                  </p>
                </div>
              </div>

              {/* Metric 3 - Web traffic & Views */}
              <div className="bg-slate-50 hover:bg-slate-100/50 transition-all border border-slate-200/70 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Play className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-emerald-600">VIRAL IMPACT</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-900 font-title">최고 조회수 11,000+</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    전시회 '캐취미' 영상 기획/디렉팅 홍보 성과, 참관 행동 유도 및 만족도 95% 기록
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. 핵심 스토리텔링 (About Me) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50" id="about">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">BUILD-UP STORY</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-title">
              인식이 바뀌는 지점을 설계하게 된 <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">3단계 빌드업 서사</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
            {storyStages.map((stage, idx) => {
              const isActive = activeStoryIdx === idx;
              return (
                <div 
                  key={stage.id} 
                  className="relative pl-8 md:pl-10 group cursor-pointer"
                  onClick={() => setActiveStoryIdx(idx)}
                >
                  {/* Indicator bullet */}
                  <div className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${
                    isActive 
                      ? "bg-slate-900 border-slate-900 text-white shadow-md scale-110" 
                      : "bg-white border-slate-300 text-slate-400 group-hover:border-slate-500"
                  }`}>
                    <span className="text-[9px] font-bold">{stage.stepNumber}</span>
                  </div>

                  <div className={`transition-all duration-300 rounded-2xl p-6 md:p-8 border ${
                    isActive 
                      ? "bg-white border-slate-300/80 shadow-md translate-x-1" 
                      : "bg-transparent border-transparent group-hover:bg-white/40"
                  }`}>
                    {/* Badge */}
                    <span className="inline-block text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded px-2 py-0.5 uppercase tracking-wide mb-3">
                      {stage.badge}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-950 mb-4 font-title leading-snug">
                      {stage.title}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-slate-600 text-sm md:text-base leading-relaxed font-light whitespace-pre-line ${
                      isActive ? "block" : "line-clamp-2 md:line-clamp-3"
                    }`}>
                      {stage.description}
                    </p>

                    {!isActive && (
                      <span className="inline-flex items-center gap-1 text-xs text-indigo-600 font-semibold mt-3 group-hover:underline">
                        전체 맥락 읽기 <ChevronRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 포트폴리오 아카이브 (Projects) */}
      <section className="py-20 bg-white border-b border-slate-200/50" id="portfolio">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-12">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-500">PROJECT ARCHIVE</span>
              <h2 className="text-3xl font-extrabold text-slate-900 font-title">핵심 프로젝트 성공사례분석</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>{activeProjectIdx + 1} / {projectsData.length} PAGES</span>
            </div>
          </div>

          {/* Tab Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/60">
            {projectsData.map((project, idx) => {
              const isSelected = activeProjectIdx === idx;
              const style = getThemeColors(project.category);
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProjectIdx(idx)}
                  className={`text-xs md:text-sm font-semibold py-3 px-4 rounded-lg transition-all ${
                    isSelected 
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-500 hover:text-slate-800 hover:bg-white/40"
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className={`text-[9px] uppercase tracking-wider ${isSelected ? style.primary : "text-slate-400"}`}>
                      {project.category}
                    </span>
                    <span className="truncate max-w-full font-title text-[11px] sm:text-xs">
                      {project.title.split(" 혹은 ")[0].split(" 및 ")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Project Details Display Wrapper */}
          <div className={`transition-all duration-300 border border-slate-200 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br ${curProjColors.lightGradient}`}>
            
            {/* Project Cover Ribbon */}
            <div className={`h-1.5 bg-gradient-to-r ${curProjColors.gradient}`} />

            <div className="p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Descriptive Case Narrative */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                
                <div className="space-y-4">
                  
                  {/* Category and Period */}
                  <div className="flex items-center gap-3 text-xs">
                    <span className={`font-mono text-[10px] font-extrabold border px-2 py-0.5 rounded-full tracking-wide uppercase ${curProjColors.bg}`}>
                      {curProject.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {curProject.period}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    {curProject.id === "screenx-pt" && (
                      <div className="font-extrabold text-blue-600 tracking-tight mb-1.5" style={{ fontSize: '15pt' }}>
                        🏆 대상 수상 (평가단 만장일치)
                      </div>
                    )}
                    <h3 className="font-extrabold text-slate-950 font-title tracking-tight leading-snug" style={{ fontSize: '21pt' }}>
                      {curProject.title}
                    </h3>
                    <p className={`text-base font-semibold mt-2 font-sans ${curProjColors.primary}`} style={{ letterSpacing: '0.02em' }}>
                      {curProject.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-b border-slate-200/50 pb-4" />

                  {/* Scenario Breakdown */}
                  <div className="space-y-8 pt-3">
                    
                    {/* Challenge block */}
                    {curProject.challenge && (
                      <div className="space-y-2 bg-white/60 p-5 rounded-xl border border-slate-200/40 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-mono">CHALLENGE</span>
                        </div>
                        <div className="text-slate-700">
                          {renderHighlightedText(curProject.challenge, curProjColors.primary, false)}
                        </div>
                      </div>
                    )}

                    {/* Insight block */}
                    {curProject.insight && (
                      <div className="space-y-2 bg-white/60 p-5 rounded-xl border border-slate-200/40 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-mono">INSIGHT</span>
                        </div>
                        <div className="text-slate-700">
                          {renderHighlightedText(curProject.insight, curProjColors.primary, false)}
                        </div>
                      </div>
                    )}

                    {/* Action block */}
                    {curProject.action && (
                      <div className="space-y-2 bg-white/60 p-5 rounded-xl border border-slate-200/40 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-mono">ACTION</span>
                        </div>
                        <div className="text-slate-700">
                          {renderHighlightedText(curProject.action, curProjColors.primary, false)}
                        </div>
                      </div>
                    )}

                    {/* AI Utilization block */}
                    {curProject.aiUtilization && (
                      <div className="space-y-2 bg-white/60 p-5 rounded-xl border border-slate-200/40 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-mono">AI 활용</span>
                        </div>
                        <div className="text-slate-700">
                          {renderHighlightedText(curProject.aiUtilization, curProjColors.primary, false)}
                        </div>
                      </div>
                    )}

                    {/* Result block */}
                    {curProject.result && (
                      <div className="space-y-3 bg-white/60 p-5 rounded-xl border border-slate-200/40 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-mono">RESULT</span>
                        </div>
                        {curProject.businessValue ? (
                          <div className="space-y-3.5 text-slate-700 font-sans">
                            <div className="leading-relaxed">
                              <span className="font-bold text-slate-900 block mb-1 text-[11px] font-mono tracking-wider text-slate-400">성과</span>
                              {renderHighlightedText(curProject.result, curProjColors.primary, true)}
                            </div>
                            <div className="leading-relaxed border-t border-slate-200/50 pt-3">
                              <span className="font-bold text-slate-900 block mb-1 text-[11px] font-mono tracking-wider text-slate-400">비즈니스 가치</span>
                              {renderHighlightedText(curProject.businessValue, curProjColors.primary, true)}
                            </div>
                          </div>
                        ) : (
                          <div className="text-slate-700">
                            {renderHighlightedText(curProject.result, curProjColors.primary, true)}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Left Bottom Role & Tools */}
                <div className="pt-6 border-t border-slate-200/50 space-y-4">
                  {/* Role row */}
                  <div className="flex flex-wrap items-start gap-2">
                    <span className="text-[10px] font-mono text-slate-400 mt-1 shrink-0">역할 ROLE:</span>
                    <p className="text-xs sm:text-sm text-slate-800 font-sans font-semibold leading-relaxed">
                      {curProject.role}
                    </p>
                  </div>

                  {/* Tools row */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-slate-400 mr-1.5">USED TOOLS:</span>
                    {curProject.tools.map(tool => (
                      <span key={tool} className="text-[10px]/none font-mono bg-white text-slate-700 py-1 px-2.5 rounded border border-slate-200 font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Infographic Card / Interactive Mockup Representation */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                
                {/* Visual Representation container */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white border border-slate-800 space-y-6 shadow-md shadow-indigo-950/10 shrink-0 h-full flex flex-col justify-between">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" /> Key Metrics & Visualization
                    </span>
                    <span className="text-[10px] font-mono text-indigo-400 font-bold bg-indigo-950 px-2 py-0.5 rounded border border-indigo-900/40">
                      PT RESULTS
                    </span>
                  </div>

                  {/* Simulated interactive visual card depending on project */}
                  <div className="my-auto py-4">
                    {curProject.id === "screenx-pt" && (
                      <div className="flex flex-col gap-4">
                        {screenxSlides.map((slide, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 shadow-inner">
                              <img 
                                src={slide.image} 
                                alt={slide.title} 
                                className="w-full h-auto select-none block" 
                              />
                            </div>
                            <p className="text-[10px] font-semibold text-indigo-300 text-center tracking-tight leading-relaxed">{slide.title}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {curProject.id === "behind-the-ad" && (
                      <div className="flex flex-col gap-4">
                        {behindSlides.map((slide, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 shadow-inner">
                              <img 
                                src={slide.image} 
                                alt={slide.title} 
                                className="w-full h-auto select-none block" 
                              />
                            </div>
                            <p className="text-[10px] font-semibold text-purple-300 text-center tracking-tight leading-relaxed">{slide.title}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {curProject.id === "tlab-reels" && (
                      <div className="flex flex-col gap-4">
                        {tlabSlides.map((slide, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 shadow-inner">
                              <img 
                                src={slide.image} 
                                alt={slide.title} 
                                className="w-full h-auto select-none block" 
                              />
                            </div>
                            <p className="text-[10px] font-semibold text-pink-300 text-center tracking-tight leading-relaxed">{slide.title}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {curProject.id === "catchme-exhibition" && (
                      <div className="flex flex-col gap-4">
                        <div className="space-y-2">
                          <p className="text-[11px] font-semibold text-emerald-300">🎥 메인 홍보 영상: 『캐취미 : 취미를 쫓아 사라진 나를 찾다』</p>
                          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
                            <iframe
                              className="w-full h-full"
                              src="https://www.youtube.com/embed/pb_rGpxlAL8"
                              title="제37회 애드파워 전시회 『캐취미 : 취미를 쫓아 사라진 나를 찾다』"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-[11px] font-semibold text-emerald-300">🎬 에필로그 인터뷰: 『캐취미 Epilogue : 거리 너머의 두번째 이야기』</p>
                          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
                            <iframe
                              className="w-full h-full"
                              src="https://www.youtube.com/embed/nkl38NVh6nM"
                              title="『캐취미 Epilogue : 거리 너머의 두번째 이야기』"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quantitative Chips */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest text-center">KEY PROJECT INSIGHT METRIC</p>
                    <div className="grid grid-cols-2 gap-2">
                      {curProject.metrics.map(met => (
                        <div key={met.label} className="bg-slate-950 border border-slate-800 rounded p-2.5 text-center">
                          <p className="text-[10px] text-slate-400 font-sans truncate">{met.label}</p>
                          <p className="text-sm font-black text-slate-100 truncate font-title">{met.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Slideshow manual controls */}
                <div className="flex items-center justify-between gap-4 bg-slate-100 p-2 rounded-xl border border-slate-200">
                  <button 
                    onClick={prevProject} 
                    className="p-2 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 bg-white rounded-lg transition-all text-slate-700 select-none cursor-pointer flex items-center justify-center"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex gap-1.5 justify-center">
                    {projectsData.map((_, dotIdx) => (
                      <span 
                        key={dotIdx} 
                        onClick={() => setActiveProjectIdx(dotIdx)}
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                          activeProjectIdx === dotIdx ? `bg-slate-900 scale-110` : 'bg-slate-300 hover:bg-slate-400'
                        }`} 
                      />
                    ))}
                  </div>

                  <button 
                    onClick={nextProject} 
                    className="p-2 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 bg-white rounded-lg transition-all text-slate-700 select-none cursor-pointer flex items-center justify-center"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION ENGINE (영상제작 역량) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50" id="video-skills">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">PRODUCTION</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-title">외주 영상 및 영상 기획・총괄 디렉팅</h2>
            <p className="text-sm text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
              기획부터 현장 촬영, 그리고 최종 컷 편집까지 전 과정을 풍부하게 실전 수행하며 기획을 즉시 눈앞의 차별적 시각 자료로 실물 구현합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outsourcingVideos.map((vid) => {
              const youtubeId = vid.url?.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&]+)/)?.[1];
              const thumbBg = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : null;
              const thumbnailClass = "w-full aspect-[16/10] bg-slate-950 rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-4 border border-slate-900 block";
              const thumbnailInner = (
                <>
                  {thumbBg && (
                    <img
                      src={thumbBg}
                      alt={vid.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-900/60 z-10" />
                  {!thumbBg && (
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                  )}
                  <span className="text-[10px] font-mono text-indigo-300 font-bold z-20 absolute top-2.5 left-3 drop-shadow">CAMWORK</span>
                  {vid.url && (
                    <span className="text-[9px] font-mono text-rose-300 font-bold z-20 absolute top-2.5 right-3 bg-rose-950/70 border border-rose-900/60 px-1.5 py-0.5 rounded tracking-wide">▶ YOUTUBE</span>
                  )}
                  <div className="w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 transition-all text-white flex items-center justify-center backdrop-blur-sm z-30 shadow border border-white/20">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-100 text-center font-bold px-2 z-20 mt-2 line-clamp-2 w-full drop-shadow">
                    {vid.thumbnailText}
                  </span>
                  <span className="text-[9px] font-mono text-slate-300 absolute bottom-2.5 right-3 tracking-wide drop-shadow">{vid.period}</span>
                </>
              );

              return (
                <div
                  key={vid.id}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:shadow-lg transition-all space-y-4 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {vid.url ? (
                      <a
                        href={vid.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${thumbnailClass} cursor-pointer group/thumb`}
                        aria-label={`${vid.title} - YouTube에서 열기`}
                      >
                        {thumbnailInner}
                      </a>
                    ) : (
                      <div className={thumbnailClass}>
                        {thumbnailInner}
                      </div>
                    )}

                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-snug line-clamp-2 font-title group-hover:text-indigo-600 transition-colors">
                        {vid.title}
                      </h3>
                      <p className="text-xs text-slate-400 tracking-wide font-mono flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {vid.period}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100/80 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 rounded px-2 py-0.5 inline-block">
                      {vid.role}
                    </span>
                    {vid.url && (
                      <a
                        href={vid.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono font-bold text-rose-600 hover:text-rose-700 transition-colors flex items-center gap-1 shrink-0"
                      >
                        ▶ YouTube
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. RESUME & PROFILE DETAILS */}
      <section className="py-20 bg-white border-b border-slate-200/50" id="resume">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Area: Brief bio & tools */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">QUALIFICATIONS</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-title">보유 핵심 역량</h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans font-light">
                설득력 있는 크리에이티브 기획에 자발적 가설 수립 및 정량 지표 분석(GA4) 감각을 융합하여 기획과 실행의 공백을 채웁니다.
              </p>
            </div>

            {/* Skill Groups Grid */}
            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.category} className="space-y-2.5">
                  <p className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-slate-400">{group.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((sk) => (
                      <span 
                        key={sk.name} 
                        className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-slate-700 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                        {sk.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* [왜 이 툴을 썼는가?] Section */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-3">
              <p className="text-[10px] font-extrabold font-mono text-slate-400 uppercase tracking-widest">[왜 이 툴을 썼는가?]</p>
              <p className="text-[11px] font-mono text-slate-400 leading-normal">
                Used Tools: Notion, ChatGPT, Photoshop, Figma, Premiere Pro, Claude, Google Analytics 4
              </p>
              <div className="space-y-2 text-xs text-slate-600 font-sans leading-relaxed">
                <div>
                  <span className="font-bold text-slate-800">[기획/전략] ChatGPT/Claude:</span> <br/>
                  데이터 분석 및 타깃 페르소나 인사이트 도출로 기획 논리 강화
                </div>
                <div className="border-t border-slate-200/60 pt-2">
                  <span className="font-bold text-slate-800">[제작/디자인] PS/Figma/Premiere:</span> <br/>
                  커뮤니케이션 비용 최소화 및 제작물 퀄리티 컨트롤
                </div>
                <div className="border-t border-slate-200/60 pt-2">
                  <span className="font-bold text-slate-800">[데이터/성과] GA4:</span> <br/>
                  유저 여정 추적 및 퍼포먼스 수치 검증
                </div>
              </div>
            </div>

            {/* Certifications Block */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-4">
              <p className="text-[10px] font-extrabold font-mono text-slate-400 uppercase tracking-widest">전문 자격 및 인증</p>
              <div className="space-y-3">
                {certifications.map(cert => (
                  <div key={cert.name} className="flex items-start gap-2.5 text-xs">
                    <Award className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 leading-none">{cert.name}</p>
                      <p className="text-[10px] text-slate-400 mt-1 font-mono">{cert.issuer}, {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Area: Experience Timeline & Educations */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Experience Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-slate-700" />
                <h3 className="text-xl font-extrabold text-slate-900 font-title">실무 활동 및 이력</h3>
              </div>

              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.title} className="group border border-slate-200 hover:border-slate-300 p-5 rounded-xl transition-all space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <h4 className="text-sm sm:text-base font-extrabold text-slate-950 font-title">{exp.title}</h4>
                        <p className="text-xs text-slate-500 font-sans mt-0.5">{exp.organization}</p>
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono bg-slate-100 border border-slate-200 px-2.5 py-1 text-slate-700 rounded-lg">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 pl-4 list-disc text-slate-600 text-xs sm:text-sm">
                      {exp.bulletPoints?.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed font-sans font-light">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-slate-700" />
                <h3 className="text-xl font-extrabold text-slate-900 font-title">학력 및 교육 배경</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {educationData.map((edu) => (
                  <div key={edu.school} className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl text-xs space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{edu.period}</span>
                      <span className="text-slate-500">{edu.status}</span>
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-950 text-sm font-title">{edu.school}</p>
                      <p className="text-slate-500 mt-0.5">{edu.degree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section className="py-20 bg-slate-900 text-slate-300 border-t border-slate-900" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">GET IN TOUCH</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-title">
              인식을 바꾸는 지점을 함께 설계해 보세요.
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              콘텐츠 제작 메커니즘을 꿰뚫는 실행 감각과 정량 분석 무기(GA4)를 바탕으로, 프로젝트에서 불필요한 비용을 걷어내고 소비자를 변화시키는 강력한 아이디어를 제안합니다.
            </p>
          </div>

          <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4" id="contact_links">
            {/* Email link button */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between items-center text-center space-y-2 relative">
              <Mail className="w-6 h-6 text-indigo-400" />
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">이메일 연락처</p>
                <p className="text-sm text-slate-200 mt-0.5 truncate font-mono select-all">
                  {personalInfo.email}
                </p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="text-[10px] select-none cursor-pointer border border-indigo-900 bg-indigo-950 text-indigo-300 px-3 py-1.5 rounded hover:bg-slate-800 font-semibold transition-all mt-1"
              >
                {copiedEmail ? "복사 완료! ✔" : "이메일 복사하기"}
              </button>
            </div>

            {/* Phone link button */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between items-center text-center space-y-2">
              <Phone className="w-6 h-6 text-indigo-400" />
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">전화 연락처</p>
                <p className="text-sm text-slate-200 mt-0.5 font-mono">
                  {personalInfo.phone}
                </p>
              </div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-[10px] border border-indigo-900 bg-indigo-950 text-indigo-300 px-3 py-1.5 rounded hover:bg-slate-800 font-semibold transition-all mt-1 flex items-center gap-1"
              >
                직접 통화하기 <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          <div className="text-slate-500 text-[11px] font-mono pt-8 border-t border-slate-850 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span>© 2026 Dohyeon Kim Portfolio. All Rights Reserved.</span>
            <span>Crafted with Pretendard & Paperlogy Typefaces</span>
          </div>

        </div>
      </section>
    </div>
  );
}
