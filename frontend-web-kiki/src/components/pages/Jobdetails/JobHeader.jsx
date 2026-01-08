import { JOB_ICONS, META_ICONS } from "../../../constants/JobIcons";

const JobHeader = ({ job }) => {
  if (!job) return null;

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* ================= TITLE ROW ================= */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={JOB_ICONS[job.title]}
            alt={job.title}
            className="w-16 h-16"
          />

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            {job.title}
          </h1>
        </div>

        {/* ================= META ROW ================= */}
        <div className="flex flex-wrap gap-3">

          <span className="meta-pill text-[14px]">
            <img src={META_ICONS.time} className="w-4 h-4" />
            {job.postedAt}
          </span>

          <span className="meta-pill text-[14px]">
            <img src={META_ICONS.company} className="w-4 h-4" />
            {job.company}
          </span>

          <span className="meta-pill text-[14px]">
            <img src={META_ICONS.type} className="w-4 h-4" />
            {job.type}
          </span>

          <span className="meta-pill text-[14px]">
            <img src={META_ICONS.level} className="w-4 h-4" />
            {job.level}
          </span>

          <span className="meta-pill text-[14px]">
            <img src={META_ICONS.price} className="w-4 h-4" />
            {job.rate}
          </span>

        </div>

      </div>
    </section>
  );
};

export default JobHeader;
