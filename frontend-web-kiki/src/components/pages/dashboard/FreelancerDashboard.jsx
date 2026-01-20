import { useState, useMemo } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import LatestJobs from "../../sections/LatestJobs";
import Pagination from "../../common/Pagination";
import FreelancerJobsFilterDashboard from "./FreelancerJobsFilterDashboard";
import { mockJobs } from "../../../data/mockJobs";
import NotFound from "../not-found/NotFound";
import { getJobCategory } from "../../../data/jobConstants";

const JOBS_PER_PAGE = 12;

const FreelancerDashboard = () => {
  const [page, setPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  const jobsToRender = useMemo(() => {
    const start = (page - 1) * JOBS_PER_PAGE;
    return filteredJobs.slice(start, start + JOBS_PER_PAGE);
  }, [filteredJobs, page]);

  /* -------------------------------
     APPLY FILTERS (FIXED)
  -------------------------------- */
  const handleApplyFilters = (filters) => {
    setPage(1);

    const results = mockJobs.filter((job) => {
      /* CATEGORY */
      const matchesCategory =
        !filters.category || getJobCategory(job) === filters.category;

      /* TYPE */
      const matchesType = !filters.type || job.type === filters.type;

      /* LEVEL */
      const matchesLevel = !filters.level || job.level === filters.level;

      /* TAGS (FIXED ✅) */
      const matchesTag =
        !filters.tag ||
        job.details?.tags?.some(
          (tag) => tag.toLowerCase() === filters.tag.toLowerCase()
        );

      return matchesCategory && matchesType && matchesLevel && matchesTag;
    });

    setFilteredJobs(results);
  };

  return (
    <main className="bg-white mb-16 min-h-screen">
      <SubNavbar
        crumbs={[{ label: "Dashboard", href: "/dashboard", active: true }]}
      />

      <section className="w-full mt-16 md:mt-24">
        <div className="flex flex-col items-center text-center gap-4 max-w-[800px] mx-auto px-4">
          <img src="/icons/dashboard.svg" alt="Dashboard" className="w-8 h-8" />
          <h1 className="text-black font-semibold text-[40px]">Dashboard</h1>
          <p className="text-black text-[20px]">
            These are jobs for you based on your skills.
          </p>
        </div>
      </section>

      <FreelancerJobsFilterDashboard onApply={handleApplyFilters} />

      <LatestJobs jobs={jobsToRender} showHeader={false} />

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
          variant="dashboard"
        />
      )}
    </main>
  );
};

export default FreelancerDashboard;
