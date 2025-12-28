import TagCard from "../common/TagCard";
import { mockTags } from "../../data/mockTags";
import PopularTagsSkeleton from "../skeletons/PopularTagsSkeleton";

const PopularTags = () => {
  const isLoading = false; // later from API
<div className="skeleton h-4 w-24 rounded-md "></div>

  return (
    /* 🔧 STEP 5: responsive section background */
    <section className="bg-[#F7F7F7] w-full font-['Kantumruy_Pro p-8">
      <div className="max-w-[1500px]  mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          {/* Title */}
          <h2 className="text-xl sm:text-[32px] font-semibold text-gray-1000 Kantumruy Pro">
            Popular tags
          </h2>

          {/* More tags button */}
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700 self-start sm:self-auto">
            <span
              className="
                border-b-2 border-purple-700
                pb-0.5
                transition-colors duration-200
                hover:text-blue-600
                hover:border-blue-600
              "
            >
              73+ more
            </span>
            tags

            {/* Arrow icon */}
            <img
              src="/icons/arrow-right.svg"
              alt=""
              className="w-4 h-4 ml-0.5"
            />
          </button>
        </div>

        {/* TAGS GRID */}
        {isLoading ? (
  <PopularTagsSkeleton />
) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {mockTags.map((tag) => (
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
