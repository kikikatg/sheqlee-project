import { JOB_ICONS, META_ICONS } from "../../constants/JobIcons";

const JobCard = ({ job }) => {
  return (
    <div className="soft-card bg-gray-100 p-5 rounded-xl">

      {/* TITLE ROW */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src={JOB_ICONS[job.title]}
          alt=""
          className="w-6 h-6"
        />
        <h3 className="text-base font-semibold text-gray-900">
          {job.title}
        </h3>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {job.description}
      </p>

      {/* META ROW 1 */}
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="meta-pill flex items-center gap-1">
          <img src={META_ICONS.time} className="w-3 h-3" />
          {job.postedAt}
        </span>

        <span className="meta-pill flex items-center gap-1">
          <img src={META_ICONS.company} className="w-3 h-3" />
          {job.company}
        </span>

        <span className="meta-pill flex items-center gap-1">
          <img src={META_ICONS.time} className="w-3 h-3" />
          {job.type}
        </span>
      </div>

      {/* META ROW 2 + APPLY (✅ FIXED) */}
      <div className="flex items-center gap-2">
        <span className="meta-pill flex items-center gap-1">
          <img src={META_ICONS.level} className="w-3 h-3" />
          {job.level}
        </span>

        <span className="meta-pill flex items-center gap-1">
          <img src={META_ICONS.price} className="w-3 h-3" />
          {job.rate}
        </span>

        {/* APPLY — SAME HEIGHT & GAP */}
        <button className="bg-purple-600 text-white text-xs font-medium px-4 py-1.5 rounded-md hover:bg-purple-700 transition">
          Apply
        </button>
      </div>

    </div>
  );
};

export default JobCard;
