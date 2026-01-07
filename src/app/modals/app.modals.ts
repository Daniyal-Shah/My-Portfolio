export interface Experience {
  id: number;
  title: string; // e.g. "Creative Director"
  company: string; // e.g. "ABC Corp"
  logoUrl?: string; // optional logo
  startYear: Date; // or Date
  endYear?: Date | 'Present';
  description?: string; // description
  points?: string[]; // bullet points
  certificates?: string[];
  projects?: Project[];
}

export interface Education {
  id: number;
  degree: string; // e.g. "Creative Director"
  institute: string; // e.g. "ABC Corp"
  logoUrl?: string; // optional logo
  startYear: Date; // or Date
  endYear?: Date | 'Present';
  description?: string; // description
  points?: string[]; // bullet points
  certificates?: string[];
}

export interface Project {
  id: number;
  title: string;
  playStoreLink?: string;
  appStoreLink?: string;
  description?: string;
  pictures?: string;
  videos?: any;
  points?: string[];
}

export interface Skill {
  id: number;
  name: string;
  level?: Level;
  yearsOfExperience?: number;
  icon?: string;
}

export type Level = 'Beginner' | 'Advanced' | 'Expert';
