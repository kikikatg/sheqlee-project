import { Link } from "react-router-dom";
import TagCard from "../common/TagCard";
import { mockTags } from "../../data/mockTags";
import PopularTagsSkeleton from "../skeletons/PopularTagsSkeleton";

const PopularTags = () => {
  const isLoading = false; // later from API

  // ✅ Home page should only show 6 tags (preview)
  const popularTags = mockTags.slice(0, 6);

  return (
    <section className="bg-[#F7F7F7] w-full font-['Kantumruy_Pro']">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-[32px] font-semibold text-gray-900">
            Popular tags
          </h2>

          {/* dynamic total */}
          <Link
            to="/tags"
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
            <span> {mockTags.length - popularTags.length}+ more tags </span>
            <img
              src="/icons/arrow-right.svg"
              alt="Next"
              className="w-4 h-4 mt-[1px]"
            />
          </Link>
        </div>

        {/* TAGS GRID */}
        {isLoading ? (
          <PopularTagsSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {popularTags.map((tag) => (
              <TagCard
                key={tag.id}
                name={tag.name}
                jobs={tag.jobs}
                subscribers={tag.subscribers}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularTags;
