import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import CompanyCard from "./CompanyCard";
import { mockCompanies } from "../../../data/mockCompanies";

const Companies = () => {
  return (
    <main className="bg-white min-h-screen">

      <SubNavbar
        crumbs={[
          { label: "Companies", href: "/companies", active: true },
        ]}
      />

      <section className="flex flex-col items-center text-center mt-24 gap-6">
        <img src="/icons/building.svg" className="w-16 h-16" />

        <h1 className="text-[50px] font-semibold">
          Companies on Sheqlee
        </h1>

        <p className="max-w-[874px] text-[35px]">
          List of companies with their job posts and subscribers.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-12 mt-24 mb-32">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Companies;
