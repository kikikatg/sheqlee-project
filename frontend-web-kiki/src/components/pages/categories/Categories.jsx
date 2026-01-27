import React, { useState, useEffect } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import CategoryCard from "../../common/CategoryCard";
import { mockCategories } from "../../../data/mockCategories";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Pagination from "../../common/Pagination";

const JOBS_PER_PAGE = 10;

const Categories = () => {
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Categories to display
  const displayedCategories = isMobile
    ? mockCategories.slice((page - 1) * JOBS_PER_PAGE, page * JOBS_PER_PAGE)
    : mockCategories; // all categories on tablet/desktop

  return (
    <main className="bg-white min-h-screen">
      {/* ================= SUBNAVBAR / BREADCRUMB ================= */}
      {!isMobile && (
        <SubNavbar
          crumbs={[{ label: "Categories", href: "/categories", active: true }]}
        />
      )}

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-20 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="/icons/categories.svg"
            className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
            alt="Categories"
          />
        </div>

        <h1 className="text-[28px] sm:text-[38px] md:text-[56px] font-semibold">
          All Categories
        </h1>

        <p className="mt-4 sm:mt-6 max-w-[360px] sm:max-w-[882px] mx-auto text-[16px] sm:text-[20px] md:text-[32px] leading-[22px] sm:leading-[28px] md:leading-[36px]">
          Job categories along with their respective number of jobs and
          subscribers.
        </p>
      </section>

      {/* ================= CATEGORIES GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {displayedCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* ================= PAGINATION - MOBILE ONLY ================= */}
        {isMobile && mockCategories.length > JOBS_PER_PAGE && (
          <div className="mt-6 w-full max-w-[520px] mx-auto">
            <div className="flex justify-between items-center">
              {/* Page numbers aligned to left */}
              <div className="flex gap-4">
                {Array.from({
                  length: Math.ceil(mockCategories.length / JOBS_PER_PAGE),
                }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePageChange(idx + 1)}
                    className={`
              px-3 py-1 rounded-[8px] text-[16px] sm:text-[18px] font-medium
              ${
                page === idx + 1
                  ? "bg-[#8967B3] text-white"
                  : "bg-[#E0E0E0] text-black"
              }
              hover:opacity-90 transition
            `}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              {/* Left / Right icons aligned to right */}
              <div className="flex gap-2">
                {/* Prev icon */}
                <button
                  onClick={() => handlePageChange(Math.max(page - 1, 1))}
                  className={`
            w-8 h-8 flex items-center justify-center rounded-[8px] transition
            ${page > 1 ? "bg-[#8967B3]" : "bg-[#E0E0E0]"}
          `}
                >
                  <img
                    src="/icons/left-arrow.svg"
                    alt="Prev"
                    className="w-4 h-4"
                  />
                </button>

                {/* Next icon */}
                <button
                  onClick={() =>
                    handlePageChange(
                      Math.min(
                        page + 1,
                        Math.ceil(mockCategories.length / JOBS_PER_PAGE),
                      ),
                    )
                  }
                  className={`
            w-8 h-8 flex items-center justify-center rounded-[8px] transition
            ${page < Math.ceil(mockCategories.length / JOBS_PER_PAGE) ? "bg-[#8967B3]" : "bg-[#E0E0E0]"}
          `}
                >
                  <img
                    src="/icons/arrow-next-2.svg"
                    alt="Next"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default Categories;
