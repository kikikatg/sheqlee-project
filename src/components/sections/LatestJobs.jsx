import JobCard from "../job/JobCard";
import { mockJobs } from "../../data/mockJobs";

const LatestJobs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Latest job posts
          </h2>

          {/* ✅ FIXED RIGHT LINK */}
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <span
              className="
                border-b-2 border-purple-700
                pb-0.5
                transition-colors duration-200
                hover:text-blue-600
                hover:border-blue-600
              "
            >
              745+ more
            </span>
            jobs
            <img
              src="/icons/arrow-right.svg"
              alt=""
              className="w-4 h-4 ml-0.5"
            />
          </button>
        </div>

        {/* 3 × 3 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockJobs.slice(0, 9).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestJobs;
