const FooterSocials = () => {
  return (
    <div className="flex flex-col gap-6 text-[18px]">
      {/* Title */}
      <p className="font-semibold text-gray-400">
        Follow us on
      </p>

      {/* Icons */}
      <div className="flex gap-6 cursor-pointer">
        {[
          "facebook",
          "twitter",
          "instagram",
          "telegram",
          "linkedin",
          "youtube",
        ].map((icon) => (
          <img
            key={icon}
            src={`/icons/${icon}.svg`}
            alt={icon}
            className="w-6 h-6 brightness-0 invert opacity-90 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterSocials;
