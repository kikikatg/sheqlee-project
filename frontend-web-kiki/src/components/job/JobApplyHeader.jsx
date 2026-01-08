import calendarIcon from "/icons/calendar.svg";
import companyIcon from "/icons/company.svg";
import clockIcon from "/icons/clock.svg";
import levelIcon from "/icons/level.svg";
import salaryIcon from "/icons/salary.svg";

const JobApplyHeader = ({ job }) => {
  return (
    <section className="bg-white">
      
      {/* Sub Navbar */}
      <div className="h-[75px] bg-[#FCFCFC] flex items-center">
        <div className="max-w-7xl mx-auto px-6 flex gap-2 text-sm text-[#444]">
          <span className="flex items-center gap-2">
            <img src="/icons/location.svg" alt="" className="w-4 h-4" />
            Sheqlee
          </span>
          <span>›</span>
          <span>{job.category}</span>
          <span>›</span>
          <span className="font-medium">{job.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center pt-24 pb-16 px-6">

        {/* Title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <img
            src="/icons/design.svg"
            alt=""
            className="w-12 h-12"
          />
          <h1 className="text-[55px] font-semibold leading-tight text-black">
            {job.title}
          </h1>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Meta icon={calendarIcon} text="1hr ago" />
          <Meta icon={companyIcon} text={job.company} />
          <Meta icon={clockIcon} text="Full-Time" />
          <Meta icon={levelIcon} text="Intermediate" />
          <Meta icon={salaryIcon} text="$20/hr" />
        </div>

        {/* Apply Button */}
        <button className="w-[450px] h-[85px] bg-[#8967B3] rounded-[15px] text-white text-xl font-medium hover:opacity-90 transition">
          Apply now
        </button>

        {/* Helper Text */}
        <p className="mt-4 text-sm text-black">
          Please mention <span className="font-semibold">Sheqlee</span> when you apply.
        </p>

      </div>
    </section>
  );
};

const Meta = ({ icon, text }) => (
  <div className="flex items-center gap-2 bg-[#F3F3F3] px-4 py-2 rounded-md text-sm text-black">
    <img src={icon} alt="" className="w-5 h-5" />
    <span>{text}</span>
  </div>
);

export default JobApplyHeader;
