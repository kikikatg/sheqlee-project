import { useEffect, useMemo, useState } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import CompanyCard from "./CompanyCard";
import { mockCompanies } from "../../../data/mockCompanies";
import Pagination from "../../common/Pagination";
import DeveloperCTA from "../../sections/DeveloperCTA";

const MOBILE_COMPANIES_PER_PAGE = 10;

const Companies = () => {
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // 🔹 Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const companiesPerPage = isMobile
    ? MOBILE_COMPANIES_PER_PAGE
    : mockCompanies.length;

  const totalPages = Math.ceil(mockCompanies.length / companiesPerPage);

  const companiesToRender = useMemo(() => {
    const start = (page - 1) * companiesPerPage;
    const end = start + companiesPerPage;
    return mockCompanies.slice(start, end);
  }, [page, companiesPerPage]);

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb hidden on mobile */}
      <div className="hidden sm:block">
        <SubNavbar
          crumbs={[{ label: "Companies", href: "/companies", active: true }]}
        />
      </div>

      {/* ================= HEADER ================= */}
      <section className="flex flex-col items-center text-center mt-20 sm:mt-24 gap-6 px-4">
        <img src="/icons/building.svg" className="w-14 h-14 sm:w-16 sm:h-16" />

        {/* Desktop */}
        <h1 className="hidden sm:block text-[50px] font-semibold">
          Companies on Sheqlee
        </h1>

        {/* Mobile */}
        <h1 className="block sm:hidden text-[32px] font-semibold">
          Companies on Qagnew
        </h1>

        {/* Desktop */}
        <p className="hidden sm:block max-w-[874px] text-[35px]">
          List of companies with their job posts and subscribers.
        </p>

        {/* Mobile */}
        <p className="block sm:hidden text-[18px] max-w-[520px]">
          List of the companies on Qagnew with their number of job posts and
          subscribers.
        </p>
      </section>

      {/* ================= COMPANY LIST ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-12 mt-16 sm:mt-24 mb-4">
        <div className="grid gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companiesToRender.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </section>

      {/* ================= MOBILE PAGINATION ================= */}
      {isMobile && totalPages > 1 && (
        <div className=" px-4 max-w-[520px] mx-auto">
          <div className="flex items-center justify-between">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
              variant="category"
            />
          </div>
        </div>
      )}

      {/* ================= MOBILE DEVELOPER CTA ================= */}
      {isMobile && (
        <div className="mt-16 ">
          <DeveloperCTA />
        </div>
      )}

      <Footer />
    </main>
  );
};

export default Companies;
