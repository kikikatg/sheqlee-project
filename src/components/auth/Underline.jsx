import { useNavigate } from "react-router-dom";

const Underline = ({ text, to, bigger }) => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => to && navigate(to)}
      className={`
        relative cursor-pointer font-semibold inline-block
        ${bigger ? "text-[24px]" : "text-[22px]"}
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
