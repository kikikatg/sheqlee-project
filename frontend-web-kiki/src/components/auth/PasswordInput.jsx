import { useState } from "react";

const PasswordInput = ({ value, onChange, required, label = "Password" }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      {/* Label */}
      <label className="block text-[18px] font-medium mb-3">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Input container */}
      <div className="relative flex h-[85px] bg-[#DFDFDF] rounded-[15px] overflow-hidden">
        {/* Left black accent */}
        <div className="w-[90px] bg-black flex items-center justify-center">
          <img src="/icons/key.svg" alt="password" className="w-6 h-5" />
        </div>

        {/* Input + eye */}
        <div className="flex flex-1 items-center">
          <input
            type={show ? "text" : "password"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="********"
            required={required}
            className="flex-1 bg-transparent px-6 text-gray-800 outline-none text-[22px]"
          />

          <img
            src="/icons/eye.svg"
            alt="toggle"
            onClick={() => setShow(!show)}
            className="w-5 h-5 mr-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
