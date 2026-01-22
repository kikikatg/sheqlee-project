import { Link } from "react-router-dom";

const TagCard = ({ name, jobs, subscribers }) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/tags/${slug}`} className="block w-full">
      <div
        className="
          relative flex items-center
          bg-[#DFDFDF]
          rounded-xl
          px-3 sm:px-5 md:px-6
py-4 sm:py-7 md:py-8
min-h-[96px] sm:min-h-[120px]

          w-full
          cursor-pointer
          transition-all duration-200 ease-out
          hover:-translate-y-1
          hover:bg-[#EAEAEA]
          hover:shadow-md
        "
      >
        {/* Left accent bar */}
        <span className="absolute left-0 top-0 h-full w-4 bg-black rounded-l-xl" />

        <div className="pl-6">
          <h3
            className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px]
 font-semibold   text-gray-900 leading-tight"
          >
            {name}
          </h3>

          <p className="mt-1 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-900 leading-snug">
            {jobs} jobs • {subscribers} subscribers
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TagCard;
