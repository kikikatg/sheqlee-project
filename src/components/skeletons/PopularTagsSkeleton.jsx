const PopularTagsSkeleton = () => {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-5">
          {/* Title */}
          <div className="skeleton h-6 w-32"></div>

          {/* 🔧 FIXED: RIGHT LINK SHIMMER (text + purple underline + arrow) */}
          <div className="flex items-center gap-2">
            <div className="relative">
              {/* text shimmer */}
              <div className="shimmer h-4 w-20 rounded-sm"></div>

              {/* purple underline shimmer */}
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-purple-700 shimmer"></div>
            </div>

            {/* arrow shimmer */}
            <div className="shimmer h-4 w-4 rounded-sm"></div>
          </div>
        </div>

        {/* TAGS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton h-16 rounded-xl"></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularTagsSkeleton;
