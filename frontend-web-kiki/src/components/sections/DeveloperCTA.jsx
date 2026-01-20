import React from "react";
import { Link } from "react-router-dom";

const DeveloperCTA = () => {
  return (
    <section
      className="
    w-full
    bg-[#DFDFDF]
    py-10 sm:py-14
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
            className="w-8 h-8 sm:w-10 sm:h-10"
          />

          <p
            className="
             text-[20px]
sm:text-[24px]
md:text-[26px]
lg:text-[28px]
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
        <Link to="/freelancer-signup">
          <button
            className="
            bg-[#8967B3]
            text-white
                     text-[20px]
sm:text-[24px]
md:text-[26px]
lg:text-[28px]
            font-medium
            px-8
            sm:h-[60px]
            rounded-[15px]
            hover:opacity-90
            transition
            w-[180px] h-[60px]
            md:w-[200px]
            md:h-[70px]
             lg:h-[80px]
             lg:w-[200px]
              sm:w-[200px]
          "
          >
            Sign up
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DeveloperCTA;
