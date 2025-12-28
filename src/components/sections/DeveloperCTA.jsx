import React from "react";

const DeveloperCTA = () => {
  return (
    <section
      className="
        w-full
        bg-[#DFDFDF]
        h-[140px]
        flex
        items-center
        mt-10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          px-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-center
          gap-6
        "
      >
        {/* ICON + TEXT */}
        <div className="flex items-center gap-4">
          <img
            src="/icons/celebration.png"
            alt="Celebration"
            className="w-10 h-10"
          />

          <p
            className="
              text-[16px]
              sm:text-[18px]
              md:text-[24px]
              font-medium
              text-black
              text-center
              md:text-left
            "
          >
            Are you a software developer in Ethiopia?
          </p>
        </div>

        {/* BUTTON */}
        <button
          className="
            bg-[#8967B3]
            text-white
            text-[18px]
            font-medium
            px-8
            h-[50px]
            rounded-[15px]
            hover:opacity-90
            transition
            w-full
            md:w-auto
          "
        >
          Sign up
        </button>
      </div>
    </section>
  );
};

export default DeveloperCTA;
