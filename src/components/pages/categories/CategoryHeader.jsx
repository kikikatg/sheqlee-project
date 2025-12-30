import React from "react";
import SubNavbar from "../../all-jobs/SubNavbar";

const CategoryHeader = ({ title, icon, description }) => {
  return (
    <>
      {/* ================= SUB NAVBAR ================= */}
      <SubNavbar title={`Categories/${title}`} />

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

        {/* ================= SUBSCRIBERS COUNT ================= */}
        <p
          className="mt-6 text-[22px] md:text-[28px] text-black"
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          Subscribers: <span className="font-medium">1,784</span>
        </p>

        {/* ================= SOCIAL ICONS ================= */}
        <div className="mt-6 flex justify-center gap-6">
          <img src="/icons/socials.svg" alt="Twitter" className="w-30 h-18" />
         
        </div>
      </section>
    </>
  );
};

export default CategoryHeader;
