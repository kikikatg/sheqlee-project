const SelectInput = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
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

      <select
        value={value}
        onChange={onChange}
        required={required}
        className="
          h-[56px]
          px-4
          bg-[#DFDFDF]
          rounded-[14px]
          outline-none
          focus:ring-2 focus:ring-[#8967B3]
        "
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
