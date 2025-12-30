import React from "react";

const Pagination = ({
  currentPage = 1,
  totalPages = 40,
  onPageChange,
}) => {
  // 🔒 LOCKED PAGE SET (DESIGN REQUIREMENT)
  const fixedPages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === 40;

  return (
    <div className="mt-16 max-w-7xl mx-auto px-4">

      {/* ================= DESKTOP PAGINATION ================= */}
      <div className="hidden md:flex justify-between items-start">

        {/* PAGE NUMBERS */}
        <div className="flex gap-4">
          {fixedPages.map((page) => (
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

          {/* ELLIPSIS */}
          <span className="flex items-center px-2 text-xl font-medium">…</span>

          {/* 39 */}
          <button
            onClick={() => onPageChange(39)}
            className={`
              w-[50px] h-[50px]
              rounded-[15px]
              text-[18px] font-medium
              ${
                currentPage === 39
                  ? "bg-black text-white"
                  : "bg-[#DFDFDF] text-black hover:opacity-80"
              }
            `}
          >
            39
          </button>

          {/* 40 */}
          <button
            onClick={() => onPageChange(40)}
            className={`
              w-[50px] h-[50px]
              rounded-[15px]
              text-[18px] font-medium
              ${
                currentPage === 40
                  ? "bg-black text-white"
                  : "bg-[#DFDFDF] text-black hover:opacity-80"
              }
            `}
          >
            40
          </button>
        </div>

        {/* ================= ARROWS ================= */}
        <div className="flex gap-4">
          {/* LEFT */}
          <button
            disabled={isFirstPage}
            onClick={() => onPageChange(currentPage - 1)}
            className={`
              w-[50px] h-[50px]
              rounded-[15px]
              flex items-center justify-center
              transition
              ${
                isFirstPage
                  ? "bg-[#DFDFDF] cursor-not-allowed"
                  : "bg-[#8967B3] hover:opacity-90"
              }
            `}
          >
            <img src="/icons/left-arrow.svg" alt="Previous" />
          </button>

          {/* RIGHT */}
          <button
            disabled={isLastPage}
            onClick={() => onPageChange(currentPage + 1)}
            className={`
              w-[50px] h-[50px]
              rounded-[15px]
              flex items-center justify-center
              transition
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

      {/* ================= MOBILE PAGINATION ================= */}
      <div className="flex md:hidden justify-center items-center gap-6">
        <button
          disabled={isFirstPage}
          onClick={() => onPageChange(currentPage - 1)}
          className={`w-12 h-12 rounded-xl flex items-center justify-center
            ${
              isFirstPage
                ? "bg-[#DFDFDF]"
                : "bg-[#8967B3]"
            }`}
        >
          <img src="/icons/left-arrow.svg" alt="Previous" />
        </button>

        <span className="text-lg font-semibold">
          {currentPage} / 40
        </span>

        <button
          disabled={isLastPage}
          onClick={() => onPageChange(currentPage + 1)}
          className={`w-12 h-12 rounded-xl flex items-center justify-center
            ${
              isLastPage
                ? "bg-[#DFDFDF]"
                : "bg-[#8967B3]"
            }`}
        >
          <img src="/icons/arrow-next-2.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
