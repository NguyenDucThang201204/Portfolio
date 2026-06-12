export const personal = {
  name: "Nguyen Duc Thang",
  role: "Backend Developer",
  email: "thangnguyenduc2004@gmail.com",
  phone: "0967175376",
  location: "Tan Binh District, Ho Chi Minh City",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-th%E1%BA%AFng-4927a9304",
  dob: "20/12/2004",
};

export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["C#"],
  },
  {
    group: "Backend",
    items: ["ASP.NET Core Web API", "EF Core", "ASP.NET Identity", "SignalR", "Hangfire"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "SQL Server", "Redis", "Supabase (pgvector)"],
  },
  {
    group: "DevOps & Cloud",
    items: ["Docker", "DigitalOcean", "Azure AI Services", "Git", "GitHub"],
  },
  {
    group: "Testing & Tools",
    items: ["NUnit", "Postman", "Jira", "Copilot", "Codex", "Claude Code", "Fork"],
  },
  {
    group: "Integrations",
    items: ["VNPay", "Cloudinary", "Resend", "JWT"],
  },
];

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Backend Developer",
    company: "FPT Software",
    period: "April 2025 – June 2025",
    bullets: [
      "Analyzed test case reports to understand requirements and expected system behaviors.",
      "Implemented Unit Tests in .NET based on documented test cases to verify backend logic.",
      "Reported progress to manager at the end of each working session.",
    ],
  },
  {
    title: "Manual Tester",
    company: "FPT Software",
    period: "January 2025 – March 2025",
    bullets: [
      "Participated in daily standup meetings, received task assignments, and tracked progress with the development team.",
      "Designed and executed test cases for assigned UI screens and authentication flows.",
      "Identified, documented, and reported bugs with detailed reproduction steps and severity levels.",
    ],
  },
];

export interface ProjectFeature {
  label: string;
}

export interface ProjectItem {
  name: string;
  subtitle: string;
  role: string;
  period: string;
  teamSize: number;
  description: string;
  tech: string[];
  features: ProjectFeature[];
  repoUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "PlantDecor",
    subtitle: "Smart Plant & Interior Green Design with AI Assistant",
    role: "Backend Developer",
    period: "January 2026 – April 2026",
    teamSize: 5,
    repoUrl: "https://github.com/plant-decor/KLTN_PlantDecor_BE",
    description:
      "An e-commerce and interior green design service platform with an AI assistant that provides semantic product recommendations and plant consulting based on user context.",
    tech: [
      "ASP.NET Core API",
      "EF Core",
      "Redis",
      "Hangfire",
      "SignalR",
      "PostgreSQL",
      "Azure AI",
      "NUnit",
      "pgvector",
      "VNPay",
      "Cloudinary",
      "Resend",
      "Docker",
      "JWT",
    ],
    features: [
      { label: "JWT Auth with Role-Based Access Control (RBAC)" },
      { label: "Shopping Cart & Order Management" },
      { label: "VNPay Payment Gateway Integration" },
      { label: "AI Semantic Search with tier-based token quota (pgvector + Azure OpenAI)" },
      { label: "Real-time Chat between customers and consultants via SignalR" },
    ],
  },
];

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  gpaMax: string;
}

export const education: EducationItem = {
  institution: "FPT University",
  degree: "Computer Software Engineering",
  period: "October 2022 – July 2026 (Expected)",
  gpa: "3.3",
  gpaMax: "4.0",
};

export interface AwardItem {
  semester: string;
  title: string;
  tier: "gold" | "silver" | "purple";
}

export const awards: AwardItem[] = [
  {
    semester: "Fall 2025",
    title: "Top 100 Excellent Students of Trimester",
    tier: "gold",
  },
  {
    semester: "Summer 2025",
    title: "Honorable Student of Trimester",
    tier: "silver",
  },
  {
    semester: "Summer 2024",
    title: "Honorable Student of Trimester",
    tier: "silver",
  },
  {
    semester: "Spring 2024",
    title: "Excellent Student of Trimester",
    tier: "purple",
  },
];

export interface CertItem {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export const certifications: CertItem[] = [
  {
    name: "Software Development Lifecycle",
    issuer: "Coursera",
    date: "May 2024",
    url: "https://coursera.org/share/7112d74fe54f341b2adfebbfd7154f88",
  },
  {
    name: "Basics of Web Development & Coding",
    issuer: "Coursera",
    date: "March 2024",
    url: "https://coursera.org/share/ac6bebbf16e63259e7318709df3fdd29",
  },
];
