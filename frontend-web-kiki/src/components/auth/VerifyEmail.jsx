import { useLocation } from "react-router-dom";
import SubNavbar from "../all-jobs/SubNavbar";
import Footer from "../footer/Footer";

const VerifyEmail = () => {
  const { state } = useLocation();

  return (
    <main className="bg-white min-h-screen">
      <SubNavbar crumbs={[{ label: "Verify Email", active: true }]} />

      <section className="max-w-3xl mx-auto px-4 mt-20 text-center">
        <img src="/icons/email.svg" alt="" className="w-20 mx-auto mb-6" />

        <h1 className="text-[36px] font-semibold">Verify your email</h1>

        <p className="mt-6 text-[20px] text-gray-600">
          We’ve sent a verification link to:
        </p>

        <p className="mt-2 text-[22px] font-semibold">{state?.email}</p>

        <p className="mt-6 text-gray-500">
          Please check your inbox and click the link to activate your account.
        </p>
      </section>

      <Footer />
    </main>
  );
};

export default VerifyEmail;
