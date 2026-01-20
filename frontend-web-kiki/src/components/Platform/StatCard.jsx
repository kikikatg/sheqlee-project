const StatCard = ({ icon, value, labelLine1, labelLine2 }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      {/* ICON — clearly larger */}
      <img
        src={icon}
        alt={labelLine1}
        className="w-[150px] h-[110px] sm:w-[100px] sm:h-[100px] mb-4"
      />

      {/* VALUE — VERY BIG & noticeable */}
      <p className="text-[24px] sm:text-[30px] lg:text-[50px] font-semibold text-gray-900 mb-2">
        {value}
      </p>

      {/* LABEL — two fixed lines */}
      <p className="text-[22px] md:text-[24px] sm:text-[20px] lg:text-[26px] text-gray-900 leading-tight">
        {labelLine1}
        <span className="block">{labelLine2}</span>
      </p>
    </div>
  );
};

export default StatCard;
