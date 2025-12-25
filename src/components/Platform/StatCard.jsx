const StatCard = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center text-center">
      
      <img
        src={icon}
        alt={label}
        className="w-10 h-10 mb-4"
      />

      <p className="text-[32px] md:text-[36px] font-semibold text-gray-900 leading-none mb-2">
        {value}
      </p>

      <p className="text-sm md:text-base text-gray-500">
        {label}
      </p>

    </div>
  );
};

export default StatCard;
