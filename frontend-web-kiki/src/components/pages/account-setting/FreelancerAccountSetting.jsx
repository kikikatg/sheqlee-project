import { useNavigate } from "react-router-dom";
import Footer from "../../footer/Footer";
import SubNavbar from "../../all-jobs/SubNavbar";
import { useState, useRef } from "react";
import { useUser } from "../../../context/UserContext";

const InputBox = ({
  label,
  value: initialValue,
  placeholder,
  type = "text",
  onChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue || "");
  const inputRef = useRef(null);

  const enableEdit = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const disableEdit = () => {
    setIsEditing(false);
    onChange && onChange(value);
  };

  return (
    <div className="flex flex-col gap-2 w-[625px]">
      <label className="font-medium">
        {label} <span className="text-red-500">*</span>
      </label>

      <div
        className="h-[80px] bg-[#DFDFDF] rounded-[15px] px-6 flex items-center justify-between"
        onClick={!isEditing ? enableEdit : undefined}
      >
        {isEditing ? (
          <input
            ref={inputRef}
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={disableEdit}
            onKeyDown={(e) => e.key === "Enter" && disableEdit()}
            className="w-full bg-transparent outline-none text-[22px]"
            placeholder={placeholder}
          />
        ) : (
          <>
            <span className="text-[22px]">{value || placeholder}</span>
            <img
              src="/icons/edit-dark.svg"
              className="w-5 h-5 cursor-pointer"
              onClick={enableEdit}
            />
          </>
        )}
      </div>
    </div>
  );
};

const FreelancerAccountSetting = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="bg-white min-h-screen flex flex-col ">
      <SubNavbar crumbs={[{ label: "Account Setting", active: true }]} />

      <div className="w-full max-w-[1295px] mx-auto px-6">
        <div className="flex flex-col items-center mb-24">
          <div className="mt-6">
            <img
              src="/icons/account-setting.svg"
              alt="account-setting"
              className="w-[74px] h-[74px]"
            />
          </div>

          <h1 className="mt-[41px] text-[60px] font-semibold text-black">
            Account Setting
          </h1>

          <p className="mt-[25px] max-w-[632px] text-center text-[35px] leading-[40px] text-black">
            Edit your account settings to make your account more secure.
          </p>
        </div>

        <div className="flex text-[22px] gap-10 mt-12">
          <InputBox label="Full name" value={fullName} onChange={setFullName} />
          <InputBox label="Email" value={email} onChange={setEmail} />
        </div>

        <div className="flex gap-10 mt-14">
          <InputBox
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <InputBox
            label="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
        </div>

        <p className="mt-4 text-[21px]">
          Leave this empty if you don't want to change your password.
        </p>

        <div className="flex justify-end mt-10 w-full max-w-[1295px]">
          <button
            onClick={() => {
              if (password && password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
              }

              setUser((prev) => ({
                ...(prev || {}),
                fullName,
                email,
                password: password || prev?.password,
              }));

              alert("Account settings updated successfully!");
            }}
            className="w-[286px] h-[85px] bg-[#8967B3] rounded-[15px] text-white text-[24px] font-medium"
          >
            Update setting
          </button>
        </div>

        <div className="mt-20 w-[1295px] h-[5px] bg-[#DFDFDF] rounded-[15px]" />

        <h2 className="mt-12 text-3xl font-semibold">Account deletion</h2>

        <p className="mt-3 max-w-[900px] mb-10 text-[22px]">
          Please note that your account will be available for recovery for a
          period of one month after deletion. After that, it will be permanently
          deleted and cannot be recovered.
        </p>

        <label className="text-[22px] mt-20 font-medium">
          Deletion reason <span className="text-red-500">*</span>
        </label>

        <div className="w-full h-[280px] bg-[#DFDFDF] rounded-[15px] mt-4 relative">
          <textarea
            className="w-full h-full bg-transparent p-6 resize-none outline-none"
            placeholder="Why are you deleting your account..."
          />
          <span className="absolute bottom-4 right-6 text-sm text-gray-600">
            0/128
          </span>
        </div>

        <p className="mt-2 text-[20px]">
          Giving us accurate reason for your deletion will help us make Sheqlee
          better.
        </p>

        <div className="flex justify-end  mt-8 w-  [1295px]">
          <button
            onClick={() => {
              const reason = prompt(
                "Please provide a reason for deleting your account:"
              );
              if (!reason) return;

              localStorage.removeItem("user");

              alert("Your account has been deleted.");
              navigate("/login");
            }}
            className="w-[327px] h-[85px] bg-[#EA4335] rounded-[15px] text-white text-[24px]  mb-12 font-medium"
          >
            Delete account
          </button>
        </div>
      </div>
    </main>
  );
};

export default FreelancerAccountSetting;
