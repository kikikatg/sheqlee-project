import { useNavigate } from "react-router-dom";
import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import ClientStatCard from "./ClientStatCard";
import { mockClientStats } from "../../../data/mockClientStats";

const Clients = () => {
  const navigate = useNavigate();

  /* ------------------ API-READY STATIC DATA ------------------ */
  const trustedBy = [
    { id: 1, name: "Google", src: "/icons/google.png" },
    { id: 2, name: "Meta", src: "/icons/meta.png" },
    { id: 3, name: "Microsoft", src: "/icons/microsoft.png" },
    { id: 4, name: "Apple", src: "/icons/apple.png" },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* ================= BREADCRUMB ================= */}
      <SubNavbar crumbs={[{ label: "Clients", active: true }]} />

      {/* ================= HEADER ================= */}
      <section className="flex flex-col items-center text-center pt-12 px-4">
        <h1 className="text-[36px] sm:text-[50px] font-semibold text-black leading-tight">
          Sheqlee for Clients
        </h1>

        <p className="mt-10 max-w-[872px] text-[22px] sm:text-[32px] leading-[40px] text-black">
          Access a pool of talented, competent and dedicated experts and
          professionals from Ethiopia.
        </p>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="mt-20 flex flex-col sm:flex-row gap-6 sm:gap-8">
          <button
            className="
              w-[140px] h-[70px]
              border-[4px] border-[#8967B3]
              rounded-[15px]
              text-[24px] sm:text-[30px]
              font-medium text-black
              hover:bg-[#8967B3] hover:text-white
              transition
            "
          >
            Log in
          </button>

          <button
            onClick={() => navigate("/company-signup")}
            className="
              w-[280px] sm:w-[400px] h-[70px]
              bg-[#8967B3]
              rounded-[15px]
              text-[22px] sm:text-[30px]
              font-medium text-white
              hover:opacity-90 transition
            "
          >
            Register as an employer
          </button>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="mt-40 flex flex-col gap-20 px-4">
        {mockClientStats.map((stat) => (
          <ClientStatCard key={stat.id} stat={stat} />
        ))}
      </section>

      {/* ================= POST JOB CTA ================= */}
      <section className="mt-24 flex justify-center px-4">
        <button
          className="
            w-full max-w-[450px]
            h-[70px] sm:h-[100px]
            bg-[#8967B3]
            rounded-[20px]
            text-white
            text-[24px] sm:text-[32px]
            font-medium
            hover:opacity-90 transition
          "
        >
          Post a job now
        </button>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="mt-40 bg-[#DFDFDF] py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-[28px] sm:text-[35px] font-semibold mb-12">
            Trusted by
          </h3>

          <div className="flex flex-wrap gap-10 sm:gap-16 justify-center items-center">
            {trustedBy.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt={logo.name}
                className="
                  max-h-[45px] sm:max-h-[60px]
                  object-contain
                  opacity-80 hover:opacity-100
                  transition
                "
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
