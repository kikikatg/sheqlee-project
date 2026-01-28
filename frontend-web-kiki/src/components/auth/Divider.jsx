const Divider = ({ text }) => (
  <div
    className="
    flex items-center gap-4 sm:gap-6 
    max-w-5xl mx-auto 
    mt-16 sm:mt-20 
    px-4 sm:px-0
  "
  >
    <span className="flex-1 h-[4px] sm:h-[5px] bg-[#DDDDDD] rounded-[15px]" />
    <span className="text-[16px] sm:text-[22px] font-medium whitespace-nowrap">
      {text}
    </span>
    <span className="flex-1 h-[4px] sm:h-[5px] bg-[#DDDDDD] rounded-[15px]" />
  </div>
);

export default Divider;
