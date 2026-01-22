import { Link } from "react-router-dom";
import TagCard from "../common/TagCard";
import { mockTags } from "../../data/mockTags";
import PopularTagsSkeleton from "../skeletons/PopularTagsSkeleton";
import { useState } from "react";
const PopularTags = () => {
  const isLoading = false; // later from API
  const [activeSlide, setActiveSlide] = useState(0); // 0 = first slide, 1 = second, 2 = third
  const popularTags = mockTags.slice(0, 6); // only 6 tags

  const mobileSlides = [];
  for (let i = 0; i < popularTags.length; i += 3) {
    mobileSlides.push(popularTags.slice(i, i + 3));
  }
  return (
    <section className="bg-[#F7F7F7] w-full font-['Kantumruy_Pro']">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-14">
        {/* HEADER */}
        <div className="flex flex-row items-center justify-between mb-14 w-full">
          <h2 className="text-xl sm:text-[35px] font-semibold text-gray-900">
            Popular tags
          </h2>
          <Link
            to="/tags"
            className="text-sm sm:text-[16px] font-medium text-black hover:text-[#8967B3] transition-colors"
          >
            <span>{mockTags.length - popularTags.length}+ more tags</span>
            <img
              src="/icons/arrow-right.svg"
              alt="Next"
              className="inline w-4 h-4 ml-2"
            />
          </Link>
        </div>

        {isLoading ? (
          <PopularTagsSkeleton />
        ) : (
          <>
            {/* MOBILE */}
            <div className="sm:hidden">
              <div className="flex flex-col gap-6">
                {mobileSlides[activeSlide].map((tag) => (
                  <TagCard
                    key={tag.id}
                    name={tag.name}
                    jobs={tag.jobs}
                    subscribers={tag.subscribers}
                  />
                ))}
              </div>

              {/* Slider dots */}
              <div className="flex items-center justify-center gap-3 mt-6">
                {[0, 1, 2].map((dotIndex) => (
                  <img
                    key={dotIndex}
                    src={`/icons/Ellipse ${dotIndex === activeSlide ? 51 : 52}.svg`}
                    className={`w-3 h-3 cursor-pointer ${
                      dotIndex >= mobileSlides.length
                        ? "opacity-30 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() => {
                      if (dotIndex < mobileSlides.length)
                        setActiveSlide(dotIndex);
                    }}
                    alt={`Slide ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-10 gap-x-20">
              {popularTags.map((tag) => (
                <TagCard
                  key={tag.id}
                  name={tag.name}
                  jobs={tag.jobs}
                  subscribers={tag.subscribers}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PopularTags;
