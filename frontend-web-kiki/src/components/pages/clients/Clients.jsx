import { useNavigate, Link } from "react-router-dom";
import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import ClientStatCard from "./ClientStatCard";
import { mockClientStats } from "../../../data/mockClientStats";

const Clients = () => {
  const navigate = useNavigate();

  const trustedBy = [
    { id: 1, name: "Google", src: "/icons/google.png" },
    { id: 2, name: "Meta", src: "/icons/meta.png" },
    { id: 3, name: "Microsoft", src: "/icons/microsoft.png" },
    { id: 4, name: "Apple", src: "/icons/apple.png" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb hidden on mobile */}
      <div className="hidden sm:block">
        <SubNavbar crumbs={[{ label: "Clients", active: true }]} />
      </div>

      {/* ================= HEADER ================= */}
      <section className="flex flex-col items-center text-center pt-12 px-4">
        {/* Desktop */}
        <h1 className="hidden sm:block text-[50px] font-semibold text-black">
          Sheqlee for Clients
        </h1>

        {/* Mobile */}
        <h1 className="block sm:hidden text-[32px] font-semibold text-black">
          Qagnew for Clients
        </h1>

        <p className="mt-4 sm:mt-8 max-w-[872px] text-[18px] sm:text-[32px] leading-[22px] md:leading-[36px] lg:leading-[42px] sm:leading-[28px] text-black">
          Access a pool of talented, competent and dedicated experts and
          professionals from Ethiopia.
        </p>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <Link to="/login">
            <button
              className="
                w-[280px] sm:w-[140px] h-[60px] sm:h-[70px]
                border-[4px] border-[#8967B3]
                rounded-[15px]
                text-[20px] sm:text-[30px]
                font-medium text-black
                hover:bg-[#8967B3] hover:text-white
                transition
              "
            >
              Log in
            </button>
          </Link>

          <button
            onClick={() => navigate("/company-signup")}
            className="
              w-[280px] sm:w-[400px] h-[60px] sm:h-[70px]
              bg-[#8967B3]
              rounded-[15px]
              text-[18px] sm:text-[30px]
              font-medium text-white
              hover:opacity-90 transition
            "
          >
            Register as an employer
          </button>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="mt-12 sm:mt-20 flex flex-col gap-5 sm:gap-20 px-4">
        {mockClientStats.map((stat) => (
          <ClientStatCard key={stat.id} stat={stat} />
        ))}
      </section>

      {/* ================= POST JOB CTA ================= */}
      <section className="lg:mx-20 sm:mt-14 md:mx-14 md:mt-14 mt-10 mb-10 flex justify-center px-4">
        <button
          onClick={() => navigate("/company-signup")}
          className="
            w-full max-w-[320px] sm:max-w-[450px]
            h-[60px] sm:h-[100px]
            bg-[#8967B3]
            rounded-[20px]
            text-white
            text-[20px] sm:text-[32px]
            font-medium
            hover:opacity-90 transition
          "
        >
          Post a job now
        </button>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="mt-12 sm:mt-14 bg-[#DFDFDF] py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-[24px] sm:text-[35px] font-semibold mb-10 sm:mb-12">
            Trusted by
          </h3>

          <div className="flex flex-wrap gap-8 sm:gap-16 justify-center items-center">
            {trustedBy.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt={logo.name}
                className="max-h-[40px] sm:max-h-[60px] object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Clients;
