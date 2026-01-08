import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../all-jobs/SubNavbar";
import Footer from "../footer/Footer";
import EmailInput from "./EmailInput";
import DeveloperCTA from "../sections/DeveloperCTA";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = (e) => {
    e.preventDefault();
    setLoading(true);

    // 🔁 Mock API – replace later
    setTimeout(() => {
      setLoading(false);
      navigate("/set-new-password"); // 👉 next page
    }, 1500);
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Sub Navbar + Breadcrumb */}
      <SubNavbar crumbs={[{ label: "Reset Password", active: true }]} />

      {/* Page Content */}
      <section className="flex-1 flex justify-center px-4 mt-16 mb-8">
        <form
          onSubmit={handleSendCode}
          className="w-full max-w-[520px] flex flex-col"
        >
          {/* Icon + Title (LEFT aligned) */}
          <div className="flex items-center gap-3 mb-10">
            <img
              src="/icons/padlock.svg"
              alt="Reset password"
              className="w-10 h-10"
            />
            <h1 className="text-3xl font-semibold">
              Reset password
            </h1>
          </div>

          {/* Email */}
          <div className="w-full mb-2">
           <EmailInput
  value={email}
  onChange={setEmail}
  placeholder="abebe@gmail.com"
  required
/>

          </div>

          {/* Helper text */}
          <p className="text-[18px] text-gray-500 mt-2 mb-10">
            You will receive a password reset code in your email.
          </p>

          {/* Send Code Button (RIGHT aligned) */}
          <div className="w-full flex mt-2  justify-end">
            <button
              type="submit"
              disabled={loading}
              className="
                w-[216px]
                h-[85px]
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
              {loading ? "Sending..." : "Send code"}
            </button>
          </div>
        </form>
      </section>

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default ResetPassword;
