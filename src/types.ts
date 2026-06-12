export interface StoryStage {
  id: string;
  stepNumber: string;
  badge: string;
  title: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string;
  change?: string;
}

export interface ProjectData {
  id: string;
  category: "STRATEGY" | "DATA & GROWTH" | "CONTENT" | "PRODUCTION";
  title: string;
  subtitle: string;
  challenge?: string;
  insight?: string;
  action?: string;
  result?: string;
  metrics: Metric[];
  period: string;
  role: string;
  tools: string[];
  color: string; // Tailwind tint class like 'blue', 'purple', 'emerald'
}

export interface SkillGroup {
  category: string;
  skills: { name: string; iconName: string }[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  description?: string;
  bulletPoints?: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  school: string;
  status: string;
}
