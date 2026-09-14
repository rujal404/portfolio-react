export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  highlight: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'design' | 'dev' | 'research' | 'systems' | 'web';
  iconName: 'draw' | 'code' | 'psychology' | 'layers' | 'notebookpen';
  proficiency: number; // 0-100
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  details: {
    client: string;
    role: string;
    timeline: string;
    challenge: string;
    solution: string;
    impact: string[];
    tags: string[];
  };
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
