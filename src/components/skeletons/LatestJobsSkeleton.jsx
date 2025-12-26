const LatestJobsSkeleton = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div className="skeleton h-6 w-40"></div>

          {/* ✅ FIXED: RIGHT LINK SHIMMER */}
          <div className="flex items-center gap-2">
            <div className="skeleton h-4 w-24"></div>
            <div className="skeleton h-4 w-4"></div>
          </div>
        </div>

        {/* JOB CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="soft-card p-5 rounded-xl bg-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="skeleton h-4 w-36 mb-3"></div>
                <div className="skeleton h-3 w-full mb-2"></div>
                <div className="skeleton h-3 w-5/6 mb-6"></div>

                <div className="flex gap-2 mb-3">
                  <div className="skeleton h-5 w-20"></div>
                  <div className="skeleton h-5 w-24"></div>
                  <div className="skeleton h-5 w-16"></div>
                </div>
              </div>

              {/* APPLY BUTTON — PURPLE SHIMMER */}
              <div className="flex justify-end">
                <div className="skeleton-outline h-7 w-20"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestJobsSkeleton;
