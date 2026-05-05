export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface SoftwareProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  highlight: boolean;
}

export interface ResearchProject {
  id: string;
  title: string;
  abstract: string;
  authors: string;
  venue?: string;
  paperUrl?: string;
  codeUrl?: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  type: "work" | "education";
}
