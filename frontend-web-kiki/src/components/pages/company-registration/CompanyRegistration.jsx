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
import { useUser } from "../../../context/UserContext";

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const { register, loading, apiError, success } = useRegister({
    role: "company",
  });

  const [form, setForm] = useState({
    company: "",
    domain: "",
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

    if (!form.company) e.company = true;
    if (!form.domain) e.domain = true;
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
      companyName: form.company,
      domain: form.domain,
      representativeName: form.name,
      email: form.email,
      password: form.password,
    });
  };
  /* ---------------- SUCCESS REDIRECT ---------------- */
  useEffect(() => {
    if (success) {
      const newUser = {
        role: "company",
        fullName: form.name,
        email: form.email,
        avatar: "",
        company: {
          name: form.company,
          domain: form.domain,
        },
      };

      // ✅ persist user
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);

      navigate("/company-dashboard");
    }
  }, [success, navigate]);

  return (
    <main className="bg-white min-h-screen">
      <SubNavbar crumbs={[{ label: "Company Signup", active: true }]} />

      <InfoCard
        text="If you are a freelancer, please visit"
        linkText="freelancers registration"
        to="/freelancer-signup"
      />

      {/* HEADER */}
      <section className="px-4 mt-16 max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4">
        <img src="/icons/building.svg" alt="" className="w-16 h-16" />
        <h1 className="text-4xl sm:text-[50px] font-semibold">
          Company Registration
        </h1>
      </section>

      {/* COMPANY INFO */}
      <section className="px-4 mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <TextInput
          label="Company name"
          required
          value={form.company}
          error={errors.company}
          placeholder="Sheqlee Co.Ltd."
          icon="/icons/company (1).svg"
          onChange={(v) => setForm({ ...form, company: v })}
        />

        <TextInput
          label="Domain"
          required
          value={form.domain}
          error={errors.domain}
          placeholder="sheqlee.com"
          prefix="https://"
          onChange={(v) => setForm({ ...form, domain: v })}
        />
      </section>

      <Divider text="COMPANY REPRESENTATIVE" />

      {/* REPRESENTATIVE */}
      <section className="px-4 mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
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
      <section className="px-4 mt-12 max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 sm:items-start">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="w-6 h-6 sm:w-[30px] sm:h-[30px]"
        />
        <p className="text-lg sm:text-[22px]">
          By creating an account, you agree to{" "}
          <Underline text="Terms and Conditions" to="/terms-and-conditions" />{" "}
          <Underline text="Privacy Policy" to="/privacy-policy" />.
        </p>
      </section>

      {apiError && (
        <p className="max-w-5xl mx-auto mt-4 text-red-500">{apiError}</p>
      )}

      {/* ACTION */}
      <section className="px-4 mt-16 max-w-5xl mx-auto flex flex-col sm:flex-row justify-end items-center gap-4">
        <p className="text-lg sm:text-[22px]">
          Already got an account? <Underline text="Login" bigger to="/login" />
        </p>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="
    w-full sm:w-[180px] 
    [@media(min-width:200px)_and_(max-width:700px)]:w-[140px]
    h-[60px] sm:h-[70px] 
    bg-[#8967B3] 
    rounded-[15px] 
    text-white text-lg sm:text-[24px] 
    disabled:opacity-60
  "
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </section>

      <Divider text="OR CONTINUE WITH" />

      {/* GOOGLE */}
      <section className="px-4 mt-12 max-w-5xl mx-auto flex justify-center ">
        <ContinueWithGoogle role="company" />
      </section>

      <section className="mt-20">
        <DeveloperCTA />
      </section>

      <Footer />
    </main>
  );
};

export default CompanyRegistration;
