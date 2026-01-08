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
    <label className="block text-[22px] mb-3 font-medium">
      {label} <span className="text-red-500">*</span>
    </label>

    <div className="flex h-[85px] bg-[#DFDFDF] rounded-[15px] overflow-hidden">
      {icon && (
        <div className="w-[85px] bg-black flex items-center justify-center">
          <img src={icon} alt="" />
        </div>
      )}

      {prefix && (
        <div className="w-[85px] bg-black text-white flex items-center justify-center">
          {prefix}
        </div>
      )}

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent px-6 text-[22px] outline-none"
      />
    </div>

    {error && <p className="text-red-500 mt-2">{error}</p>}
  </div>
);

export default TextInput;
