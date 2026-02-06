import { Link } from "react-router-dom";
import Home from "../Home";
import LatestJobs from "../../sections/LatestJobs";
import PopularTags from "../../sections/PopularTags";
import { mockJobs } from "../../../data/mockJobs";

const topSixJobs = mockJobs.slice(0, 6);

const FreelancerHomePage = () => {
  return (
    <>
      {/* ================= MOBILE VIEW (Company-like but NO stats) ================= */}
      <div className="block md:hidden">
        <Home
          showAuthModalEnabled={false}
          showDeveloperCTA={false}
          showPlatformStats={false} // stats removed
          applyVariant="freelancer" // ✅ ensures golden apply image on mobile
        />
      </div>

      {/* ================= NON-MOBILE VIEW (unchanged) ================= */}
      <div className="hidden md:block">
        <main className="bg-white">
          <section className="max-w-[1600px] mx-auto px-0 space-y-0">
            <div className="flex items-center justify-between">
              <h2 className="text-[36px] mt-12  px-16 font-semibold">
                Latest job posts
              </h2>

              <Link
                to="/all-jobs"
                className="
                group
                inline-flex
                items-center
                text-sm px-16
                sm:text-[16px]
                font-medium
                text-black
                hover:text-[#8967B3]
                transition-colors
              "
              >
                <span className="relative inline-block">
                  {mockJobs.length}+ more jobs
                  <span
                    className="
                    absolute
                    left-0
                    -bottom-[4px]
                    h-[4px]
                    w-14
                    bg-[#8967B3]
                  "
                  />
                </span>

                <img
                  src="/icons/arrow-right.svg"
                  alt="Next"
                  className="w-4 h-4 ml-2"
                />
              </Link>
            </div>

            <section className="max-w-[1600px] mx-auto  px-8">
              <LatestJobs
                jobs={topSixJobs}
                showHeader={false}
                applyVariant="freelancer" // ✅ important
              />
            </section>

            <section className="max-w-[1800px] px-8">
              <PopularTags />
            </section>

            <LatestJobs
              jobs={mockJobs}
              limit={12}
              showHeader={false}
              applyVariant="freelancer" // ✅ important
            />
          </section>

          <div className="flex justify-center mb-14">
            <Link
              to="/all-jobs"
              className="
                flex items-center justify-center
                lg:w-[480px] sm:w-[400px] md:w-[440px] w-[280px]
                h-[75px]
                bg-[#8967B3]
                rounded-[15px]
                text-white
                text-[22px]
                font-medium
                hover:opacity-90
              "
            >
              View all job post
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default FreelancerHomePage;
