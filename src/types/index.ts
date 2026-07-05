export interface PersonalData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

export interface AboutData {
  description: string;
}

export interface ExperienceData {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface PolicyData {
  type: string;
  urlname: string;
  url: string;
  content: string;
}

export interface ProjectData {
  name: string;
  policies?: PolicyData[];
  description: string;
  tech: string[];
  link: string;
}

export interface AppData {
  name: string;
  playstore?: string;
  appstore?: string;
}

export interface CTAData {
  primary: string;
  secondary: string;
}

export interface PortfolioData {
  personal: PersonalData;
  about: AboutData;
  skills: string[];
  experience: ExperienceData[];
  projects: ProjectData[];
  apps: AppData[];
  cta: CTAData;
}
