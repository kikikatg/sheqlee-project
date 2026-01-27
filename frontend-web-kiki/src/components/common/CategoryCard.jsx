import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const { id, name, jobsCount, subscribers, icon } = category;

  return (
    <div
      onClick={() => navigate(`/categories/${id}`)}
      className="
        w-full max-w-[520px]
        h-[100px] sm:h-[110px] md:h-[120px]
        mx-auto bg-[#F7F7F7] rounded-[20px]
        flex overflow-hidden cursor-pointer transition hover:shadow-lg
        flex-row
      "
    >
      {/* LEFT ICON */}
      <div
        className="
          w-[70px] sm:w-[90px] md:w-[120px]
          h-full bg-black
          flex items-center justify-center
          rounded-l-[20px]
        "
      >
        <img
          src={icon}
          alt={name}
          className="
            w-[30px] sm:w-[40px] md:w-[50px]
            h-[30px] sm:h-[40px] md:h-[50px]
            object-contain invert
          "
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="flex flex-col justify-center px-3 sm:px-6 md:px-8 py-2 sm:py-0">
        <h3 className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-medium truncate">
          {name}
        </h3>

        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[22px] mt-1 sm:mt-1.5 md:mt-2 truncate">
          {jobsCount} Jobs · {subscribers} Subscribers
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
