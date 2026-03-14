// ─── Core Types ───────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  icon: string; // react-icons component name
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'database';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageColor: string; // gradient for card bg
  featured?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
  grade?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  bio: string;
  careerObjective: string;
  profileImage: string;
  resumeUrl: string;
  education: Education[];
  skills: Skill[];
  projects: Project[];
  socialLinks: SocialLink[];
  contact: ContactInfo;
}

// ─── Form Types ───────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  to: string;
}
