import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";
import { mockCompanies } from "../../../data/mockCompanies";
import { mockJobs } from "../../../data/mockJobs";
import JobCard from "../../job/JobCard";

const CompanyDetails = () => {
  const { slug } = useParams();
  const [expanded, setExpanded] = useState(false);

  /* ================= COMPANY ================= */
  const company = useMemo(
    () => mockCompanies.find((c) => c.slug === slug),
    [slug]
  );

  if (!company) {
    return (
      <div className="py-40 text-center text-xl">
        Company not found
      </div>
    );
  }

  /* ================= JOBS (API READY) ================= */
  const companyJobs = useMemo(() => {
    const matched = mockJobs.filter(
      (job) => job.company === company.name
    );

    // ✅ DEMO FALLBACK (REMOVE WHEN API IS READY)
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
          description: "Demo job for layout preview",
          details: { tags: ["React", "Frontend"] },
        },
        {
          id: "demo-2",
          title: "Product Designer",
          company: company.name,
          type: "Part-Time",
          level: "Senior",
          rate: "$25/hr",
          postedAt: "1 day ago",
          description: "Demo job for layout preview",
          details: { tags: ["UI", "UX"] },
        },
      ];
    }

    return matched;
  }, [company]);

  return (
    <main className="bg-white min-h-screen">
      {/* ================= BREADCRUMB ================= */}
      <SubNavbar
        crumbs={[
          { label: "Companies", href: "/companies" },
          { label: company.name, active: true },
        ]}
      />

      {/* ================= HERO ================= */}
      <section className="pt-24 text-center px-4">
        <div className="flex justify-center items-center gap-3">
          <img
            src={company.logo}
            alt={company.name}
            className="w-[146px] h-[146px] object-contain"
          />
          {company.verified && (
            <img
              src="/icons/verify.svg"
              alt="verified"
              className="w-6 h-6"
            />
          )}
        </div>

        <h1 className="mt-6 text-[36px] md:text-[60px] font-semibold">
          {company.name}
        </h1>

        {/* ================= META ================= */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3
              bg-[#DDDDDD]
              px-4 h-[37px]
              rounded-[5px]
              text-sm
              text-blue-600
              hover:underline
              transition
            "
          >
            <img src="/icons/link.svg" className="w-4 h-4" />
            {company.website.replace(/^https?:\/\//, "")}
          </a>

          <MetaCard
            icon="/icons/employees.svg"
            text={`${company.employees} employees`}
          />
          <MetaCard
            icon="/icons/placeholder.svg"
            text={company.location}
          />
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="mt-24 px-4">
        <div className="max-w-7xl mx-auto bg-[#F7F7F7] rounded-[20px] p-10 relative">
          <p className="text-[18px] md:text-[25px] leading-[34px]">
            {expanded
              ? company.description
              : company.description.slice(0, 300) + "..."}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="
              absolute bottom-6 right-6
              flex items-center justify-center gap-2
              w-[127px] h-[37px]
              bg-[#8967B3]
              rounded-[10px]
              text-white text-sm
              hover:opacity-90
              transition
            "
          >
            {expanded ? "Show less" : "Read more"}
            <img
              src="/icons/Group 4 (1).svg"
              alt="toggle"
              className={`w-4 h-4 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </section>

    {/* ================= JOB POSTS ================= */}
<section className="mt-32 px-4">
  <h2 className="text-center text-[36px] md:text-[50px] font-semibold mb-16">
    Job posts from {company.name}
  </h2>

  <div className="max-w-7xl mx-auto">
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
    >
      {companyJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </div>
</section>


      <DeveloperCTA />
      <Footer />
    </main>
  );
};

/* ================= META CARD ================= */
const MetaCard = ({ icon, text }) => (
  <div className="flex items-center gap-3 bg-[#DDDDDD] px-4 h-[37px] rounded-[5px] text-sm">
    <img src={icon} alt="" className="w-4 h-4" />
    <span>{text}</span>
  </div>
);

export default CompanyDetails;
