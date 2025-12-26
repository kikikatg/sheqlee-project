const FooterColumn = ({ title, links }) => {
  return (
    <div className="space-y-6 relative inline-block ">
      {/* 🔧 CHANGED: larger, white, underlined */}
      <h4 className="text-base font-semibold text-white underline  underline-offset-2 mb-2 ">
        {title}
      </h4>

      <ul className="space-y-0">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              /* 🔧 CHANGED: white typography */
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
