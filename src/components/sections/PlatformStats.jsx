import StatCard from "../platform/StatCard";
import { mockStats } from "../../data/mockStats";
import PlatformStatsSkeleton from "../skeletons/PlatformStatsSkeleton";

const PlatformStats = () => {
  const isLoading = false;

  return (
    <>
      {/* ================= CTA STRIP ================= */}
      {/* 🔧 STEP 7: responsive layout */}
      <section className="bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="flex items-center gap-5">
            <img
              src="/icons/celebration.png"
              alt=""
              className="w-8 h-8 flex-shrink-0"
            />
            <p className="text-xl font-medium text-gray-900">
              Are you a software developer in Ethiopia?
            </p>
          </div>

          <button className=" bg-[#8967B3] text-white text-lg font-medium px-5 py-2 rounded-md hover:opacity-90 transition w-full sm:w-auto">
            Sign up
          </button>

        </div>
      </section>

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
