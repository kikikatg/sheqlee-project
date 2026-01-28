import { useNavigate } from "react-router-dom";

const Underline = ({ text, to, bigger }) => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => to && navigate(to)}
      className={`
        relative cursor-pointer font-semibold inline-block
        ${bigger ? "text-[16px] sm:text-[22px] md:text-[24px] lg:text-[26px]  " : "text-[16px] sm:text-[22px] md:text-[24px] lg:text-[26px] "}
        after:content-['']
        after:absolute
        after:left-0
        after:bottom-0
        after:w-full
        after:h-[3px]
        after:bg-[#8967B3]
      `}
    >
      {text}
    </span>
  );
};

export default Underline;
