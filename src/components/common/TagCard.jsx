const TagCard = ({ name, jobs, subscribers }) => {
  return (
    <div
      className="
        relative flex items-center
        bg-[#E6E6E6]
        rounded-xl
        px-5 py-4
        cursor-pointer
        transition-all duration-200 ease-out
        hover:-translate-y-1
        hover:bg-[#EAEAEA]
        hover:shadow-md
      "
    >
      {/* Left accent bar */}
      <span className="absolute left-0 top-0 h-full w-3 bg-black rounded-l-xl" />

      <div className="pl-6">
        {/* Tag name */}
        <h3 className="text-[24px] font-semibold text-gray-900 leading-tight">
          {name}
        </h3>

        {/* Meta */}
        <p className="mt-1 text-[18px] text-gray-600 leading-snug">
          {jobs} jobs • {subscribers} subscribers
        </p>
      </div>
    </div>
  );
};

export default TagCard;
