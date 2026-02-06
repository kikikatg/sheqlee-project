import StatCard from "../platform/StatCard";
import { mockStats } from "../../data/mockStats";
import PlatformStatsSkeleton from "../skeletons/PlatformStatsSkeleton";

const PlatformStats = () => {
  const isLoading = false;

  return (
    <>
      {/* ================= PLATFORM STATS ================= */}
      {/* 🔧 STEP 7: spacing + grid responsiveness */}
      <section className="bg-white py-12 sm:py-16 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* TITLE */}
          <h2 className="text-center text-[22px] sm:text-[24px] lg:text-[50px] md:text-[26px] font-semibold text-gray-900 mb-10 lg:mb-14 sm:mb-12">
            Platform stats
          </h2>

          {/* STATS GRID */}
          {isLoading ? (
            <PlatformStatsSkeleton />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {mockStats.map((stat) => (
                <StatCard key={stat.id} {...stat} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PlatformStats;
