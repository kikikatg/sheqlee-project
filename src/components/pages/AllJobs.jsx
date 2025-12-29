import { useState } from "react";
import SubNavbar from "../all-jobs/SubNavbar";
import JobsHeader from "../all-jobs/JobsHeader";
import JobsFilter from "../all-jobs/JobsFilter";
import LatestJobs from "../sections/LatestJobs";
import Pagination from "../common/Pagination";
import DeveloperCTA from "../sections/DeveloperCTA";
import Footer from "../footer/Footer";
import { mockJobs } from "../../data/mockJobs";

const AllJobs = () => {
  const [page, setPage] = useState(1);
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  const [hasSearched, setHasSearched] = useState(false);

  const jobsPerPage = 18;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const startIndex = (page - 1) * jobsPerPage;
  const jobsToRender = filteredJobs.slice(
    startIndex,
    startIndex + jobsPerPage
  );

  const handleApplyFilters = (filters) => {
    setHasSearched(true);
    setPage(1);

    const searchValue = filters.search.toLowerCase();

    const results = mockJobs.filter((job) =>
      job.title.toLowerCase().includes(searchValue) ||
      job.description.toLowerCase().includes(searchValue) ||
      job.company.toLowerCase().includes(searchValue)
    );

    setFilteredJobs(results);
  };

  return (
    <main className="bg-white">
      <SubNavbar />
      <JobsHeader />

      <JobsFilter onApply={handleApplyFilters} />

      {/* 🔽 First jobs section with ONLY 10px bottom spacing */}
      <div className="mb-[0px]">
        <LatestJobs
          jobs={jobsToRender}
          showHeader={false}
          isLoading={false}
          hasSearched={hasSearched}
        />
      </div>

      {/* 🔽 Second jobs section */}
      <LatestJobs
        jobs={jobsToRender}
        showHeader={false}
        isLoading={false}
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
