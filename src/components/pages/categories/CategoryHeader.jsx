import React from "react";
import SubNavbar from "../../all-jobs/SubNavbar";

const CategoryHeader = ({ title, icon, description, subscribers }) => {
  return (
    <>
      {/* ================= SUB NAVBAR ================= */}
      <SubNavbar
        title={
          <div className="flex items-center gap-2">
            <span>Categories</span>

           <img
            src="/icons/arrow-down.svg"
            alt="next"
            className="w-[7px] h-[10px] rotate-[-90deg]"
          />

            <span className="font-medium">{title}</span>
          </div>
        }
      />

      <section className="max-w-7xl mx-auto px-4 pt-20 text-center">
        {/* ================= ICON ================= */}
        <div className="flex justify-center mb-8">
          <img
            src={icon}
            alt={title}
            className="w-[120px] h-[120px]"
          />
        </div>

        {/* ================= TITLE ================= */}
        <h1
          className="text-[36px] md:text-[56px] font-semibold text-black"
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          {title}
        </h1>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="mt-6 max-w-[880px] mx-auto text-[18px] md:text-[28px]"
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          {description}
        </p>

        {/* ================= SUBSCRIBE BUTTON ================= */}
        <div className="mt-14 flex justify-center">
          <button
            className="
              w-full
              max-w-[453px]
              h-[85px]
              bg-[#8967B3]
              rounded-[15px]
              flex
              items-center
              justify-center
              gap-4
              text-white
              text-[24px]
              md:text-[28px]
              font-medium
              hover:opacity-90
            "
          >
            <img
              src="/icons/bell.svg"
              alt="Subscribe"
              className="w-8 h-8"
            />
            Subscribe to Category
          </button>
        </div>

        {/* ================= SUBSCRIBERS COUNT (DYNAMIC) ================= */}
        <p
          className="mt-6 text-[22px] md:text-[28px] text-black"
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          Subscribers:{" "}
          <span className="font-medium">
            {subscribers?.toLocaleString()}
          </span>
        </p>

        {/* ================= SOCIAL ICONS ================= */}
        <div className="mt-6 flex justify-center gap-6">
          <img
            src="/icons/socials.svg"
            alt="Socials"
            className="h-5 w-26"
          />
        </div>
      </section>
    </>
  );
};

export default CategoryHeader;
