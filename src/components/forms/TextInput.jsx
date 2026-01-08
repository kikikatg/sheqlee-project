const TextInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          h-[56px]
          px-4
          bg-[#DFDFDF]
          rounded-[14px]
          outline-none
          focus:ring-2 focus:ring-[#8967B3]
        "
      />
    </div>
  );
};

export default TextInput;
