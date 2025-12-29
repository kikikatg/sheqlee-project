const JobDetailsNavbar = ({ job }) => {
  return (
    <div className="w-full bg-[#FCFCFC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-[75px] flex items-center">

        {/* Breadcrumb container */}
        <div className="flex items-center gap-3 text-sm md:text-base font-medium text-black">

          {/* Logo / Placeholder */}
          <img
            src="/icons/placeholder.svg"
            alt="Sheqlee"
            className="w-6 h-6"
          />

          {/* Brand */}
          <span>Sheqlee</span>

          {/* Arrow */}
          <img
            src="/icons/arrow-down.svg"
            alt="next"
            className="w-[7px] h-[10px] rotate-[-90deg]"
          />

          {/* Category (API-ready) */}
          <span>{job.category || "Design & Art"}</span>

          {/* Arrow */}
          <img
            src="/icons/arrow-down.svg"
            alt="next"
            className="w-[7px] h-[10px] rotate-[-90deg]"
          />

          {/* Job title (DYNAMIC ✅) */}
          <span className="font-semibold">
            {job.title}
          </span>
        </div>

      </div>
    </div>
  );
};

export default JobDetailsNavbar;
