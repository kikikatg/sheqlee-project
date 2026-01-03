import { Link } from "react-router-dom";

const InfoCard = ({ text, linkText, to }) => {
  return (
    <section className="px-4 mt-12 max-w-5xl mx-auto">
      {/* PUSHED RIGHT like other cards */}
      <div className="ml-[85px]">
        <div className="flex h-[85px] bg-[#F7F7F7] rounded-[15px] overflow-hidden">
          {/* LEFT BLACK ACCENT (same width as inputs) */}
          <div className="w-[85px] bg-black flex items-center justify-center">
            <img
              src="/icons/freelancer.svg"
              alt="info"
              className="w-[28px] h-[28px]"
            />
          </div>

          {/* CONTENT */}
          <div className="flex items-center px-6">
            <p className="text-[22px]">
              {text}{" "}
              <Link to={to} className="font-semibold underline">
                {linkText}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
