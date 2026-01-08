import React, { useState } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import PostAuthModal from "../../modals/PostAuthModal";

const TagHeader = ({ name, subscribers, jobsCount }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ================= BREADCRUMB (FIXED ✅) ================= */}
      <SubNavbar
        crumbs={[
          { label: "Tags", href: "/tags" },
          { label: name, active: true },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 pt-20 text-center">
        <div className="flex justify-center mb-8">
          <img
            src="/icons/placeholder.svg"
            alt={name}
            className="w-[120px] h-[120px]"
          />
        </div>

        <h1 className="text-[36px] md:text-[56px] font-semibold">
          {name}
        </h1>

        <p className="mt-6 max-w-[880px] mx-auto text-[18px] md:text-[28px]">
          Browse {jobsCount} jobs related to <strong>{name}</strong> and
          subscribe for updates.
        </p>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="
              w-full max-w-[453px] h-[85px]
              bg-[#8967B3] rounded-[15px]
              flex items-center justify-center gap-4
              text-white text-[24px] md:text-[28px]
              font-medium hover:opacity-90
            "
          >
            <img src="/icons/bell.svg" className="w-8 h-8" />
            Subscribe to Tag
          </button>
        </div>

        <p className="mt-6 text-[22px] md:text-[28px]">
          Subscribers: <span className="font-medium">{subscribers}</span>
        </p>

        <div className="mt-6 flex justify-center">
          <img src="/icons/socials.svg" alt="Socials" />
        </div>
      </section>

      {showModal && (
        <PostAuthModal
          onClose={() => setShowModal(false)}
          titleLines={[
            "Please register or login before you",
            "could subscribe to tags.",
          ]}
        />
      )}
    </>
  );
};

export default TagHeader;
