import React from "react";

const NoResults = ({ message = "No results foundsdasdadadadasdadas" }) => {
  return (
    <div
      className="
        w-full
        flex
        flex-col
        items-center
        justify-center
        py-24
      "
    >
      {/* ICON */}
      <img
        src="/icons/error.svg"
        alt="No results"
        className="w-[70px] h-[140px] mb-6"
      />

      {/* MESSAGE */}
      <p
        className="
          text-center
          text-[30px]
          leading-[40px]
          text-[#444444]
          font-normal
        "
        style={{ fontFamily: "Kantumruy Pro" }}
      >
        {message}
      </p>
    </div>
  );
};

export default NoResults;
