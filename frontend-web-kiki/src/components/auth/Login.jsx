import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SubNavbar from "../all-jobs/SubNavbar";
import Footer from "../footer/Footer";
import { useUser } from "../../context/UserContext";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import ContinueWithGoogle from "./ContinueWithGoogle";
import Divider from "./Divider";
import DeveloperCTA from "../sections/DeveloperCTA";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const navigate = useNavigate(); // ✅ ADD

  const handleLogin = () => {
    // mock login (API-ready)
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser || savedUser.email !== email) {
      alert("Account not found. Please register.");
      return;
    }

    setUser(savedUser);
    navigate("/user");
  };

  return (
    <main className="bg-white min-h-screen flex flex-col overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="hidden sm:block">
        <SubNavbar crumbs={[{ label: "Login", active: true }]} />
      </div>
      {/* Content */}
      <section
        className="
  px-4 mt-4 max-w-5xl mx-auto 
  flex flex-col sm:flex-row 
  items-center sm:items-center 
 sm:text-left 
  gap-4
"
      >
        <div className="w-full max-w-5xl mt-10">
          {/* Header */}
          <div
            className="
    flex flex-col sm:flex-row
    items-center
    gap-4
    mb-12
    text-center sm:text-left
  "
          >
            <img
              src="/icons/enter.svg"
              alt="login"
              className="w-12 h-12 mx-auto sm:mx-0"
            />

            <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold">
              Login to your account
            </h1>
          </div>

          {/* Form */}
          <div className="space-y-10">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <EmailInput value={email} onChange={setEmail} required />
              <PasswordInput value={password} onChange={setPassword} required />
            </div>

            {/* Remember + Actions */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Remember me */}
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-[30px] h-[30px] bg-[#DFDFDF] rounded flex items-center justify-center">
                  <img
                    src="/icons/checkmark.svg"
                    alt="checked"
                    className="w-4 h-4"
                  />
                </div>
                <span className="text-[16px] lg:text-[26px] md:text-[22px] sm:text-[20px] text-gray-800">
                  Remember me next time.
                </span>
              </label>

              {/* Right actions */}
              <div className="flex items-center gap-6">
                <div
                  className="
    flex flex-wrap
    items-center
    justify-center md:justify-end
    gap-1
    text-[14px] sm:text-[22px]
  "
                >
                  <span>Forgot password?</span>

                  <Link
                    to="/reset-password"
                    className="
      underline
      decoration-[#8967B3]
      underline-offset-2
      text-black
      font-medium
    "
                  >
                    Reset
                  </Link>
                </div>

                {/* ✅ FIXED LOGIN BUTTON */}
                <button
                  onClick={handleLogin}
                  className="w-[150px] lg:w-[180px]sm:w-[150px] md:w-[130px] h-[60px] bg-[#8967B3] rounded-[15px] text-white text-[24px] flex items-center justify-center"
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <Divider text="OR CONTINUE WITH" />

          {/* Google */}
          <div className="mt-10 mb-14 flex justify-center">
            <ContinueWithGoogle />
          </div>
        </div>
      </section>

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default Login;
