const TextArea = ({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 4,
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

      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="
          p-4
          bg-[#DFDFDF]
          rounded-[14px]
          outline-none
          resize-none
          focus:ring-2 focus:ring-[#8967B3]
        "
      />
    </div>
  );
};

export default TextArea;
