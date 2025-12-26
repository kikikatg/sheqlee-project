import JobCard from "../job/JobCard";
import { mockJobs } from "../../data/mockJobs";
import LatestJobsSkeleton from "../skeletons/LatestJobsSkeleton";

const LatestJobs = () => {
  const isLoading = false;
<div className="skeleton h-4 w-24 rounded-md"></div>

  return (
    /* 🔧 STEP 6: responsive spacing */
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Latest job posts
          </h2>

          {/* More jobs link */}
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700 self-start sm:self-auto">
            <span
              className="
                border-b-2 border-purple-800
                pb-0.5
                transition-colors duration-200
                hover:text-blue-600
                hover:border-blue-600
              "
            >
              745+ more</span>
            jobs
            <img
              src="/icons/arrow-right.svg"
              alt=""
              className="w-4 h-3 ml-0.5"
            />
          </button>
        </div>

        {/* JOBS GRID */}
      {isLoading ? (
  <LatestJobsSkeleton />
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {mockJobs.slice(0, 9).map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </div>
)}


      </div>
    </section>
  );
};

export default LatestJobs;
