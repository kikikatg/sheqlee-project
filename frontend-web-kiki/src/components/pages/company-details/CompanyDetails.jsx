import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";
import { mockCompanies } from "../../../data/mockCompanies";
import { mockJobs } from "../../../data/mockJobs";
import JobCard from "../../job/JobCard";
import PostAuthModal from "../../modals/PostAuthModal";

const CompanyDetails = () => {
  const { slug } = useParams();
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  /* ================= COMPANY ================= */
  const company = useMemo(
    () => mockCompanies.find((c) => c.slug === slug),
    [slug],
  );

  if (!company) {
    return <div className="py-40 text-center text-xl">Company not found</div>;
  }

  /* ================= JOBS ================= */
  const companyJobs = useMemo(() => {
    const matched = mockJobs.filter((job) => job.company === company.name);

    if (matched.length === 0) {
      return [
        {
          id: "demo-1",
          title: "Frontend Engineer",
          company: company.name,
          type: "Full-Time",
          level: "Intermediate",
          rate: "$20/hr",
          postedAt: "Just now",
          details: { tags: ["React", "Frontend"] },
        },
      ];
    }
    return matched;
  }, [company]);

  return (
    <main className="bg-white min-h-screen">
      {/* ================= BREADCRUMB (DESKTOP ONLY) ================= */}
      <div className="hidden sm:block">
        <SubNavbar
          crumbs={[
            { label: "Companies", href: "/companies" },
            { label: company.name, active: true },
          ]}
        />
      </div>

      {/* ================= HERO ================= */}
      <section className="pt-8 lg:pt-16 md:pt-12 px-4 text-center">
        <div className="flex justify-center">
          <img
            src={company.logo}
            alt={company.name}
            className="w-[100px] h-[100px] object-contain lg:w-[136px] lg:h-[136px] md:w-[126px] md:h-[126px] sm:w-[110px] sm:h-[110px]"
          />
        </div>

        {/* NAME + VERIFY (FIXED) */}
        <div className="mt-2 flex justify-center items-center gap-3">
          <h1 className="text-[36px] md:text-[60px] font-semibold">
            {company.name}
          </h1>
          {company.verified && (
            <img src="/icons/verify.svg" alt="verified" className="w-6 h-6" />
          )}
        </div>

        {/* META */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#DDDDDD] px-4 h-[37px] rounded-[5px] text-sm text-blue-600 hover:underline"
          >
            <img src="/icons/link.svg" className="w-4 h-4" />
            {company.website.replace(/^https?:\/\//, "")}
          </a>

          <MetaCard
            icon="/icons/employees.svg"
            text={`${company.employees} `}
          />
          <MetaCard icon="/icons/placeholder (2).svg" text={company.location} />
        </div>

        {/* ================= SUBSCRIBE TO COMPANY ================= */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="
              w-full max-w-[280px] sm:max-w-[320px]
              h-[50px] sm:h-[60px] md:h-[65px] md:max-w-[380px] lg:h-[75px] lg:max-w-[453px]
              bg-[#8967B3] rounded-[15px]
              flex items-center justify-center gap-3
              text-white text-[18px] sm:text-[22px] md:text-[28px]
              font-medium hover:opacity-90 transition
            "
          >
            <img src="/icons/bell.svg" className="w-6 h-6 sm:w-8 sm:h-8" />
            Subscribe to Company
          </button>
        </div>

        <p className="mt-4 sm:mt-6 text-[16px] sm:text-[20px] md:text-[28px]">
          Subscribers:{" "}
          <span className="font-medium">{company.subscribers}</span>
        </p>

        <div className="mt-4 sm:mt-6 flex justify-center">
          <img src="/icons/socials.svg" className="scale-90 sm:scale-100" />
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="mt-24 px-4">
        <div className="max-w-7xl mx-auto bg-[#F7F7F7] rounded-[20px] p-10 relative">
          <p className="text-[18px] md:text-[25px] leading-[34px]">
            {expanded
              ? company.description
              : company.description.slice(0, 300) + "."}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="absolute bottom-6 right-6 w-[127px] h-[37px] bg-[#8967B3] rounded-[10px] text-white text-sm flex items-center justify-center gap-2"
          >
            {expanded ? "Show less" : "Read more"}
            <img
              src="/icons/Group 4 (1).svg"
              className={`w-4 h-4 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </section>

      {/* ================= JOB POSTS ================= */}
      <section className="mt-8 lg:mt-16 md:mt-12 sm:mt-18 px-4">
        <h2 className="text-center text-[36px] md:text-[50px] font-semibold  md:mb-12 lg:mb-16 sm:mb-16 ">
          Job posts from {company.name}
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {companyJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {showModal && (
        <PostAuthModal
          onClose={() => setShowModal(false)}
          titleLines={[
            "Please register or login before you",
            "could subscribe to companies.",
          ]}
        />
      )}

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

const MetaCard = ({ icon, text }) => (
  <div className="flex items-center gap-3 bg-[#DDDDDD] px-4 h-[37px] rounded-[5px] text-sm">
    <img src={icon} className="w-4 h-4" />
    <span>{text}</span>
  </div>
);

export default CompanyDetails;
