const TextInput = ({
  label,
  value,
  onChange,
  error,
  icon,
  prefix,
  placeholder,
}) => (
  <div>
    <label className="block text-[16px] lg:text-26 md:text-24 sm:text-[22px] mb-2 sm:mb-3 font-medium">
      {label} <span className="text-red-500">*</span>
    </label>

    <div
      className="
        relative flex 
        h-[52px] sm:h-[85px] 
        bg-[#DFDFDF] rounded-[15px] overflow-hidden
      "
    >
      {icon && (
        <div className="w-[55px] sm:w-[85px] bg-black flex items-center justify-center">
          <img src={icon} alt="" className="w-5 sm:w-auto" />
        </div>
      )}

      {prefix && (
        <div className="w-[55px] sm:w-[85px] bg-black text-white flex items-center justify-center text-sm sm:text-base">
          {prefix}
        </div>
      )}

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          flex-1 bg-transparent 
          px-4 sm:px-6 
          text-[16px] sm:text-[22px] 
          outline-none
        "
      />
    </div>

    {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
  </div>
);

export default TextInput;
