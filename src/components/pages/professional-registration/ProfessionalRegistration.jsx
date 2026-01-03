import { useState } from "react";
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

const ProfessionalRegistration = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);

  const validate = () => {
    const e = {};
    if (form.password.length < 8)
      e.password = "Password must be at least 8 characters";
    if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords do not match";
    if (!agreed) e.agreed = true;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRegister = () => {
    if (!validate()) return;
    console.log("Professional registered", form);
    navigate("/professional-signup");
  };

  return (
    <main className="bg-white min-h-screen">
      <SubNavbar crumbs={[{ label: "Professional Signup", active: true }]} />

      <InfoCard
        text="If you are a company, please visit"
        linkText="company registration"
        to="/company-signup"
      />

      <section className="px-4 mt-16 max-w-5xl mx-auto flex gap-4">
        <img src="/icons/person.svg" alt="" />
        <h1 className="text-[55px] font-semibold">Professional Registration</h1>
      </section>

      <section className="px-4 mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <TextInput
          label="Full name"
          required
          value={form.name}
          placeholder="Abebe Bekila"
          icon="/icons/person.svg"
          onChange={(v) => setForm({ ...form, name: v })}
        />

        <TextInput
          label="Email"
          required
          value={form.email}
          placeholder="abebe@gmail.com"
          icon="/icons/email.svg"
          onChange={(v) => setForm({ ...form, email: v })}
        />
      </section>

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

      <section className="px-4 mt-12 max-w-5xl mx-auto flex gap-4">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="w-[30px] h-[30px]  bg-[#DFDFDF]"
        />
        <p className="text-[22px] ">
          By creating an account, you agree to{" "}
          <Underline text="Terms and Conditions" to="/terms-and-conditions" />{" "}
          <Underline text="Privacy Policy" to="/privacy-policy" />.
        </p>
      </section>

      <section className="px-4 mt-16 max-w-5xl mx-auto flex justify-end gap-6">
        <p className="text-[22px]">
          Already got an account?
          <Underline text="Login" bigger to="/login" />
        </p>

        <button
          onClick={handleRegister}
          className="w-[180px] h-[70px] bg-[#8967B3] rounded-[15px] text-white text-[24px]"
        >
          Register
        </button>
      </section>

      <Divider text="or CONTINUE WITH" />

      <section className="px-4 mt-12 max-w-5xl mx-auto flex justify-center">
        <ContinueWithGoogle onClick={() => console.log("Google auth")} />
      </section>

      <section className="mt-20">
        <DeveloperCTA />
      </section>

      <Footer />
    </main>
  );
};

export default ProfessionalRegistration;
