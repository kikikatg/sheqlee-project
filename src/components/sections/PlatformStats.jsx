import StatCard from "../platform/StatCard";
import { mockStats } from "../../data/mockStats";

const PlatformStats = () => {
  return (
    <>
      {/* ================= CTA STRIP ================= */}
      <section className="bg-gray-200 ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <img
              src="/icons/celebration.png"
              alt=""
              className="w-6 h-6"
            />
            <p className="text-sm font-medium text-gray-900">
              Are you a software developer in Ethiopia?
            </p>
          </div>

          <button className="bg-[#6F4BB8] text-white text-sm font-medium px-5 py-2 rounded-md hover:opacity-90 transition">
            Sign up
          </button>

        </div>
      </section>

      {/* ================= PLATFORM STATS ================= */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
            Platform statistics
          </h2>

          {/* STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {mockStats.map((stat) => (
              <StatCard
                key={stat.id}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default PlatformStats;
