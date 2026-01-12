/* --------------------------------
   SHARED JOB CONSTANTS
   (API READY)
-------------------------------- */

export const JOB_CATEGORIES = [
  "Design",
  "Development",
  "DevOps",
  "QA",
  "Other",
];

export const JOB_TYPES = [
  "Full-Time",
  "Part-Time",
  "Contract",
  "Freelance",
  "Remote",
  "Internship",
];

/* --------------------------------
   JOB LEVELS
-------------------------------- */
export const JOB_LEVELS = ["Junior", "Intermediate", "Expert"];

/* --------------------------------
   SALARY CONFIG
-------------------------------- */
export const SALARY_CURRENCIES = ["$", "€", "£"];

export const SALARY_TYPES = ["/hour", "/month", "/project"];

/* --------------------------------
   SKILLS
-------------------------------- */
export const SKILLS = [
  // Frontend
  "React",
  "Vue",
  "Angular",
  "Next.js",
  "Tailwind CSS",
  "Flutter",

  // Backend
  "Node.js",
  "Express",
  "NestJS",
  "Django",
  "Laravel",

  // Databases
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase",

  // Cloud / DevOps
  "AWS",
  "Docker",
  "Kubernetes",

  // Design
  "UI Design",
  "UX Design",
  "Figma",
  "Graphic Design",

  // Other
  "REST API",
  "GraphQL",
  "Testing",
];

/* --------------------------------
   TEMP CATEGORY DERIVATION
   (REMOVED WHEN API ADDS category)
-------------------------------- */
export const getJobCategory = (job) => {
  const t = job.title?.toLowerCase() || "";
  if (t.includes("design")) return "Design";
  if (t.includes("python") || t.includes("developer") || t.includes("web"))
    return "Development";
  if (t.includes("devops")) return "DevOps";
  if (t.includes("qa") || t.includes("quality")) return "QA";
  return "Other";
};
