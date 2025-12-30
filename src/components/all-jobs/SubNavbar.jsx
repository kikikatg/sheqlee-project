const SubNavbar = ({ title = "All Jobs" }) => {
  return (
    <div className="w-full bg-[#FCFCFC]">
      <div
        className="
          max-w-[1920px]
          mx-auto
          h-[65px]
          flex
          items-center
          px-6
          sm:px-8
          md:px-16
          lg:px-[140px]
          font-['Kantumruy_Pro']
        "
      >
        <div className="flex items-center gap-4">
          {/* LOCATION ICON */}
          <img
            src="/icons/placeholder.svg"
            alt="location"
            className="w-[16px] h-[26px]"
          />

          {/* BRAND */}
          <span className="text-[18px] sm:text-[20px] lg:text-[22px] text-black">
            Sheqlee
          </span>

          {/* ARROW */}
          <img
            src="/icons/arrow-down.svg"
            alt="next"
            className="w-[7px] h-[10px] rotate-[-90deg]"
          />

          {/* DYNAMIC TITLE */}
          <span className="text-[20px] sm:text-[20px] lg:text-[22px] text-black">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
