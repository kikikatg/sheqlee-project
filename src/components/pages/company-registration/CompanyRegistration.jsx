import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../../all-jobs/SubNavbar";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";

const CompanyRegistration = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    company: "",
    domain: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
    setErrors({ ...errors, [key]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.company) e.company = "Company name is required";
    if (!form.domain || !/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.domain))
      e.domain = "Enter a valid domain";
    if (!form.name) e.name = "Full name is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter a valid email";
    if (form.password.length < 8)
      e.password = "Password must be at least 8 characters";
    if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    alert("Company registered successfully ✅");
  };

  return (
    <main className="bg-white min-h-screen">
      <SubNavbar crumbs={[{ label: "Company Signup", active: true }]} />

      {/* INFO CARD */}
      <section className="px-4 mt-10">
        <div className="max-w-5xl mx-auto bg-[#F7F7F7] rounded-[15px] flex gap-6 p-6">
          <div className="w-[70px] h-[70px] bg-black rounded-[15px] flex items-center justify-center">
            <img src="/icons/professional_registration.svg" alt="" />
          </div>
          <p className="text-[22px]">
            If you are a freelancer, please visit{" "}
            <span
              onClick={() => navigate("/freelancer-signup")}
              className="relative cursor-pointer font-semibold"
            >
              freelancers registration
              <span className="absolute left-0 -bottom-[2px] w-full h-[3px] bg-[#8967B3]" />
            </span>{" "}
            page.
          </p>
        </div>
      </section>

      {/* HEADER */}
      <section className="px-4 mt-16 max-w-5xl mx-auto flex items-center gap-4">
        <img src="/icons/building.svg" alt="" />
        <h1 className="text-[55px] font-semibold">Company Registration</h1>
      </section>

      {/* COMPANY INFO */}
      <section className="px-4 mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <Input
          label="Company name"
          value={form.company}
          placeholder="Sheqlee Co.Ltd."
          error={errors.company}
          onChange={(v) => handleChange("company", v)}
          icon="/icons/company (1).svg"
        />

        <Input
          label="Domain"
          value={form.domain}
          placeholder="sheqlee.com"
          error={errors.domain}
          onChange={(v) => handleChange("domain", v)}
          prefix="https://"
        />
      </section>

      {/* DIVIDER */}
      <Divider text="Company Representative" />

      {/* REPRESENTATIVE */}
      <section className="px-4 mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <Input
          label="Full name"
          value={form.name}
          placeholder="Abebe Bekila"
          error={errors.name}
          onChange={(v) => handleChange("name", v)}
          icon="/icons/person.svg"
        />

        <Input
          label="Email"
          value={form.email}
          placeholder="abebe@gmail.com"
          error={errors.email}
          onChange={(v) => handleChange("email", v)}
          icon="/icons/email.svg"
        />

        <PasswordInput
          label="Password"
          value={form.password}
          error={errors.password}
          show={showPassword}
          toggle={() => setShowPassword(!showPassword)}
          onChange={(v) => handleChange("password", v)}
        />

        <PasswordInput
          label="Confirm password"
          value={form.confirmPassword}
          error={errors.confirmPassword}
          show={showConfirm}
          toggle={() => setShowConfirm(!showConfirm)}
          onChange={(v) => handleChange("confirmPassword", v)}
        />
      </section>

      {/* TERMS */}
      <section className="px-4 mt-12 max-w-5xl mx-auto flex gap-4 items-start">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="w-[30px] h-[30px] bg-[#c2c0c0] "
        />
        <p className="text-[22px]">
          By creating an account, you agree to{" "}
          <Underline text="Terms and Conditions" /> and{" "}
          <Underline text="Privacy Policy" />.
        </p>
      </section>

      {/* ACTION */}
      <section className="px-4 mt-16 max-w-5xl mx-auto flex justify-end items-center gap-6">
        <p className="text-[22px] flex items-center gap-2">
          Already got an account?
          <Underline text="Login" bigger />
        </p>

        <button
          onClick={handleSubmit}
          className="w-[180px] h-[70px] bg-[#8967B3] rounded-[15px] text-white text-[24px]"
        >
          Register
        </button>
      </section>

      {/* OR CONTINUE */}
      <Divider text="or continue with"  />

      {/* GOOGLE */}
      <section className="px-4  mt-12 max-w-5xl mx-auto flex justify-center">
        <button className="w-[554px] h-[80px] bg-[#4285F4] rounded-[15px] flex items-center justify-center gap-4 text-white text-[30px]">
          <img
            src="/icons/Icon ionic-logo-google.svg"
            alt=""
            className="w-6 h-6"
          />
          Continue with Google
        </button>
      </section>

      <section className="mt-20">
  <DeveloperCTA />
</section>

      <Footer />
    </main>
  );
};

export default CompanyRegistration;

/* ================= COMPONENTS ================= */

const Divider = ({ text }) => (
  <div className="flex items-center gap-6 max-w-5xl mx-auto mt-20">
    <span className="flex-1 h-[5px] bg-[#DDDDDD] rounded-[15px]" />
    <span className="text-[22px] font-medium">{text}</span>
    <span className="flex-1 h-[5px] bg-[#DDDDDD] rounded-[15px]" />
  </div>
);

const Underline = ({ text, bigger }) => (
  <span
    className={`relative cursor-pointer font-semibold ${
      bigger ? "text-[24px]" : ""
    }`}
  >
    {text}
    <span className="absolute left-0 -bottom-[2px] w-full h-[3px] bg-[#8967B3]" />
  </span>
);

const Input = ({
  label,
  value,
  onChange,
  error,
  icon,
  prefix,
  placeholder,
}) => (
  <div>
    <label className="block text-[22px] mb-3 font-medium">
      {label} <span className="text-red-500">*</span>
    </label>
    <div className="flex h-[85px] bg-[#DFDFDF] rounded-[15px] overflow-hidden">
      {icon && (
        <div className="w-[85px] bg-black flex items-center justify-center">
          <img src={icon} alt="" />
        </div>
      )}
      {prefix && (
        <div className="w-[85px] bg-black text-white flex items-center justify-center">
          {prefix}
        </div>
      )}
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent px-6 text-[22px] outline-none"
      />
    </div>
    {error && <p className="text-red-500 mt-2">{error}</p>}
  </div>
);

const PasswordInput = ({ label, value, onChange, error, show, toggle }) => (
  <div>
    <label className="block text-[22px] mb-3 font-medium">
      {label} <span className="text-red-500">*</span>
    </label>
    <div className="relative flex h-[85px] bg-[#DFDFDF] rounded-[15px]">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="********"
        className="flex-1 bg-transparent px-6 text-[28px] outline-none"
      />
      <img
        src="/icons/Icon awesome-eye-slash.svg"
        onClick={toggle}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-[25px] cursor-pointer"
        alt=""
      />
    </div>
    {error && <p className="text-red-500 mt-2">{error}</p>}
  </div>
);
