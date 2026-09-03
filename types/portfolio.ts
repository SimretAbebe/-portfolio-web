export interface Project {
  id: string;
  tags: string[];
  title: string;
  description: string;
  github: string;
  liveDemo?: string;
  borderColor?: string;
  image?: string;
}

export interface Experience {
  id: string;
  date: string;
  title: string;
  org: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  text: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  skills?: string[];
  description?: string;
  image: string;
}

