import { Link } from "react-router-dom";

const SubNavbar = ({ crumbs = [] }) => {
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
        <div className="flex items-center gap-3 text-black">
          {/* PLACEHOLDER ICON */}
          <img
            src="/icons/placeholder.svg"
            alt="Sheqlee"
            className="w-[14px] h-[24px]"
          />

          {/* HOME */}
          <Link
            to="/"
            className="text-[20px] sm:text-[18px] lg:text-[22px] hover:underline"
          >
            Sheqlee
          </Link>

          {/* DYNAMIC CRUMBS */}
          {crumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src="/icons/arrow-down.svg"
                alt="next"
                className="w-[7px] h-[10px] rotate-[-90deg]"
              />

              <Link
                to={crumb.href}
                className={`
                  text-[18px] sm:text-[20px] lg:text-[22px]
                  ${
                    crumb.active ? " font-['Kantumruy_Pro']" : "hover:underline"
                  }
                `}
              >
                {crumb.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
