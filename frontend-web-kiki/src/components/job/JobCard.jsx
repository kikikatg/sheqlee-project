import { useNavigate } from "react-router-dom";
import { JOB_ICONS, META_ICONS } from "../../constants/JobIcons";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        soft-card
        bg-[#F7F7F7]
        rounded-xl
        flex flex-col
        h-full
        p-8 sm:p-5 lg:p-6
      "
    >
      {/* ================= TITLE + DESCRIPTION ================= */}
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
              lg:text-[22px]
              xl:text-[22px]
              leading-snug
            "
          >
            {job.title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-700
            text-[22px]
            sm:text-[20px]
            lg:text-[22px]
            mb-4
          "
        >
          {job.description}
        </p>

        {/* META ROW 1 */}
        <div className="flex flex-wrap gap-3 mb-2">
          <span className="meta-pill text-[18px] sm:text-[16px]">
            <img src={META_ICONS.time} className="w-5 h-5" />
            {job.postedAt}
          </span>

          <span className="meta-pill text-[18px] sm:text-[16px]">
            <img src={META_ICONS.company} className="w-5 h-5" />
            {job.company}
          </span>

          <span className="meta-pill text-[18px] sm:text-[16px]">
            <img src={META_ICONS.type} className="w-5 h-5" />
            {job.type}
          </span>
        </div>
      </div>

      {/* ================= META ROW 2 + APPLY ================= */}
      <div className="flex flex-wrap items-center gap-2 mt-0 pt-0">
        <span className="meta-pill text-[18px] sm:text-[16px]">
          <img src={META_ICONS.level} className="w-5 h-5" />
          {job.level}
        </span>

        <span className="meta-pill text-[18px] sm:text-[16px]">
          <img src={META_ICONS.price} className="w-5 h-5" />
          {job.rate}
        </span>

        <button
          onClick={() => navigate(`/jobs/${job.id}`)}
          className="
            sm:ml-0 ml-0
            mt-2 sm:mt-0
            bg-[#8967B3]
            text-white
            font-medium
            px-4 
            py-2
            rounded-md
            hover:bg-purple-700
            transition
          text-[18px] sm:text-[16px]
          "
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
