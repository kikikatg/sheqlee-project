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
      {/* Breadcrumbs */}
      <div className="hidden sm:block">
        <SubNavbar
          crumbs={[
            { label: "Reset Password", href: "/reset-password" },
            { label: "Set New Password", active: true },
          ]}
        />
      </div>

      <section className="flex-1 flex justify-center px-4 sm:px-6 lg:px-10 mt-16 mb-8">
        <form onSubmit={handleResetPassword} className="w-full max-w-[1100px]">
          <div className="w-full max-w-[520px] mx-auto lg:mx-0">
            {/* Header */}
            <div className="hidden sm:flex items-center gap-3 mb-10">
              <img src="/icons/padlock.svg" className="w-10 h-10" />
              <h1 className="text-3xl font-semibold">Set new password</h1>
            </div>

            <div className="flex sm:hidden flex-col items-center gap-3 mb-10">
              <img src="/icons/padlock.svg" className="w-10 h-10" />
              <h1 className="text-2xl font-semibold">Reset password</h1>
            </div>

            {/* ENTER CODE */}
            <div className="mb-12">
              <label className="block text-[18px] font-medium mb-3">
                Enter code
              </label>

              <div className="flex items-center w-full h-[60px] sm:h-[85px] bg-[#DFDFDF] rounded-[15px] overflow-hidden">
                <div className="w-[55px] sm:w-[85px] h-full bg-black flex items-center justify-center shrink-0">
                  <picture>
                    <source
                      media="(max-width: 640px)"
                      srcSet="/icons/email.svg"
                    />
                    <img src="/icons/code.svg" className="w-5 h-5" />
                  </picture>
                </div>

                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="123456"
                  required
                  className="w-full min-w-0 bg-transparent px-4 sm:px-6 text-[18px] sm:text-[22px] outline-none"
                />
              </div>

              <p className="text-[14px] text-gray-500 mt-2">
                Get a reset code from your email and input it above.
              </p>
            </div>
          </div>

          {/* PASSWORD GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            {/* New password */}
            <div className="w-full max-w-[520px] mx-auto lg:max-w-none lg:mx-0">
              <PasswordInput
                label="New password"
                value={password}
                onChange={setPassword}
                required
              />
              <p className="text-[14px] text-gray-500 mt-2">
                Set a strong password to protect your account.
              </p>
            </div>

            {/* Confirm password + button */}
            <div className="w-full max-w-[520px] mx-auto lg:max-w-none lg:mx-0 flex flex-col">
              <PasswordInput
                label="Confirm password"
                value={confirmPassword}
                onChange={setConfirmPassword}
                required
              />

              {/* BUTTON */}
              <div className="mt-10 flex justify-center lg:justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-1/2 sm:w-[220px] lg:w-[300px]
                    h-[56px] sm:h-[70px] lg:h-[80px]
                    bg-[#8967B3]
                    rounded-[15px]
                    text-white
                    text-[18px] sm:text-[24px] lg:text-[28px]
                    font-medium
                    flex items-center justify-center
                    hover:opacity-90 transition
                    disabled:opacity-60
                  "
                >
                  {loading ? "Resetting..." : "Reset password"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default SetNewPassword;
