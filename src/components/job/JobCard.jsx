import { JOB_ICONS, META_ICONS } from "../../constants/JobIcons";

const JobCard = ({ job }) => {
  return (
    <div className="soft-card   bg-[#F7F7F7]
 p-4 rounded-xl flex flex-col  h-full ">


      {/* ================= TITLE ROW ================= */}
      <div>
         <div className="flex flex-wrap gap-0 items-center mb-2  ">
          <img
            src={JOB_ICONS[job.title]}
            alt=""
            className="w-7 h-6 flex-shrink-0"
          />
          <h3 className=" text-black
            font-semibold
            text-[28px]
            md:text-[18px]
            leading-[1.1] sm:text-base py-4 px-2">
            {job.title}
          </h3>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <p className=" text-[22px]
            md:text-[18px]  mb-10">
          {job.description}
        </p>

        {/* ================= META ROW 1 ================= */}

       <div className="flex flex-wrap gap-2    mb-2 ">
          <span className="meta-pill md:text-[14px] ">
            <img src={META_ICONS.time} className="w-3 h-3  " />
            {job.postedAt}
          </span>

          <span className="meta-pill text-[14px]">
            <img src={META_ICONS.company} className="w-3 h-3" />
            {job.company}
          </span>

          <span className="meta-pill text-[14px]">
            <img src={META_ICONS.type} className="w-3 h-3" />
            {job.type}
          </span>
        </div>
      </div>

      {/* ================= META ROW 2 + APPLY ================= */}
      <div  className="flex flex-wrap gap-2 items-center mt-0 mb-6">
        <span className="meta-pill text-[14px]">
          <img src={META_ICONS.level} className="w-3 h-3" />
          {job.level}
        </span>

        <span className="meta-pill text-[14px]">
          <img src={META_ICONS.price} className="w-3 h-3" />
          {job.rate}
        </span>
{/* apply Button  */}
        <button className="ml-auto sm:ml-0 bg-[#8967B3] text-white text-xs font-medium px-4 py-1.5 rounded-md hover:bg-purple-700 transition text-[14px]">
          Apply
        </button>
      </div>

    </div>
  );
};

export default JobCard;
