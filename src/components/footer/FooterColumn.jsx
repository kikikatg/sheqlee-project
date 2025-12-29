const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <h4 className="text-[22px] font-semibold text-white underline underline-offset-2">
        {title}
      </h4>

      <ul className="flex flex-col gap-1">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-[20px] text-gray-400 hover:text-white transition-colors"
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
