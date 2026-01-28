import { useNavigate } from "react-router-dom";

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/companies/${company.slug}`)}
      className="
        relative flex w-full
        h-auto sm:h-[145px]
        bg-[#F7F7F7]
        rounded-[16px] sm:rounded-[20px]
        text-left
        hover:shadow-lg transition-shadow
        focus:outline-none focus:ring-2 focus:ring-purple-400
      "
    >
      {/* Left Accent */}
      <div className="w-[12px] sm:w-[20px] bg-black rounded-l-[16px] sm:rounded-l-[20px]" />

      {/* Content */}
      <div className="flex flex-col justify-center px-4 sm:px-6 py-4 gap-2 flex-1 overflow-hidden">
        {/* Name */}
        <div className="flex items-center gap-2">
          <h3 className="text-[16px] sm:text-[22px] font-semibold truncate">
            {company.name}
          </h3>

          {company.verified && (
            <img
              src="/icons/verify.svg"
              alt="Verified company"
              className="w-[18px] h-[18px] sm:w-[22px] sm:h-[21px] shrink-0"
            />
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 text-[14px] sm:text-[20px] text-gray-600 flex-wrap">
          <span>{company.jobsCount} jobs</span>
          <span>•</span>
          <span>{company.subscribers} subscribers</span>
        </div>
      </div>
    </button>
  );
};

export default CompanyCard;
