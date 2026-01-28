import { Link } from "react-router-dom";

const InfoCard = ({ text, linkText, suffix, to }) => {
  return (
    <section className="px-4 mt-12 max-w-5xl mx-auto">
      {/* Mobile centered | Desktop pushed */}
      <div className="sm:ml-[85px]">
        <div
          className="
            flex
            h-[75px] sm:h-[85px]
            bg-[#F7F7F7]
            rounded-[15px]
            overflow-hidden
          "
        >
          {/* LEFT BLACK ACCENT */}
          <div className="w-[70px] sm:w-[85px] bg-black flex items-center justify-center">
            <img
              src="/icons/freelancer.svg"
              alt="info"
              className="w-4 sm:w-[28px] h-4 sm:h-[28px]"
            />
          </div>

          {/* CONTENT */}
          <div className="flex items-center px-4 sm:px-6">
            <p className="text-[16px] sm:text-[22px] leading-tight text-black">
              {text}

              <Link
                to={to}
                className="
    font-semibold
    text-black
    underline
    decoration-[#8967B3]
    decoration-2
    underline-offset-3 "
              >
                {linkText}
              </Link>

              {suffix}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
