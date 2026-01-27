const ClientStatCard = ({ stat }) => {
  const isRight = stat.accent === "right";

  return (
    <div className={`w-full flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          flex flex-row
          h-[130px] sm:h-[200px]
          w-full max-w-[900px] sm:max-w-[1100px]
          rounded-[18px] sm:rounded-[20px]
          overflow-hidden
          bg-[#F7F7F7]
          mx-auto md:mx-14 lg:mx-24
          ${isRight ? "flex-row-reverse" : ""}
        `}
      >
        {/* ACCENT */}
        <div className="w-[110px] sm:w-[361px] h-full bg-black flex items-center justify-center">
          <span className="text-white text-[22px] sm:text-[48px] font-semibold">
            {stat.value}
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center px-4 sm:px-16">
          <h3 className="text-[18px] sm:text-[32px] font-semibold mb-1 sm:mb-4">
            {stat.title}
          </h3>
          <p className="text-[13px] sm:text-[20px] leading-snug sm:leading-normal">
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientStatCard;
