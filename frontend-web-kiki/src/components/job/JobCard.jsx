import { useNavigate } from "react-router-dom";
import { JOB_ICONS, META_ICONS } from "../../constants/JobIcons";

const JobCard = ({ job, isMobile = false }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div className="lg:mb-4 mb-0">
      <div
        onClick={handleCardClick}
        className="
        soft-card
        bg-[#F7F7F7]
        rounded-xl
        flex flex-col
        justify-between
        h-full
        p-8 sm:p-5 lg:p-6 lg:mx-4 mx-0  mt-8
        cursor-pointer
        transition-transform duration-200
        hover:shadow-lg
        hover:-translate-y-1
      "
      >
        {/* ================= TOP CONTENT: TITLE + DESCRIPTION ================= */}
        <div>
          {/* TITLE ROW */}
          <div className="flex items-center gap-2 mb-5">
            <img
              src={JOB_ICONS[job.title]}
              alt=""
              className="w-8 h-8 sm:w-7 sm:h-7 flex-shrink-0"
            />

            <h3
              className="
              text-black
              font-semibold
              text-[20px]
              sm:text-[20px]
              lg:text-[25px]
              xl:text-[28px]
              leading-snug
            "
            >
              {job.title}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
            text-black
            text-[20px]
            sm:text-[18px]
            lg:text-[22px]
            mb-4 leading-8
          "
          >
            {job.description}
          </p>
        </div>

        {/* ================= BOTTOM META ROWS (row1 + row2) ================= */}
        <div className="flex flex-col gap-2">
          {/* META ROW 1 */}
          <div className="flex flex-wrap gap-1">
            <span className="meta-pill text-[18px] md:text-[15px] text-black gap-2 sm:text-[14px]">
              <img src={META_ICONS.time} className="w-4 h-4" />
              {job.postedAt}
            </span>

            <span className="meta-pill text-[18px] text-black gap-2 sm:text-[14px]">
              <img src={META_ICONS.company} className="w-4 h-4" />
              {job.company}
            </span>

            <span className="meta-pill text-[18px] text-black gap-2 sm:text-[14px]">
              <img src={META_ICONS.type} className="w-4 h-4" />
              {job.type}
            </span>
          </div>

          {/* META ROW 2 + APPLY BUTTON */}
          <div className="flex flex-wrap items-center gap-2 mt-0">
            <span className="meta-pill text-[18px] text-black gap-2 sm:text-[14px]">
              <img
                src={isMobile ? "/icons/skill.svg" : META_ICONS.level}
                className="w-4 h-4"
              />
              {job.level}
            </span>

            <span className="meta-pill text-[18px] text-black gap-2 sm:text-[14px]">
              <img
                src={isMobile ? "/icons/money.svg" : META_ICONS.price}
                className="w-4 h-4"
              />
              {job.rate}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent double navigation
                navigate(`/jobs/${job.id}`);
              }}
              className="
              sm:ml-0 ml-0
              mt-2 sm:mt-0
              bg-[#8967B3]
              text-white
              font-medium
              px-4 
              py-1
              rounded-md
              hover:bg-purple-700
              transition
              text-[18px] sm:text-[14px]
            "
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
