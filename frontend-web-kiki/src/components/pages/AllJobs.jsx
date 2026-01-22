import { useState, useMemo, useEffect } from "react";
import SubNavbar from "../all-jobs/SubNavbar";
import JobsHeader from "../all-jobs/JobsHeader";
import JobsFilter from "../all-jobs/JobsFilter";
import LatestJobs from "../sections/LatestJobs";
import Pagination from "../common/Pagination";
import DeveloperCTA from "../sections/DeveloperCTA";
import Footer from "../footer/Footer";

import { mockJobs } from "../../data/mockJobs";
import { getJobCategory } from "../../data/jobConstants";

const AllJobs = () => {
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  const [isMobile, setIsMobile] = useState(false);
  const JOBS_PER_PAGE = isMobile ? 6 : 18;

  /* -------------------------------
     SAFE PAGE CHANGE (🔥 FIX)
  -------------------------------- */
  const handlePageChange = (nextPage) => {
    const maxPage = Math.max(1, Math.ceil(filteredJobs.length / JOBS_PER_PAGE));

    setPage(Math.min(Math.max(1, nextPage), maxPage));
  };

  /* -------------------------------
     JOBS TO RENDER
  -------------------------------- */

  const jobsToRender = useMemo(() => {
    const start = (page - 1) * JOBS_PER_PAGE;
    return filteredJobs.slice(start, start + JOBS_PER_PAGE);
  }, [filteredJobs, page, JOBS_PER_PAGE]);

  /* -------------------------------
     APPLY FILTERS
  -------------------------------- */
  const handleApplyFilters = (filters) => {
    setHasSearched(true);
    setPage(1);

    const search = filters.search.trim().toLowerCase();

    const results = mockJobs.filter((job) => {
      const category = getJobCategory(job);

      const matchesSearch =
        !search ||
        job.title?.toLowerCase().includes(search) ||
        job.company?.toLowerCase().includes(search) ||
        job.description?.toLowerCase().includes(search) ||
        job.type?.toLowerCase().includes(search) ||
        job.level?.toLowerCase().includes(search) ||
        category.toLowerCase().includes(search);

      const matchesCategory =
        !filters.category || category === filters.category;

      const matchesType = !filters.type || job.type === filters.type;

      const matchesLevel = !filters.level || job.level === filters.level;

      return matchesSearch && matchesCategory && matchesType && matchesLevel;
    });

    setFilteredJobs(results);
  };
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {!isMobile && (
        <SubNavbar
          crumbs={[{ label: "All Jobs", href: "/jobs", active: true }]}
        />
      )}

      <JobsHeader />
      <JobsFilter onApply={handleApplyFilters} />
      <LatestJobs
        jobs={jobsToRender}
        showHeader={false}
        hasSearched={hasSearched}
        disableMobileSlider={true}
      />

      {filteredJobs.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(filteredJobs.length / JOBS_PER_PAGE)}
          onPageChange={handlePageChange}
          variant="all"
        />
      )}

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default AllJobs;
