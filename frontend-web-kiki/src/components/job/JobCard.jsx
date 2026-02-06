import { useNavigate } from "react-router-dom";
import { JOB_ICONS, META_ICONS } from "../../constants/JobIcons";

const JobCard = ({ job, applyVariant = "default" }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div className="w-full">
      <div
        onClick={handleCardClick}
        className="
          soft-card
          bg-[#F7F7F7]
          rounded-xl
          flex flex-col
          justify-between
          w-full
          cursor-pointer
          transition-transform duration-200
          hover:shadow-lg
          hover:-translate-y-1
          p-6 sm:p-5 lg:p-6
          mt-8
          min-h-[360px] sm:min-h-[380px] lg:min-h-[420px]
        "
      >
        {/* ================= TOP CONTENT ================= */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={JOB_ICONS[job.title]}
              alt=""
              className="w-7 h-7 flex-shrink-0"
            />

            <h3 className="text-black font-semibold text-[20px] lg:text-[25px] xl:text-[28px] line-clamp-2">
              {job.title}
            </h3>
          </div>

          <p className="text-black text-[18px] leading-7 line-clamp-3">
            {job.description}
          </p>
        </div>

        {/* ================= META ================= */}
        <div className="mt-6 flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-2 items-center">
            <span className="meta-pill text-[12px] flex items-center gap-1">
              <img src={META_ICONS.time} className="w-3 h-3" />
              {job.postedAt}
            </span>

            <span className="meta-pill text-[12px] flex items-center gap-1 ">
              <img src={META_ICONS.company} className="w-3 h-3" />
              {job.company}
            </span>

            <span className="meta-pill text-[12px] flex items-center gap-1">
              <img src={META_ICONS.type} className="w-3 h-3" />
              {job.type}
            </span>
          </div>

          <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center">
            <span className="meta-pill text-[12px] flex items-center gap-1">
              <img src={META_ICONS.level} className="w-3 h-3 hidden sm:block" />
              <img src="/icons/skill.svg" className="w-3 h-3 sm:hidden" />
              {job.level}
            </span>

            <span className="meta-pill text-[12px] flex items-center gap-1">
              <img src={META_ICONS.price} className="w-3 h-3 hidden sm:block" />
              <img src="/icons/money.svg" className="w-3 h-3 sm:hidden" />
              {job.rate}
            </span>

            {/* ================= APPLY BUTTON ================= */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/jobs/${job.id}`);
              }}
              className="
    bg-[#8967B3]
    px-4
    py-1
    rounded-md
    hover:bg-purple-700
    transition
    whitespace-nowrap
    flex items-center justify-center
  "
            >
              {applyVariant === "freelancer" ? (
                <>
                  {/* MOBILE */}
                  <img
                    src="/icons/Apply.svg"
                    alt="Apply"
                    className="h-4 w-auto md:hidden"
                  />

                  {/* DESKTOP */}
                  <span className="hidden md:block text-white text-[12px] font-medium">
                    Apply
                  </span>
                </>
              ) : (
                <span className="text-white text-[12px] font-medium">
                  Apply
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
