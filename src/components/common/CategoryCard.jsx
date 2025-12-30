import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const { id, name, jobsCount, subscribers, icon } = category;

  return (
    <div
      onClick={() => navigate(`/categories/${id}`)}
      className="
        w-full
        max-w-[600px]
        h-[120px]
        mx-auto
        bg-[#F7F7F7]
        rounded-[20px]
        flex
        overflow-hidden
        cursor-pointer
        transition
        hover:shadow-lg
      "
    >
      {/* LEFT */}
      <div className="w-[120px] bg-black flex items-center justify-center rounded-l-[20px]">
        <img
          src={icon}
          alt={name}
          className="w-[60px] h-[60px] object-contain invert"
        />
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-center px-8">
        <h3
          className="text-[22px] md:text-[28px] font-medium"
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          {name}
        </h3>

        <p
          className="text-[16px] md:text-[22px]"
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          {jobsCount} Jobs · {subscribers} Subscribers
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
