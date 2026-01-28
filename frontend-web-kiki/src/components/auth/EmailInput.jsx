const EmailInput = ({ value, onChange, required, label = "Email Address" }) => {
  return (
    <div className="w-full">
      <label className="block text-[16px] sm:text-[18px] font-medium mb-2 sm:mb-3">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div
        className="
          flex items-center
          h-[52px] sm:h-[85px]
          bg-[#DFDFDF]
          rounded-[15px]
          overflow-hidden
        "
      >
        <div
          className="
            w-[55px] sm:w-[60px]
            h-full
            bg-black
            flex items-center justify-center
          "
        >
          <img
            src="/icons/email.svg"
            alt="email"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </div>

        <input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="abebe@gmail.com"
          required={required}
          className="
            flex-1 bg-transparent
            px-4 sm:px-6
            text-[16px] sm:text-[22px]
            outline-none
          "
        />
      </div>
    </div>
  );
};

export default EmailInput;
