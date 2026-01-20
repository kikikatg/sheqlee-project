import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="space-y-6 text-center sm:text-left">
      <h4
        className="
    relative
    inline-block
    text-gray-100
    font-semibold
    text-[14px]
    md:text-[20px]
    lg:text-[28px]
    sm:text-[16px]
    pb-2
    after:content-['']
    after:absolute
    after:left-0
    after:bottom-0
    after:w-36
    after:h-[2px]
    after:bg-white
  "
      >
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("#") ? (
              /* Disabled / future links */
              <span className="text-gray-400 text-[13px] sm:text-[15px] lg:text-[22px] md:text-[18px]  cursor-not-allowed">
                {link.label}
              </span>
            ) : (
              <Link
                to={link.href}
                className="text-gray-300 text-[17px] lg:text-[22px]  md:text-[18px]   hover:text-white leading-6 transition"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
