const StatCard = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">

      {/* ICON — clearly larger */}
      <img
        src={icon}
        alt={label}
        className="w-[150px] h-[110px] sm:w-[100px] sm:h-[100px] mb-4"
      />

      {/* VALUE — VERY BIG & noticeable */}
      <p className="text-[24px] sm:text-[30px] lg:text-[40px] font-semibold text-gray-900 mb-2">
        {value}
      </p>

      {/* LABEL — BIGGER & readable */}
      <p className="text-[32px] sm:text-[20px] lg:text-[24px] text-gray-900 leading-tight max-w-[320px]">
        <span className="block font-medium">
          {label.split(" ").slice(0, Math.ceil(label.split(" ").length / 2)).join(" ")}
        </span>
        <span className="block">
          {label.split(" ").slice(Math.ceil(label.split(" ").length / 2)).join(" ")}
        </span>
      </p>

    </div>
  );
};

export default StatCard;
