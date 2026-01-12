const ClientStatCard = ({ stat }) => {
  const isRight = stat.accent === "right";

  return (
    <div
      className={`w-full  flex ${isRight ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`
    flex flex-col md:flex-row
    md:h-[200px]
    w-full max-w-[1100px]
    rounded-[20px]
    overflow-hidden
    bg-[#F7F7F7]
    mx-auto md:mx-14 lg:mx-24
    ${isRight ? "md:flex-row-reverse" : ""}
  `}
      >
        {/* ACCENT BAR */}
        <div className="w-full md:w-[361px] h-[120px] md:h-full bg-black flex items-center justify-center">
          <span className="text-white text-[32px] md:text-[48px] font-semibold">
            {stat.value}
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-6 md:py-0">
          <h3 className="text-[24px] md:text-[32px] font-semibold mb-3 md:mb-4">
            {stat.title}
          </h3>
          <p className="text-[16px] md:text-[20px] max-w-full md:max-w-[700px]">
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientStatCard;
