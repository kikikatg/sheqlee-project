import { useState } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import DeveloperCTA from "../../sections/DeveloperCTA";

const LegalPage = ({ pageTitle, sections, crumbs }) => {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (id) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((sec) => sec !== id) : [...prev, id],
    );
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="hidden sm:block">
        <SubNavbar crumbs={crumbs || [{ label: pageTitle, active: true }]} />
      </div>

      {/* HEADER — OUTSIDE CONTAINER */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-10">
        <h1 className="text-[32px] sm:text-[42px] font-semibold">
          {pageTitle}
        </h1>
      </section>

      {/* CONTENT CONTAINER */}
      <section className="w-full px-4 pb-20">
        <div
          className="
            max-w-[1720px]
            mx-auto
            bg-[#DFDFDF]
            rounded-[20px]
            px-6 sm:px-10 lg:px-16
            py-10 lg:py-14
          "
        >
          <div className="space-y-12 max-w-6xl mx-auto">
            {sections.map((section) => (
              <article key={section.id} className="space-y-4">
                <h2 className="text-[20px] sm:text-[24px] font-semibold flex justify-between items-center">
                  {section.title}
                  {section.content.length > 1 && (
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="text-[#8967B3] underline text-[14px] sm:text-[16px]"
                    >
                      {expandedSections.includes(section.id)
                        ? "See Less"
                        : "See More"}
                    </button>
                  )}
                </h2>

                <div className="space-y-3">
                  {section.content.map((paragraph, index) => {
                    if (!expandedSections.includes(section.id) && index > 0)
                      return null;
                    return (
                      <p
                        key={index}
                        className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default LegalPage;
