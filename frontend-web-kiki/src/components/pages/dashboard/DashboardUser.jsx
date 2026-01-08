import { useState, useMemo } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import LatestJobs from "../../sections/LatestJobs";
import Pagination from "../../common/Pagination";
import Footer from "../../footer/Footer";
import JobsFilterDashboard from "./JobsFilterDashboard";
import { mockJobs } from "../../../data/mockJobs";
import NotFound from "../not-found/NotFound"; // reusable NotFound

const JOBS_PER_PAGE = 12;

const DashboardUser = () => {
  const [page, setPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);

  // recalc total pages dynamically
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  const jobsToRender = useMemo(() => {
    const start = (page - 1) * JOBS_PER_PAGE;
    return filteredJobs.slice(start, start + JOBS_PER_PAGE);
  }, [filteredJobs, page]);

  /* -------------------------------
     APPLY FILTERS
  -------------------------------- */
  const handleApplyFilters = (filters) => {
    setPage(1);

    const results = mockJobs.filter((job) => {
      const matchesCategory =
        !filters.category || job.category === filters.category;

      const matchesType = !filters.type || job.type === filters.type;

      const matchesLevel = !filters.level || job.level === filters.level;

      const matchesTag = !filters.tag || job.tags?.includes(filters.tag);

      return matchesCategory && matchesType && matchesLevel && matchesTag;
    });

    setFilteredJobs(results);
  };

  // ----------------------- Render -----------------------
  // if no jobs found, show NotFound WITHOUT breadcrumb or footer
  if (filteredJobs.length === 0) {
    return <NotFound message="No jobs found for the selected filters." />;
  }

  return (
    <main className="bg-white mb-16 min-h-screen">
      {/* ===== BREADCRUMB ===== */}
      <SubNavbar
        crumbs={[{ label: "Dashboard", href: "/dashboard", active: true }]}
      />

      {/* ===== HEADER ===== */}
      <section className="w-full mt-16 md:mt-24">
        <div className="flex flex-col items-center text-center gap-4 max-w-[800px] mx-auto px-4">
          <img
            src="/icons/dashboard.svg"
            alt="Dashboard"
            className="w-8 h-8 mt-1"
          />

          <div>
            <h1 className="text-black font-semibold text-[40px] leading-[1.1]">
              Dashboard
            </h1>

            <p className="mt-4 text-black text-[20px] max-w-[800px]">
              These are jobs for you based on your skills.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FILTERS ===== */}
      <JobsFilterDashboard onApply={handleApplyFilters} />

      {/* ===== JOBS ===== */}
      <LatestJobs jobs={jobsToRender} showHeader={false} />

      {/* ===== PAGINATION ===== */}
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

export default DashboardUser;
