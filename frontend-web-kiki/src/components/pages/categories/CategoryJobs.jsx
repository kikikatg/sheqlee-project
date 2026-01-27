import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CategoryHeader from "./CategoryHeader";
import LatestJobs from "../../sections/LatestJobs";
import Pagination from "../../common/Pagination";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";

import { mockJobs } from "../../../data/mockJobs";
import { mockCategories } from "../../../data/mockCategories";
import JobCard from "../../job/JobCard";

const CATEGORY_TAG_MAP = {
  "Web Frontend": ["Frontend", "Web", "React", "UI"],
  "Backend & Database": ["Backend", "API", "Database", "Python"],
  "UI/UX & Product Design": ["UI", "UX", "Design", "Figma"],
  "Machine Learning": ["ML", "Machine Learning", "AI", "Python"],
  "Mobile Application": ["Mobile", "Android", "iOS"],
  "Web Full-Stack": ["Full Stack", "Frontend", "Backend"],
  "QA & DevOps Engineer": ["QA", "DevOps", "Testing", "CI/CD"],
  Security: ["Security", "Cyber", "PenTest"],
};

const MOBILE_JOBS_PER_PAGE = 6;
const DESKTOP_JOBS_PER_PAGE = 12;

const CategoryJobs = () => {
  const { categoryId } = useParams();
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  /* ================= MOBILE DETECTION ================= */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const category = mockCategories.find(
    (c) => String(c.id) === String(categoryId),
  );

  const categoryJobs = useMemo(() => {
    if (!category) return [];

    const keywords = CATEGORY_TAG_MAP[category.name] || [];

    return mockJobs.filter((job) =>
      job.details?.tags?.some((tag) =>
        keywords.some((key) => tag.toLowerCase().includes(key.toLowerCase())),
      ),
    );
  }, [category]);

  const jobsPerPage = isMobile ? MOBILE_JOBS_PER_PAGE : DESKTOP_JOBS_PER_PAGE;

  const totalPages = Math.ceil(categoryJobs.length / jobsPerPage);

  const jobsToRender = categoryJobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage,
  );

  if (!category) return null;

  return (
    <main className="bg-white min-h-screen">
      {/* ================= HEADER ================= */}
      <CategoryHeader
        title={category.name}
        icon={category.icon}
        subscribers={category.subscribers}
        description={`Browse ${category.jobsCount} jobs in the ${category.name} category and subscribe for updates.`}
        showBreadcrumb={!isMobile} // <-- Hide breadcrumb on mobile
      />
      {/* /* ================= JOB LIST ================= */}
      <section className="max-w-[1400px] mx-auto pt-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {jobsToRender.map((job) => (
            <div key={job.id} className="w-full">
              <div className="aspect-[4/3]">
                <JobCard job={job} isMobile={isMobile} />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= MOBILE PAGINATION ================= */}
      {isMobile && totalPages > 1 && (
        <div className="mt-8 px-4 max-w-[520px] mx-auto">
          <div className="flex justify-between items-center">
            {/* Page numbers */}
            <div className="flex gap-4">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx + 1)}
                  className={`
                    px-3 py-1 rounded-[8px] text-[16px] font-medium
                    ${
                      page === idx + 1
                        ? "bg-[#8967B3] text-white"
                        : "bg-[#E0E0E0] text-black"
                    }
                  `}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => setPage(Math.max(page - 1, 1))}
                className={`w-8 h-8 rounded-[8px] flex items-center justify-center
                  ${page > 1 ? "bg-[#8967B3]" : "bg-[#E0E0E0]"}
                `}
              >
                <img src="/icons/left-arrow.svg" className="w-4 h-4" />
              </button>

              <button
                onClick={() => setPage(Math.min(page + 1, totalPages))}
                className={`w-8 h-8 rounded-[8px] flex items-center justify-center
                  ${page < totalPages ? "bg-[#8967B3]" : "bg-[#E0E0E0]"}
                `}
              >
                <img src="/icons/arrow-next-2.svg" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ================= DESKTOP PAGINATION ================= */}
      {!isMobile && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
          variant="category"
        />
      )}
      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default CategoryJobs;
