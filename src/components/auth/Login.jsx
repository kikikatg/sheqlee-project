import { useState } from "react";
import { Link } from "react-router-dom";

import SubNavbar from "../all-jobs/SubNavbar";
import Footer from "../footer/Footer";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import ContinueWithGoogle from "./ContinueWithGoogle";
import Divider from "./Divider";
import DeveloperCTA from "../sections/DeveloperCTA";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="bg-white min-h-screen flex flex-col overflow-x-hidden">
      {/* Breadcrumb */}
      <SubNavbar crumbs={[{ label: "Login", active: true }]} />

      {/* Content */}
      <section className="flex-grow flex justify-center px-4 md:px-8">
        <div className="w-full max-w-5xl mt-16">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <img src="/icons/enter.svg" alt="login" className="w-12 h-12" />
            <h1 className="text-[32px] md:text-[40px] font-semibold text-black">
              Login to your account
            </h1>
          </div>

          {/* Form */}
          <div className="space-y-10 ">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
              <EmailInput
                value={email}
                onChange={setEmail}
                required
              />

              <PasswordInput
                value={password}
                onChange={setPassword}
                required
              />
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
                <span className="text-[22px] text-gray-800">
                  Remember me next time.
                </span>
              </label>

              {/* Right actions */}
              <div className="flex items-center gap-6">
                <div className="flex text-[22px] items-center gap-2">
                  <p>Forgot password?</p>
                  <Link
                    to="/reset"
                    className="underline decoration-[#8967B3] underline-offset-[4px] text-black"
                  >
                    Reset
                  </Link>
                </div>

                <Link
                  to="/login"
                  className="w-[150px] h-[70px] bg-[#8967B3] rounded-[15px] text-white text-[24px] flex items-center justify-center"
                >
                  Login
                </Link>
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
