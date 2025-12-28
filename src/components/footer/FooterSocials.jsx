const FooterSocials = () => {
  return (
    <div className="space-y-4 text-sm">
      {/* Title */}
      <p className="font-semibold my text-gray-400 mx-6 ">
        Follow us on
      </p>

      {/* 🔧 CHANGED: icons white */}
      <div className="flex flex-row cursor-pointer gap-3 bg-white-white mx-6">
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
            className="w-5 h-5 brightness-0 invert opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterSocials;
