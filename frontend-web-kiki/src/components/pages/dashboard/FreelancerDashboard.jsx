import { useState, useMemo, useEffect } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import LatestJobs from "../../sections/LatestJobs";
import Pagination from "../../common/Pagination";
import FreelancerJobsFilterDashboard from "./FreelancerJobsFilterDashboard";
import { mockJobs } from "../../../data/mockJobs";
import NotResults from "../../common/NoResults";
import { getJobCategory } from "../../../data/jobConstants";
import NoResults from "../../common/NoResults";

const DESKTOP_JOBS_PER_PAGE = 12;
const MOBILE_JOBS_PER_PAGE = 6;

const FreelancerDashboard = () => {
  const [page, setPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const jobsPerPage = isMobile ? MOBILE_JOBS_PER_PAGE : DESKTOP_JOBS_PER_PAGE;

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const hasNoResults = filteredJobs.length === 0;

  const jobsToRender = useMemo(() => {
    const start = (page - 1) * jobsPerPage;
    return filteredJobs.slice(start, start + jobsPerPage);
  }, [filteredJobs, page, jobsPerPage]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          (tag) => tag.toLowerCase() === filters.tag.toLowerCase(),
        );

      return matchesCategory && matchesType && matchesLevel && matchesTag;
    });

    setFilteredJobs(results);
  };

  return (
    <main className="bg-white mb-16 min-h-screen">
      <div className="hidden md:block">
        <SubNavbar
          crumbs={[{ label: "Dashboard", href: "/dashboard", active: true }]}
        />
      </div>

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

      {hasNoResults ? (
        <NoResults />
      ) : (
        <>
          <LatestJobs
            jobs={jobsToRender}
            showHeader={false}
            disableMobileSlider
            applyVariant="freelancer"
          />

          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
              variant="dashboard"
            />
          )}
        </>
      )}
    </main>
  );
};

export default FreelancerDashboard;
