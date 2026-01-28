import { useState, useMemo, useEffect } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";
import FAQItem from "./FAQItem";
import { freelancerFAQs, companyFAQs } from "../../../data/mockFAQ";
import Pagination from "../../common/Pagination";

const MAX_PAGES = 15; // future API cap

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("freelancers");
  const [openId, setOpenId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640); // Tailwind 'sm' breakpoint
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const faqsPerPage = isMobile ? 6 : 8; // 6 for mobile, 8 for desktop
  const faqs = activeTab === "freelancers" ? freelancerFAQs : companyFAQs;

  /* ================= PAGINATION LOGIC ================= */
  const totalPages = Math.min(MAX_PAGES, Math.ceil(faqs.length / faqsPerPage));

  const faqsToRender = useMemo(() => {
    const start = (currentPage - 1) * faqsPerPage;
    return faqs.slice(start, start + faqsPerPage);
  }, [faqs, currentPage, faqsPerPage]);

  return (
    <main className="bg-white min-h-screen">
      {/* ================= BREADCRUMB ================= */}
      <div className="hidden sm:block">
        <SubNavbar crumbs={[{ label: "FAQ", active: true }]} />
      </div>
      {/* ================= HEADER ================= */}
      <section className="pt-12 sm:pt-24 px-4 text-center">
        <img
          src="/icons/question.svg"
          alt="FAQ"
          className="w-[50px] sm:w-[60px] lg:w-[68px] mx-auto"
        />

        <h1 className="mt-6 text-[32px] sm:text-[44px] lg:text-[60px] font-semibold">
          FAQ
        </h1>

        <p className="mt-4 max-w-[780px] mx-auto text-[18px] sm:text-[22px] lg:text-[35px] leading-snug">
          The following are some of the most commonly asked questions by our
          users.
        </p>
      </section>

      {/* ================= TOGGLE ================= */}
      <div className="hidden sm:block">
        <section className="mt-10 px-4">
          <div className="mx-auto w-full max-w-[500px] bg-[#DFDFDF] rounded-[15px] p-2 flex">
            <button
              onClick={() => {
                setActiveTab("freelancers");
                setOpenId(null);
                setCurrentPage(1);
              }}
              className={`flex-1 h-[50px] rounded-[15px] text-sm sm:text-lg transition ${
                activeTab === "freelancers"
                  ? "bg-black text-white"
                  : "text-black"
              }`}
            >
              Freelancers
            </button>

            <button
              onClick={() => {
                setActiveTab("companies");
                setOpenId(null);
                setCurrentPage(1);
              }}
              className={`flex-1 h-[50px] rounded-[15px] text-sm sm:text-lg transition ${
                activeTab === "companies" ? "bg-black text-white" : "text-black"
              }`}
            >
              Companies
            </button>
          </div>
        </section>
      </div>
      {/* ================= FAQ LIST ================= */}
      <section className="mt-12 px-4">
        <div className="max-w-[1188px] mx-auto space-y-6">
          {faqsToRender.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </section>

      {/* ================= PAGINATION ================= */}
      {faqs.length > faqsPerPage && (
        <section className="mt-16 px-4">
          <div className="max-w-[1188px] mx-auto">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              variant="category"
            />
          </div>
        </section>
      )}

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default FAQ;
