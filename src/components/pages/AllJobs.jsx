import { useState, useMemo } from "react";
import SubNavbar from "../all-jobs/SubNavbar";
import JobsHeader from "../all-jobs/JobsHeader";
import JobsFilter from "../all-jobs/JobsFilter";
import LatestJobs from "../sections/LatestJobs";
import Pagination from "../common/Pagination";
import DeveloperCTA from "../sections/DeveloperCTA";
import Footer from "../footer/Footer";
import { mockJobs } from "../../data/mockJobs";

/* -------------------------------
   TEMP CATEGORY DERIVATION
   (API WILL REPLACE THIS)
-------------------------------- */
const getJobCategory = (job) => {
  const t = job.title.toLowerCase();
  if (t.includes("design")) return "Design";
  if (t.includes("python") || t.includes("web")) return "Development";
  if (t.includes("devops")) return "DevOps";
  if (t.includes("qa") || t.includes("quality")) return "QA";
  return "Other";
};

const JOBS_PER_PAGE = 18;

const AllJobs = () => {
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);

  /* -------------------------------
     PAGINATION (UNCHANGED)
  -------------------------------- */
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  const jobsToRender = useMemo(() => {
    const start = (page - 1) * JOBS_PER_PAGE;
    const end = start + JOBS_PER_PAGE;
    return filteredJobs.slice(start, end);
  }, [filteredJobs, page]);

  /* -------------------------------
     APPLY FILTERS (FIXED)
  -------------------------------- */
  const handleApplyFilters = (filters) => {
    setHasSearched(true);
    setPage(1);

    const search = filters.search.trim().toLowerCase();

    const results = mockJobs.filter((job) => {
      const category = getJobCategory(job);
      const type = job.type?.toLowerCase() || "";
      const level = job.level?.toLowerCase() || "";

      /* SEARCH */
      const matchesSearch =
        !search ||
        job.title?.toLowerCase().includes(search) ||
        job.company?.toLowerCase().includes(search) ||
        job.description?.toLowerCase().includes(search) ||
        type.includes(search) ||
        level.includes(search) ||
        category.toLowerCase().includes(search);

      /* CATEGORY */
      const matchesCategory =
        !filters.category || category === filters.category;

      /* TYPE */
      const matchesType =
        !filters.type || job.type === filters.type;

      /* LEVEL */
      const matchesLevel =
        !filters.level || job.level === filters.level;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesLevel
      );
    });

    setFilteredJobs(results);
  };

  return (
    <main className="bg-white min-h-screen">
      <SubNavbar
        crumbs={[
          { label: "All Jobs", href: "/jobs", active: true },
        ]}
      />

      <JobsHeader />
      <JobsFilter onApply={handleApplyFilters} />

      <LatestJobs
        jobs={jobsToRender}
        showHeader={false}
        hasSearched={hasSearched}
      />

      {filteredJobs.length > JOBS_PER_PAGE && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default AllJobs;
