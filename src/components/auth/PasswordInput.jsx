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
      <div className="relative flex items-center h-[85px] bg-[#DFDFDF] rounded-[15px]">
        {/* Left black accent */}
        <div className="w-[60px] h-full bg-black rounded-l-[15px] flex items-center justify-center">
          <img src="/icons/key.svg" alt="password" className="w-5 h-5" />
        </div>

        {/* Input */}
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="**********"
          required={required}
          className="flex-1 bg-transparent px-6 text-gray-800 outline-none text-[30px]"
        />

        {/* Eye icon */}
        <img
          src="/icons/eye.svg"
          alt="toggle"
          onClick={() => setShow(!show)}
          className="w-5 h-5 mr-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PasswordInput;
