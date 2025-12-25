import TagCard from "../common/TagCard";
import { mockTags } from "../../data/mockTags";

const PopularTags = () => {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[22px] font-semibold text-gray-900">
            Popular tags
          </h2>

          <button className="flex items-center gap-1 text-[14px] font-medium text-gray-700">
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

            {/* SAFE ICON (no import, no crash) */}
            <img
              src="/icons/arrow-right.svg"
              alt=""
              className="w-4 h-4 ml-0.5"
            />
          </button>
        </div>

        {/* Tags Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockTags.map((tag) => (
            <TagCard
              key={tag.id}
              name={tag.name}
              jobs={tag.jobs}
              subscribers={tag.subscribers}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularTags;
