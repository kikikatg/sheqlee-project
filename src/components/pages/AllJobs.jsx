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
   CATEGORY DERIVATION (UNCHANGED)
-------------------------------- */
const getJobCategory = (job) => {
  const t = job.title.toLowerCase();
  if (t.includes("design")) return "Design";
  if (t.includes("python") || t.includes("web")) return "Development";
  if (t.includes("devops")) return "DevOps";
  if (t.includes("qa") || t.includes("quality")) return "QA";
  return "Other";
};

const AllJobs = () => {
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);

  /* ---------------------------------
     🔒 SAFE DUPLICATION (PAGE ONLY)
     DOES NOT AFFECT HOME PAGE
  ---------------------------------- */
  const allJobsForPage = useMemo(() => {
    return [
      ...mockJobs,
      ...mockJobs.map((job) => ({
        ...job,
        id: job.id + mockJobs.length, // ensure unique keys
      })),
    ];
  }, []);

  const [filteredJobs, setFilteredJobs] = useState(allJobsForPage);

  const jobsPerPage = 18;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const jobsToRender = filteredJobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );

  /* ---------------------------------
     FILTER HANDLER (FINAL)
  ---------------------------------- */
  const handleApplyFilters = (filters) => {
    setHasSearched(true);
    setPage(1);

    const search = filters.search.toLowerCase();

    const results = allJobsForPage.filter((job) => {
      const matchesSearch =
        !search ||
        job.title.toLowerCase().includes(search) ||
        job.description.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search);

      const matchesCategory =
        !filters.category ||
        getJobCategory(job) === filters.category;

      const matchesType =
        !filters.type || job.type === filters.type;

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
    <main className="bg-white">
      <SubNavbar title="All Jobs" />
      <JobsHeader />
      <JobsFilter onApply={handleApplyFilters} />

      <LatestJobs
        jobs={jobsToRender}
        showHeader={false}
        hasSearched={hasSearched}
      />

      {jobsToRender.length > 0 && (
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
