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

export const JOB_LEVELS = [
  "Junior",
  "Intermediate",
  "Expert",
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
