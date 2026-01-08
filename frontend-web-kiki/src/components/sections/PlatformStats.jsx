import StatCard from "../platform/StatCard";
import { mockStats } from "../../data/mockStats";
import PlatformStatsSkeleton from "../skeletons/PlatformStatsSkeleton";
import DeveloperCTA from "./DeveloperCTA";
const PlatformStats = () => {
  const isLoading = false;

  return (
    <>
     <DeveloperCTA/>
      {/* ================= PLATFORM STATS ================= */}
      {/* 🔧 STEP 7: spacing + grid responsiveness */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          {/* TITLE */}
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-10 sm:mb-12">
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
