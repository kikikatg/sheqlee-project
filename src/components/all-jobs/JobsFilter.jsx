import { useState } from "react";

const JobsFilter = ({ onApply }) => {
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
    onApply?.(filters);
  };

  return (
    <section className="w-full mt-14">
      <div className="max-w-[1000px] mx-auto px-4">

        {/* TOP FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <SelectBox
            value={filters.category}
            onChange={(v) => handleChange("category", v)}
            options={["Design", "Development", "DevOps", "QA"]}
            placeholder="All Categories"
          />

          <SelectBox
            value={filters.type}
            onChange={(v) => handleChange("type", v)}
            options={["Full-Time", "Part-Time"]}
            placeholder="All Types"
          />

          <SelectBox
            value={filters.level}
            onChange={(v) => handleChange("level", v)}
            options={["Intermediate", "Expert"]}
            placeholder="All Levels"
          />
        </div>

        {/* SEARCH + APPLY */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4">

          <InputBox
            value={filters.search}
            onChange={(v) => handleChange("search", v)}
            placeholder="Search by programming technology or field..."
          />

          <button
            onClick={applyFilters}
            className="h-[70px] bg-[#8967B3] rounded-[15px] text-white text-[22px] font-medium hover:opacity-90 transition"
          >
            Apply Filter
          </button>
        </div>

      </div>
    </section>
  );
};

export default JobsFilter;

/* ================= COMPONENTS ================= */

const SelectBox = ({ value, onChange, options, placeholder }) => (
  <div className="h-[70px] bg-[#DFDFDF] rounded-[15px] px-6 flex items-center">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent outline-none text-[20px]"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const InputBox = ({ value, onChange, placeholder }) => (
  <div className="h-[70px] bg-[#DFDFDF] rounded-[15px] px-6 flex items-center gap-4">
    <img src="/icons/search.svg" className="w-6 h-6" />
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="flex-1 bg-transparent outline-none text-[20px]"
    />
  </div>
);
