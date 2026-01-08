const statsIcons = [
  "/icons/handshake.svg",
  "/icons/user.svg",
  "/icons/building.svg",
];

const PlatformStatsSkeleton = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="skeleton h-7 w-48 mx-auto mb-12"></div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {statsIcons.map((icon, i) => (
            <div key={i} className="text-center">

              {/* ✅ ICON (NO SHIMMER) */}
              <img
                src={icon}
                alt=""
                className="w-12 h-12 mx-auto mb-4 no-shimmer"
              />

              {/* VALUE */}
              <div className="skeleton h-6 w-20 mx-auto mb-2"></div>

              {/* LABEL */}
              <div className="skeleton h-4 w-36 mx-auto"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformStatsSkeleton;
