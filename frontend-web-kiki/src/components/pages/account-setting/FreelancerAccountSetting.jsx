import { useNavigate } from "react-router-dom";
import Footer from "../../footer/Footer";
import SubNavbar from "../../all-jobs/SubNavbar";
import { useState, useRef } from "react";
import { useUser } from "../../../context/UserContext";

/* ================= INPUT BOX ================= */
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
    <div className="flex flex-col gap-2 w-full min-w-0">
      <label className="font-medium text-[16px] md:text-[22px]">
        {label} <span className="text-red-500">*</span>
      </label>

      <div
        className="h-[64px] md:h-[80px] bg-[#DFDFDF] rounded-[15px] px-4 md:px-6 flex items-center justify-between"
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
            className="w-full bg-transparent outline-none text-[16px] md:text-[22px]"
            placeholder={placeholder}
          />
        ) : (
          <>
            <span className="text-[16px] md:text-[22px] truncate">
              {value || placeholder}
            </span>
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

/* ================= PAGE ================= */
const FreelancerAccountSetting = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* NAVBAR */}
      <div className="hidden sm:block">
        <SubNavbar crumbs={[{ label: "Dashboard", active: true }]} />
      </div>

      <div className="w-full max-w-[1295px] mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="flex flex-col items-center mb-10 md:mb-24">
          <img
            src="/icons/account-setting.svg"
            alt="account-setting"
            className="w-[48px] h-[48px] md:w-[66px] md:h-[66px] lg:w-[74px] lg:h-[74px] mt-6"
          />

          <h1 className="mt-6 md:mt-10 text-[28px] sm:text-[40px] md:text-[55px] lg:text-[60px] font-semibold text-center">
            Account Setting
          </h1>

          <p className="mt-4 max-w-[632px] text-center text-[16px] sm:text-[20px] md:text-[28px] lg:text-[35px]">
            Edit your account settings to make your account more secure.
          </p>
        </div>

        {/* FULL NAME + EMAIL */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          <InputBox label="Full name" value={fullName} onChange={setFullName} />
          <InputBox label="Email" value={email} onChange={setEmail} />
        </div>

        {/* PASSWORD SECTION */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-10 md:mt-14">
          {/* Password */}
          <div className="flex flex-col flex-1 min-w-0">
            <InputBox
              label="Password"
              value={password}
              onChange={setPassword}
              type="password"
              placeholder="**********"
            />

            <p
              className="mt-2 text-[12px] md:text-[14px]"
              style={{ fontFamily: "Kantumruy Pro" }}
            >
              Leave this empty if you don't want to change your password.
            </p>
          </div>

          {/* Confirm password */}
          <div className="flex flex-col flex-1 min-w-0">
            <InputBox
              label="Confirm password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              type="password"
              placeholder="**********"
            />
          </div>
        </div>

        {/* UPDATE BUTTON */}
        <div className="flex justify-end mt-8 md:mt-10">
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
                password: password || prev.password,
              }));

              alert("Account settings updated successfully!");
            }}
            className="w-[180px] sm:w-[220px] md:w-[286px] h-[56px] md:h-[85px] bg-[#8967B3] rounded-[15px] text-white text-[16px] md:text-[24px]"
          >
            Update setting
          </button>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 md:mt-24 w-full h-[4px] bg-[#DFDFDF] rounded-[15px]" />

        {/* ACCOUNT DELETION */}
        <h2 className="mt-10 md:mt-12 text-[22px] md:text-3xl font-semibold">
          Account deletion
        </h2>

        <p className="mt-3 max-w-[900px] mb-8 md:mb-10 text-[15px] md:text-[22px]">
          Please note that your account will be available for recovery for a
          period of one month after deletion. After that, it will be permanently
          deleted and cannot be recovered.
        </p>

        <label className="text-[16px] md:text-[22px] font-medium">
          Deletion reason <span className="text-red-500">*</span>
        </label>

        <div className="w-full h-[200px] md:h-[280px] bg-[#DFDFDF] rounded-[15px] mt-4 relative">
          <textarea
            className="w-full h-full bg-transparent p-4 md:p-6 resize-none outline-none"
            placeholder="Why are you deleting your account..."
          />
          <span className="absolute bottom-4 right-6 text-xs md:text-sm text-gray-600">
            0/128
          </span>
        </div>

        <p className="mt-2 text-[12px] md:text-[20px]">
          Giving us accurate reason will help us improve Sheqlee.
        </p>

        {/* DELETE BUTTON */}
        <div className="flex justify-end mt-6 md:mt-8">
          <button
            onClick={() => {
              localStorage.removeItem("user");
              alert("Your account has been deleted.");
              navigate("/login");
            }}
            className="w-[200px] sm:w-[260px] md:w-[327px] h-[56px] md:h-[85px] bg-[#EA4335] rounded-[15px] text-white text-[16px] md:text-[24px]"
          >
            Delete account
          </button>
        </div>

        <div className="mt-16 md:mt-20 w-full h-[2px] bg-[#DFDFDF] rounded-[15px]" />

        <p className="mt-4 mb-16 text-[14px] md:text-[20px]">
          <span className="text-red-500">*</span> fields are required
        </p>
      </div>

      <Footer />
    </main>
  );
};

export default FreelancerAccountSetting;
