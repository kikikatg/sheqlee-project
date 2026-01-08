import { useNavigate } from "react-router-dom";

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/companies/${company.slug}`)}
      className="relative flex w-full h-[145px] bg-[#F7F7F7] rounded-[20px] text-left
                 hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
    >
      {/* Left Accent Bar */}
      <div className="w-[20px] bg-black rounded-l-[20px]" />

      {/* Card Content */}
      <div className="flex flex-col justify-center px-6 gap-3 flex-1 overflow-hidden">

        {/* Company Name + Verified */}
        <div className="flex items-center gap-2">
          <h3 className="text-[22px] font-semibold text-black truncate">
            {company.name}
          </h3>

          {company.verified && (
            <img
              src="/icons/verify.svg"
              alt="Verified company"
              className="w-[22px] h-[21px] shrink-0"
            />
          )}
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-[20px] text-gray-600 flex-wrap">
          <span>{company.jobsCount} jobs</span>
          <span>•</span>
          <span>{company.subscribers} subscribers</span>
        </div>
      </div>
    </button>
  );
};

export default CompanyCard;
