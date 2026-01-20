import { Link } from "react-router-dom";
import JobCard from "../job/JobCard";
import LatestJobsSkeleton from "../skeletons/LatestJobsSkeleton";
import NoResults from "../common/NoResults";

const LatestJobs = ({
  jobs = [],
  limit = null,
  showHeader = true,
  isLoading = false,
  hasSearched = false,
}) => {
  const hasResults = jobs.length > 0;
  const visibleJobs = limit ? jobs.slice(0, limit) : jobs;

  return (
    <section className="bg-white py-12 sm:py-16 font-['Kantumruy_Pro'] lg:py-16 mx-12">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">
        {/* ================= HEADER ================= */}
        {showHeader && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="lg:text-[32px] sm:text-[24px] mx-4 font-semibold">
              Latest job posts
            </h2>

            {/* MORE JOBS LINK */}
            <Link
              to="/all-jobs"
              className="
                relative
                flex items-center gap-2   /* ✅ FIX */
                text-sm sm:text-[16px]
                font-medium
                text-black
                hover:text-[#8967B3]
                transition-colors
                after:content-['']
                after:absolute
                after:left-1/3
                after:-translate-x-3/4
                after:-bottom-[10px]
                after:w-[50px]
                after:h-[5px]
                after:bg-[#8967B3]
              "
            >
              <span>{jobs.length}+ more jobs</span>

              <img
                src="/icons/arrow-right.svg"
                alt="Next"
                className="w-4 h-4"
              />
            </Link>
          </div>
        )}

        {/* ================= LOADING ================= */}
        {isLoading && <LatestJobsSkeleton />}

        {/* ================= NO RESULTS ================= */}
        {!isLoading && hasSearched && !hasResults && (
          <NoResults message="No results found" />
        )}

        {/* ================= JOB GRID ================= */}
        {!isLoading && hasResults && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestJobs;
