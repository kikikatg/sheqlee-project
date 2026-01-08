import { useState } from "react";
import SubNavbar from "../all-jobs/SubNavbar";
import Footer from "../footer/Footer";
import DeveloperCTA from "../sections/DeveloperCTA";
import PasswordInput from "./PasswordInput";

const SetNewPassword = () => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log({ code, password });
    }, 1500);
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* ✅ Breadcrumbs (ONLY VALID ROUTES) */}
      <SubNavbar
  crumbs={[
    { label: "Reset Password", href: "/reset-password" },
    { label: "Set New Password", active: true },
  ]}
/>


      <section className="flex-1 flex justify-center px-4 mt-16 mb-8">
        <form onSubmit={handleResetPassword} className="w-full max-w-[900px]">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <img
              src="/icons/padlock.svg"
              alt="Set new password"
              className="w-10 h-10"
            />
            <h1 className="text-3xl font-semibold">
              Set new password
            </h1>
          </div>

          {/* Enter code */}
          <div className="max-w-[520px] mb-12">
            <label className="block text-[18px] font-medium mb-3">
              Enter code
            </label>

            <div className="relative flex items-center h-[85px] bg-[#DFDFDF] rounded-[15px]">
              <div className="w-[60px] h-full bg-black rounded-l-[15px] flex items-center justify-center">
                <img src="/icons/code.svg" alt="code" className="w-5 h-5" />
              </div>

              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="123456"
                required
                className="flex-1 bg-transparent px-6 text-gray-800 outline-none text-[22px]"
              />
            </div>

            <p className="text-[16px] text-gray-500 mt-2">
              Get a reset code from your email and input it above.
            </p>
          </div>

          {/* Passwords */}
          <div className="flex flex-col lg:flex-row gap-10 mb-14">
            {/* New password */}
            <div className="w-full max-w-[520px]">
              <PasswordInput
                label="New password"
                value={password}
                onChange={setPassword}
                required
              />
              <p className="text-[16px] text-gray-500 mt-2">
                Set a strong password to protect your account.
              </p>
            </div>

            {/* Confirm password */}
            <div className="w-full max-w-[520px] lg:ml-auto">
              <PasswordInput
                label="Confirm password"
                value={confirmPassword}
                onChange={setConfirmPassword}
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="w-full flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="
                w-[300px]
                h-[80px]
                bg-[#8967B3]
                rounded-[15px]
                text-white
                text-[28px]
                font-medium
                flex
                items-center
                justify-center
                hover:opacity-90
                transition
                disabled:opacity-60
              "
            >
              {loading ? "Resetting..." : "Reset password"}
            </button>
          </div>
        </form>
      </section>

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default SetNewPassword;
