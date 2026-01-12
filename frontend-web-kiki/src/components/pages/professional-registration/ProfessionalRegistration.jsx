import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SubNavbar from "../../all-jobs/SubNavbar";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";

import InfoCard from "../../auth/InfoCard";
import Divider from "../../auth/Divider";
import Underline from "../../auth/Underline";
import TextInput from "../../auth/TextInput";
import PasswordInput from "../../auth/PasswordInput";
import ContinueWithGoogle from "../../auth/ContinueWithGoogle";

import useRegister from "../../../data/useRegister";

const ProfessionalRegistration = () => {
  const navigate = useNavigate();

  const { register, loading, apiError, success } = useRegister({
    role: "freelancer",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const e = {};

    if (!form.name) e.name = true;
    if (!form.email) e.email = true;

    if (form.password.length < 8)
      e.password = "Password must be at least 8 characters";

    if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    if (!agreed) e.agreed = true;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleRegister = () => {
    if (!validate()) return;

    register({
      fullName: form.name,
      email: form.email,
      password: form.password,
    });
  };

  /* ---------------- SUCCESS REDIRECT ---------------- */
  useEffect(() => {
    if (success) {
      navigate("/freelancer-dashboard");
    }
  }, [success, navigate]);

  return (
    <main className="bg-white min-h-screen">
      <SubNavbar crumbs={[{ label: "Professional Signup", active: true }]} />

      <InfoCard
        text="If you are a company, please visit"
        linkText="company registration"
        to="/company-signup"
      />

      {/* HEADER */}
      <section className="px-4 mt-16 max-w-5xl mx-auto flex gap-4">
        <img src="/icons/person.svg" alt="" className="w-16 h-16" />
        <h1 className="text-[55px] font-semibold">Professional Registration</h1>
      </section>

      {/* BASIC INFO */}
      <section className="px-4 mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <TextInput
          label="Full name"
          required
          value={form.name}
          error={errors.name}
          placeholder="Abebe Bekila"
          icon="/icons/person.svg"
          onChange={(v) => setForm({ ...form, name: v })}
        />

        <TextInput
          label="Email"
          required
          value={form.email}
          error={errors.email}
          placeholder="abebe@gmail.com"
          icon="/icons/email.svg"
          onChange={(v) => setForm({ ...form, email: v })}
        />
      </section>

      {/* PASSWORDS */}
      <section className="px-4 mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <PasswordInput
          label="Password"
          required
          value={form.password}
          error={errors.password}
          onChange={(v) => setForm({ ...form, password: v })}
        />

        <PasswordInput
          label="Confirm password"
          required
          value={form.confirmPassword}
          error={errors.confirmPassword}
          onChange={(v) => setForm({ ...form, confirmPassword: v })}
        />
      </section>

      {/* TERMS */}
      <section className="px-4 mt-12 max-w-5xl mx-auto flex gap-4 items-start">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="w-[30px] h-[30px]"
        />
        <p className="text-[22px]">
          By creating an account, you agree to{" "}
          <Underline text="Terms and Conditions" to="/terms-and-conditions" />{" "}
          <Underline text="Privacy Policy" to="/privacy-policy" />.
        </p>
      </section>

      {apiError && (
        <p className="max-w-5xl mx-auto mt-4 text-red-500">{apiError}</p>
      )}

      {/* ACTION */}
      <section className="px-4 mt-16 max-w-5xl mx-auto flex justify-end">
        <button
          onClick={handleRegister}
          disabled={loading}
          className="
            w-[180px] h-[70px]
            bg-[#8967B3]
            rounded-[15px]
            text-white text-[24px]
            disabled:opacity-60
          "
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </section>

      <Divider text="OR CONTINUE WITH" />

      {/* GOOGLE */}
      <section className="px-4 mt-20 max-w-5xl mx-auto flex justify-center">
        <ContinueWithGoogle role="freelancer" />
      </section>

      <section className="mt-20">
        <DeveloperCTA />
      </section>

      <Footer />
    </main>
  );
};

export default ProfessionalRegistration;
