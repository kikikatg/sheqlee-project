import { useState } from "react";

const PasswordInput = ({ value, onChange, required, label = "Password" }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      <label className="block text-[16px] sm:text-[22px]   lg:text-[26px] md:text-[24px]   font-medium mb-2 sm:mb-3">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div
        className="
        relative flex 
        h-[52px] sm:h-[85px] 
        bg-[#DFDFDF] rounded-[15px] overflow-hidden
      "
      >
        <div className="w-[55px] sm:w-[90px] bg-black flex items-center justify-center">
          <img src="/icons/key.svg" alt="" className="w-6 sm:w-6" />
        </div>

        <div className="flex flex-1 items-center">
          <input
            type={show ? "text" : "password"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="********"
            className="
              flex-1 bg-transparent 
              px-4 sm:px-6 
              text-[14px] sm:text-[22px] 
              outline-none
            "
          />

          <img
            src="/icons/eye.svg"
            alt="toggle"
            onClick={() => setShow(!show)}
            className="w-4 sm:w-5 h-4 sm:h-5 mr-4 sm:mr-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
