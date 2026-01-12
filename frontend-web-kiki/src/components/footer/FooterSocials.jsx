import mockSocialLinks from "../../data/mockSocialLinks";
const FooterSocials = () => {
  return (
    <div className="flex flex-col gap-6 text-[18px]">
      {/* Title */}
      <p className="font-semibold text-gray-400">Follow us on</p>

      {/* Icons */}
      <div className="flex gap-6">
        {mockSocialLinks.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="cursor-pointer"
          >
            <img
              src={`/icons/${name}.svg`}
              alt={name}
              className="w-6 h-6 brightness-0 invert opacity-90 hover:opacity-100 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocials;
