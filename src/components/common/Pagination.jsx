import React from "react";

const Pagination = ({
  currentPage = 1,
  totalPages = 40,
  onPageChange,
}) => {
  const pagesToShow = 9;

  const pages = [];
  for (let i = 1; i <= pagesToShow; i++) {
    pages.push(i);
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="mt-16 max-w-7xl mx-auto px-4">

      {/* DESKTOP PAGINATION */}
      <div className="hidden md:flex justify-between items-start">

        {/* PAGE NUMBERS */}
        <div className="flex gap-4">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`
                w-[50px] h-[50px]
                rounded-[15px]
                text-[18px] font-medium
                transition
                ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-[#DFDFDF] text-black hover:opacity-80"
                }
              `}
            >
              {page}
            </button>
          ))}

          <span className="flex items-center px-2 text-xl font-medium">…</span>

          {/* 39 */}
          <button
            onClick={() => onPageChange(totalPages - 1)}
            className={`
              w-[50px] h-[50px]
              rounded-[15px]
              text-[18px] font-medium
              ${
                currentPage === totalPages - 1
                  ? "bg-black text-white"
                  : "bg-[#DFDFDF] text-black hover:opacity-80"
              }
            `}
          >
            {totalPages - 1}
          </button>

          {/* 40 */}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`
              w-[50px] h-[50px]
              rounded-[15px]
              text-[18px] font-medium
              ${
                currentPage === totalPages
                  ? "bg-black text-white"
                  : "bg-[#DFDFDF] text-black hover:opacity-80"
              }
            `}
          >
            {totalPages}
          </button>
        </div>

        {/* ARROWS */}
        <div className="flex gap-4">
          <button
            onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
            className={`
              w-[50px] h-[50px]
              rounded-[15px]
              flex items-center justify-center
              ${
                isFirstPage
                  ? "bg-[#DFDFDF] cursor-not-allowed"
                  : "bg-[#8967B3] hover:opacity-90"
              }
            `}
          >
            <img src="/icons/left-arrow.svg" alt="Previous" />
          </button>

          <button
            onClick={() => !isLastPage && onPageChange(currentPage + 1)}
            className={`
              w-[50px] h-[50px]
              rounded-[15px]
              flex items-center justify-center
              ${
                isLastPage
                  ? "bg-[#DFDFDF] cursor-not-allowed"
                  : "bg-[#8967B3] hover:opacity-90"
              }
            `}
          >
            <img src="/icons/arrow-next-2.svg" alt="Next" />
          </button>
        </div>
      </div>

      {/* MOBILE PAGINATION */}
      <div className="flex md:hidden justify-center items-center gap-6">
        <button
          onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
          className={`w-12 h-12 rounded-xl flex items-center justify-center
            ${isFirstPage ? "bg-gray-300" : "bg-[#8967B3]"}`}
        >
          <img src="/icons/left-arrow.svg" alt="Previous" />
        </button>

        <span className="text-lg font-semibold">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => !isLastPage && onPageChange(currentPage + 1)}
          className={`w-12 h-12 rounded-xl flex items-center justify-center
            ${isLastPage ? "bg-gray-300" : "bg-[#8967B3]"}`}
        >
          <img src="/icons/arrow-next-2.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
