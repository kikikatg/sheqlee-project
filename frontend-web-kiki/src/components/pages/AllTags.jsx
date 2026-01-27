import { useState, useMemo, useEffect } from "react";
import TagCard from "../common/TagCard";
import Pagination from "../common/Pagination";
import DeveloperCTA from "../sections/DeveloperCTA";
import Footer from "../footer/Footer";
import SubNavbar from "../all-jobs/SubNavbar";
import { mockTags } from "../../data/mockTags";

const DESKTOP_TAGS_PER_PAGE = 24;
const MOBILE_TAGS_PER_PAGE = 10;

const AllTags = () => {
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // ================= MOBILE DETECTION =================
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const tagsPerPage = isMobile ? MOBILE_TAGS_PER_PAGE : DESKTOP_TAGS_PER_PAGE;

  // 🔹 Calculate pages based on tags per device
  const totalPages = Math.ceil(mockTags.length / tagsPerPage);

  const tagsToRender = useMemo(() => {
    const start = (page - 1) * tagsPerPage;
    const end = start + tagsPerPage;
    return mockTags.slice(start, end);
  }, [page, tagsPerPage]);

  return (
    <section className="w-full bg-white font-['Kantumruy_Pro']">
      {/* ================= Breadcrumb ================= */}
      {!isMobile && (
        <SubNavbar
          crumbs={[
            {
              label: "Tags",
              active: true,
            },
          ]}
        />
      )}

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

        <p className="mt-4 max-w-[1000px] text-[18px] sm:text-[32px] md:text-[36px] lg:text-[40px] lg:mb-14 lg:leading-[54px] leading-[24px] text-black sm:mt-2 md:mt-6 md:leading-[34px]">
          Job tags along with their respective number of jobs posted and number
          of subscribers.
        </p>
      </div>

      {/* ================= Tags Grid ================= */}
      <section className="flex justify-center pt-14">
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
      {totalPages > 1 && (
        <div className={`mt-8 ${isMobile ? "px-4 max-w-[520px] mx-auto" : ""}`}>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            variant="category"
          />
        </div>
      )}

      {/* ================= Developer CTA ================= */}
      <DeveloperCTA />

      {/* ================= Footer ================= */}
      <Footer />
    </section>
  );
};

export default AllTags;
