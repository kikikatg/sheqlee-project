import { useState } from "react";

const JobsFilter = ({ onApply }) => {
  // API-ready filter state
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    level: "",
    search: "",
  });

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    if (onApply) {
      onApply(filters);
    }
  };

  return (
    <section className="w-full mt-14 ">
      <div className="max-w-[1000px] mx-auto px-4">

        {/* Top Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FilterBox
            label="All Categories"
            value={filters.category}
            onChange={(v) => handleChange("category", v)}
          />

          <FilterBox
            label="All Types"
            value={filters.type}
            onChange={(v) => handleChange("type", v)}
          />

          <FilterBox
            label="All Levels"
            value={filters.level}
            onChange={(v) => handleChange("level", v)}
          />
        </div>

        {/* Search + Apply */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4">
          <FilterBox
            label="Search jobs by programming technology or field..."
            value={filters.search}
            onChange={(v) => handleChange("search", v)}
            isSearch
          />

          <button
            onClick={applyFilters}
            className="
              h-[70px]
              bg-[#8967B3]
              rounded-[15px]
              text-white
              text-[22px]
              font-medium
              hover:opacity-90
              transition
            "
          >
            Apply Filter
          </button>
        </div>

      </div>
    </section>
  );
};

export default JobsFilter;

/* ---------------------------------
   Reusable Filter Box (FINAL)
---------------------------------- */
const FilterBox = ({ label, value, onChange, isSearch }) => {
  return (
    <div
      className="
        h-[70px]
        bg-[#DFDFDF]
        rounded-[15px]
        flex items-center
        px-6
        gap-4
      "
    >
      {/* Search Icon (LEFT) */}
      {isSearch && (
        <img
          src="/icons/search.svg"
          alt="Search"
          className="w-6 h-6"
        />
      )}

      {/* Input */}
      <input
        type="text"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          flex-1
          bg-transparent
          outline-none
          text-[20px]
          text-black
          placeholder-black
        "
      />

      {/* Arrow Icon (RIGHT) */}
      {!isSearch && (
        <img
          src="/icons/arrow-down.svg"
          alt="Dropdown"
          className="w-4 h-4"
        />
      )}
    </div>
  );
};
