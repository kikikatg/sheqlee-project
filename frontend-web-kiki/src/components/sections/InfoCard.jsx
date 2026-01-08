const InfoCard = () => {
  return (
    <div className="relative w-[970px] h-[120px] bg-[#F7F7F7] rounded-[15px] flex items-center pl-[140px]">
      <div className="absolute left-0 top-0 w-[120px] h-full bg-black rounded-l-[15px] flex items-center justify-center">
        <img src="/icons/template.svg" className="w-[47px] h-[47px]" />
      </div>

      <p className="text-[22px]">
        To speed up the process of posting a job, try using{" "}
        <span className="font-semibold underline cursor-pointer">
          job templates
        </span>.
      </p>
    </div>
  );
};

export default InfoCard;
