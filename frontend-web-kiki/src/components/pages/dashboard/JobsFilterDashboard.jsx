import { useState } from "react";
import { mockTags } from "../../../data/mockTags";

const JobsFilterDashboard = ({ onApply }) => {
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    level: "",
    tag: "",
  });

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    onApply?.(filters);
  };

  // Ensure tags are unique
  const uniqueTags = Array.from(
    new Map(mockTags.map((t) => [t.name, t])).values()
  );

  return (
    <section className="w-full mt-14">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* TOP FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SelectBox
            value={filters.category}
            onChange={(v) => handleChange("category", v)}
            options={["Design", "Development", "DevOps", "QA"]}
            placeholder="Select categories"
          />

          <SelectBox
            value={filters.type}
            onChange={(v) => handleChange("type", v)}
            options={["Full-Time", "Part-Time"]}
            placeholder="Select type"
          />

          <SelectBox
            value={filters.level}
            onChange={(v) => handleChange("level", v)}
            options={["Junior", "Intermediate", "Expert"]}
            placeholder="Select level"
          />
        </div>

        {/* TAGS + APPLY */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4">
          <SelectBox
            value={filters.tag}
            onChange={(v) => handleChange("tag", v)}
            options={uniqueTags}
            placeholder="Select tags"
            isObject
          />

          <button
            onClick={applyFilters}
            className="h-[70px] bg-[#8967B3] rounded-[15px] text-white text-[22px] font-medium hover:opacity-90 transition"
          >
            Apply filter
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobsFilterDashboard;

/* ================= COMPONENT ================= */
const SelectBox = ({
  value,
  onChange,
  options,
  placeholder,
  isObject = false,
}) => (
  <div className="h-[70px] bg-[#DFDFDF] rounded-[15px] px-6 flex items-center">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent outline-none text-[20px]"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) =>
        isObject ? (
          <option key={opt.id} value={opt.name}>
            {opt.name}
          </option>
        ) : (
          <option key={opt} value={opt}>
            {opt}
          </option>
        )
      )}
    </select>
  </div>
);
