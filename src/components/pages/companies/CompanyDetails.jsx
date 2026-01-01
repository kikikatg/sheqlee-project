import { useParams } from "react-router-dom";
import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";

const CompanyDetails = () => {
  const { companySlug } = useParams();

  return (
    <main className="bg-white min-h-screen">
      {/* ================= SUB NAVBAR (BREADCRUMB) ================= */}
      <SubNavbar
        crumbs={[
          { label: "Companies", href: "/companies" },
          {
            label: companySlug,
            href: `/companies/${companySlug}`,
            active: true,
          },
        ]}
      />

      {/* ================= HERO SECTION (NEXT STEP) ================= */}
      <section className="mt-24 text-center">
        {/* logo + name + meta cards + subscribe */}
      </section>

      <Footer />
    </main>
  );
};

export default CompanyDetails;
