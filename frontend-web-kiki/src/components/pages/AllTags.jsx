import { useState, useMemo } from "react";
import TagCard from "../common/TagCard";
import Pagination from "../common/Pagination";
import DeveloperCTA from "../sections/DeveloperCTA";
import Footer from "../footer/Footer";
import SubNavbar from "../all-jobs/SubNavbar";
import { mockTags } from "../../data/mockTags";

const TAGS_PER_PAGE = 24;
const TOTAL_PAGES = 15; // design requirement

const AllTags = () => {
  const [page, setPage] = useState(1);

  // 🔹 how many pages actually contain data
  const REAL_PAGES = Math.ceil(mockTags.length / TAGS_PER_PAGE);

  const tagsToRender = useMemo(() => {
    // ✅ if page exceeds available data → render nothing
    if (page > REAL_PAGES) return [];

    const start = (page - 1) * TAGS_PER_PAGE;
    const end = start + TAGS_PER_PAGE;

    return mockTags.slice(start, end);
  }, [page, REAL_PAGES]);

  return (
    <section className="w-full bg-white font-['Kantumruy_Pro']">
      {/* ================= Breadcrumb ================= */}
      <SubNavbar
        crumbs={[
          {
            label: "Tags",
            active: true,
          },
        ]}
      />

      {/* ================= Header ================= */}
      <div className="max-w-[1920px] mx-auto px-6 flex flex-col items-center text-center">
        <img
          src="/icons/tag.svg"
          alt="Tags"
          className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] sm:h-[80px] mt-16 lg:w-[100px] lg:h-[100px]"
        />

        <h1 className="mt-8 sm:mt-2 text-[20px] sm:text-[30px] md:text-[40px] leading-[40px] lg:text-[50px] font-semibold text-black">
          All Tags
        </h1>

        <p className="mt-10 max-w-[780px] text-[18px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[44px] text-black sm:mt-2 md:mt-8">
          Job tags along with their respective number of jobs posted and number
          of subscribers.
        </p>
      </div>

      {/* ================= Tags Grid ================= */}
      <section className="flex justify-center pt-24">
        <div
          className="
            w-full
            max-w-[1600px]
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-8
            gap-y-10
            px-6
            sm:px-8
            md:px-16
            lg:px-[140px]
          "
        >
          {tagsToRender.map((tag) => (
            <TagCard
              key={tag.id}
              name={tag.name}
              jobs={tag.jobs}
              subscribers={tag.subscribers}
            />
          ))}
        </div>
      </section>

      {/* ================= Pagination ================= */}
      <Pagination
        currentPage={page}
        totalPages={TOTAL_PAGES}
        onPageChange={setPage}
        variant="category"
      />

      {/* ================= Developer CTA ================= */}
      <DeveloperCTA />

      {/* ================= Footer ================= */}
      <Footer />
    </section>
  );
};

export default AllTags;
