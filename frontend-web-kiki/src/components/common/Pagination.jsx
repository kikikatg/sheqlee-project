import React from "react";

const clampPage = (page, min, max) => {
  if (page < min) return min;
  if (page > max) return max;
  return page;
};

const Pagination = ({
  currentPage = 1,
  totalPages,
  onPageChange,
  variant = "all", // "all" | "category"
}) => {
  const isAllJobs = variant === "all";
  const REAL_MAX_PAGE = isAllJobs ? 40 : totalPages;

  const fixedPages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const lastPages = isAllJobs
    ? [39, 40]
    : [Math.max(1, totalPages - 1), totalPages];

  // remove duplicates
  const lastPagesFiltered = lastPages.filter((p) => !fixedPages.includes(p));

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage >= REAL_MAX_PAGE;

  const handlePageChange = (page) => {
    const safePage = clampPage(page, 1, REAL_MAX_PAGE);
    if (safePage !== currentPage) {
      onPageChange(safePage);
    }
  };

  return (
    <div className="mt-16 max-w-7xl mx-auto px-4">
      {/* DESKTOP */}
      <div className="hidden md:flex justify-between items-start">
        <div className="flex gap-4">
          {fixedPages.map((page) => (
            <button
              key={`fixed-${page}`}
              onClick={() => handlePageChange(page)}
              className={`w-[50px] h-[50px] rounded-[15px] text-[18px] font-medium
                ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-[#DFDFDF] hover:opacity-80"
                }`}
            >
              {page}
            </button>
          ))}

          {lastPagesFiltered.length > 0 && (
            <>
              <span className="flex items-center px-2 text-xl font-medium">
                …
              </span>
              {lastPagesFiltered.map((page) => (
                <button
                  key={`last-${page}`}
                  onClick={() => handlePageChange(page)}
                  className={`w-[50px] h-[50px] rounded-[15px] text-[18px] font-medium
                    ${
                      currentPage === page
                        ? "bg-black text-white"
                        : "bg-[#DFDFDF] hover:opacity-80"
                    }`}
                >
                  {page}
                </button>
              ))}
            </>
          )}
        </div>

        <div className="flex gap-4">
          <button
            disabled={isFirstPage}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`w-[50px] h-[50px] rounded-[15px] flex items-center justify-center
              ${
                isFirstPage ? "bg-[#DFDFDF] cursor-not-allowed" : "bg-[#8967B3]"
              }`}
          >
            <img src="/icons/left-arrow.svg" alt="Prev" />
          </button>

          <button
            disabled={isLastPage}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`w-[50px] h-[50px] rounded-[15px] flex items-center justify-center
              ${
                isLastPage ? "bg-[#DFDFDF] cursor-not-allowed" : "bg-[#8967B3]"
              }`}
          >
            <img src="/icons/arrow-next-2.svg" alt="Next" />
          </button>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden justify-center items-center gap-6">
        <button
          disabled={isFirstPage}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`w-12 h-12 rounded-xl ${
            isFirstPage ? "bg-[#DFDFDF]" : "bg-[#8967B3]"
          }`}
        >
          <img src="/icons/left-arrow.svg" alt="Prev" />
        </button>

        <span className="text-lg font-semibold">
          {currentPage} / {REAL_MAX_PAGE}
        </span>

        <button
          disabled={isLastPage}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`w-12 h-12 rounded-xl ${
            isLastPage ? "bg-[#DFDFDF]" : "bg-[#8967B3]"
          }`}
        >
          <img src="/icons/arrow-next-2.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
