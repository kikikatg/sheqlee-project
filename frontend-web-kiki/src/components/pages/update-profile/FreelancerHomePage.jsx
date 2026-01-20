import { Link } from "react-router-dom";
import LatestJobs from "../../sections/LatestJobs";
import PopularTags from "../../sections/PopularTags";
import { mockJobs } from "../../../data/mockJobs";
// import { useNavigate } from "react-router-dom";

// first 6 jobs (omit last 3)
const topSixJobs = mockJobs.slice(0, 6);

const FreelancerHomePage = () => {
  // const navigate = useNavigate();
  return (
    <>
      {/* <UpdateProfileNavbar /> */}

      <main className="bg-white">
        <section className="max-w-[1600px] mx-auto px-8 space-y-0">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-[36px] mt-12 px-16 font-semibold">
              Latest job posts
            </h2>
            <Link
              to="/all-jobs"
              className="
    relative
    flex items-center gap-2
    text-[16px]
    font-medium
    text-black
    hover:text-[#8967B3]
    after:content-['']
    after:absolute
    after:left-1/4
    after:-translate-x-1/2
    after:-bottom-[8px]
    after:w-[50px]
    after:h-[4px]
    after:bg-[#8967B3]
  "
            >
              <span>{mockJobs.length}+ more jobs</span>
              <img src="/icons/arrow-right.svg" className="w-4 h-4" />
            </Link>
          </div>

          {/* Top 6 Jobs */}

          <section className="max-w-[1600px] mx-auto px-8 mb-">
            <LatestJobs jobs={topSixJobs} showHeader={false} />
          </section>

          {/* Popular Tags */}
          <section className="max-w-[1800px]  px-8 mt-0">
            <PopularTags />
          </section>

          {/* ===== BELOW TAGS (12 JOBS ONLY) ===== */}
          <LatestJobs jobs={mockJobs} limit={12} showHeader={false} />
        </section>

        <div className="flex justify-center mt-0 mb-14">
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
    </>
  );
};

export default FreelancerHomePage;
