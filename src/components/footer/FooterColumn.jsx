import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="space-y-6 text-center sm:text-left">
      <h4 className="text-white font-semibold text-[20px] uppercase">
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("#") ? (
              /* Disabled / future links */
              <span className="text-gray-400 text-[17px] cursor-not-allowed">
                {link.label}
              </span>
            ) : (
              <Link
                to={link.href}
                className="text-gray-300 text-[17px] hover:text-white transition"
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
