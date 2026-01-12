import { useState } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";

const LegalPage = ({ pageTitle, sections, crumbs }) => {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (id) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((sec) => sec !== id) : [...prev, id]
    );
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <SubNavbar crumbs={crumbs || [{ label: pageTitle, active: true }]} />

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-10">
        <h1 className="text-[32px] sm:text-[42px] font-semibold">
          {pageTitle}
        </h1>
        <p className="mt-4 text-gray-600 text-[15px] sm:text-[16px] max-w-3xl">
          Please read carefully before using Sheqlee.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 pb-20 space-y-12">
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
      </section>

      <Footer />
    </main>
  );
};

export default LegalPage;
