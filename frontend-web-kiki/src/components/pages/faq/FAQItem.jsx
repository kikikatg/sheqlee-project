const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="w-full max-w-[1188px] mx-auto">
      {/* ================= QUESTION ================= */}
      <button
        onClick={onToggle}
        className={`
          w-full
          flex items-center justify-between
          px-6 sm:px-8
          h-[80px] sm:h-[100px] lg:h-[115px]
          bg-[#DFDFDF]
          text-left
          transition
          ${isOpen ? "rounded-t-[15px]" : "rounded-[15px]"}
        `}
      >
        <span className="text-[16px] sm:text-[22px] lg:text-[28px] text-black">
          {item.question}
        </span>

        <img
          src={
            isOpen
              ? "/icons/arrow-expand.svg"
              : "/icons/arrow-down.svg"
          }
          alt=""
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform"
        />
      </button>

      {/* ================= ANSWER ================= */}
      {isOpen && (
        <div
          className="
            w-full
            bg-[#F7F7F7]
            px-6 sm:px-8
            py-6 sm:py-8
            rounded-b-[15px]
            text-[16px] sm:text-[20px] lg:text-[30px]
            leading-[28px] sm:leading-[34px] lg:leading-[42px]
            text-black
          "
        >
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
