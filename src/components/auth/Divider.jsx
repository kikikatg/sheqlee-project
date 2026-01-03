const Divider = ({ text }) => (
  <div className="flex items-center gap-6 max-w-5xl mx-auto mt-20">
    <span className="flex-1 h-[5px] bg-[#DDDDDD] rounded-[15px]" />
    <span className="text-[22px] font-medium">{text}</span>
    <span className="flex-1 h-[5px] bg-[#DDDDDD] rounded-[15px]" />
  </div>
);

export default Divider;
