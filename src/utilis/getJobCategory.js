export const getJobCategory = (job) => {
  const t = job.title.toLowerCase();
  if (t.includes("design")) return "Design";
  if (t.includes("python") || t.includes("web")) return "Development";
  if (t.includes("devops")) return "DevOps";
  if (t.includes("qa") || t.includes("quality")) return "QA";
  return "Other";
};
