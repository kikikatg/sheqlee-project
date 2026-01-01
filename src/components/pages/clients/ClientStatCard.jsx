const ClientStatCard = ({ stat }) => {
  const isRight = stat.accent === "right";

  return (
    <div className={`w-full  flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          flex
          h-[200px]
          w-[1100px]
          max-w-[1200px]
          rounded-[20px]
          overflow-hidden
          bg-[#F7F7F7]
          mx-14
          
          ${isRight ? "flex-row-reverse" : ""}
        `}
      >
        {/* ACCENT BAR */}
        <div className="w-[361px] bg-black flex items-center justify-center">
          <span className="text-white text-[48px] font-semibold">
            {stat.value}
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center px-16">
          <h3 className="text-[32px] font-semibold mb-4">
            {stat.title}
          </h3>
          <p className="text-[20px] max-w-[700px]">
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientStatCard;
