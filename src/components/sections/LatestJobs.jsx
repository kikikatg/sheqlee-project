import JobCard from "../job/JobCard";
import LatestJobsSkeleton from "../skeletons/LatestJobsSkeleton";
import NoResults from "../common/NoResults";

const LatestJobs = ({
  jobs = [],
  showHeader = true,
  isLoading = false,
  hasSearched = false,
}) => {
  const hasResults = jobs.length > 0;

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {showHeader && (
          <h2 className="text-xl sm:text-2xl font-semibold mb-8">
            Latest job posts
          </h2>
        )}

        {isLoading && <LatestJobsSkeleton />}

        {!isLoading && hasSearched && !hasResults && (
          <NoResults message="No results found" />
        )}

        {!isLoading && hasResults && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default LatestJobs;
