import { Link } from "react-router-dom";
import JobCard from "../job/JobCard";
import LatestJobsSkeleton from "../skeletons/LatestJobsSkeleton";
import NoResults from "../common/NoResults";
import { useState, useEffect, useMemo } from "react";

const LatestJobs = ({
  jobs = [],
  limit = null,
  showHeader = true,
  isLoading = false,
  hasSearched = false,
  disableMobileSlider = false,
}) => {
  const hasResults = jobs.length > 0;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* -------------------------------
     DETECT MOBILE
  -------------------------------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleJobs = limit ? jobs.slice(0, limit) : jobs;

  /* -------------------------------
     MOBILE SLIDES (ONLY WHEN SLIDER ENABLED)
     3 JOBS PER SLIDE
  -------------------------------- */
  const mobileSlides = useMemo(() => {
    if (disableMobileSlider) return [];

    const slides = [];
    const sliced = visibleJobs.slice(0, 9); // ONLY 9 FOR LATEST JOBS

    for (let i = 0; i < sliced.length; i += 3) {
      slides.push(sliced.slice(i, i + 3));
    }
    return slides;
  }, [visibleJobs, disableMobileSlider]);

  return (
    <section className="bg-white py-12 sm:py-16 font-['Kantumruy_Pro'] lg:py-16 mx-12">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">
        {/* ================= HEADER ================= */}
        {showHeader && (
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl sm:text-[35px] font-semibold">
              Latest job posts
            </h2>

            <Link
              to="/all-jobs"
              className="flex items-center text-sm sm:text-[16px]"
            >
              <span>{jobs.length}+ more jobs</span>
              <img
                src="/icons/arrow-right.svg"
                alt="Next"
                className="w-4 h-4 ml-2"
              />
            </Link>
          </div>
        )}

        {/* ================= LOADING ================= */}
        {isLoading && <LatestJobsSkeleton />}

        {/* ================= NO RESULTS ================= */}
        {!isLoading && hasSearched && !hasResults && (
          <NoResults message="No results found" />
        )}

        {/* ================= DESKTOP GRID ================= */}
        {!isLoading && hasResults && !isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleJobs.map((job) => (
              <JobCard key={job.id} job={job} isMobile={false} />
            ))}
          </div>
        )}

        {/* ================= MOBILE GRID (ALL JOBS PAGE) ================= */}
        {!isLoading && hasResults && isMobile && disableMobileSlider && (
          <div className="grid grid-cols-1 gap-6 sm:hidden">
            {visibleJobs.map((job) => (
              <JobCard key={job.id} job={job} isMobile />
            ))}
          </div>
        )}

        {/* ================= MOBILE SLIDER (LATEST JOBS PAGE) ================= */}
        {!isLoading && hasResults && isMobile && !disableMobileSlider && (
          <div className="sm:hidden">
            <div className="flex flex-col gap-6">
              {mobileSlides[activeSlide]?.map((job) => (
                <JobCard key={job.id} job={job} isMobile />
              ))}
            </div>

            {/* SLIDER DOTS */}
            <div className="flex justify-center gap-3 mt-6">
              {mobileSlides.map((_, index) => (
                <img
                  key={index}
                  src={
                    activeSlide === index
                      ? "/icons/Ellipse 51.svg"
                      : "/icons/Ellipse 52.svg"
                  }
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => setActiveSlide(index)}
                  alt={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestJobs;
