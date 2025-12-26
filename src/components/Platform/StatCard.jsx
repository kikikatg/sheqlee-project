const StatCard = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">

      {/* 🔧 STEP 8: ICON — larger & dominant */}
      <img
        src={icon}
        alt={label}
        className="w-14 h-14 sm:w-16 sm:h-16 mb-4"
      />

      {/* 🔧 STEP 8: VALUE — slightly reduced size */}
      <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
        {value}
      </p>

      {/* 🔧 STEP 8: LABEL — forced two-line hierarchy */}
      <p className="text-sm sm:text-base text-gray-900 leading-tight max-w-[240px]">
        <span className="block font-medium text-gray-9">
          {label.split(" ").slice(0, Math.ceil(label.split(" ").length / 2)).join(" ")}
        </span>
        <span className="block text-gray-900">
          {label.split(" ").slice(Math.ceil(label.split(" ").length / 2)).join(" ")}
        </span>
      </p>

    </div>
  );
};

export default StatCard;
