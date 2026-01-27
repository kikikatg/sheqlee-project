import React, { useState, useEffect } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import PostAuthModal from "../../modals/PostAuthModal";

const TagHeader = ({ name, subscribers, jobsCount }) => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ================= MOBILE DETECTION =================
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* ================= BREADCRUMB (hidden on mobile) ================= */}
      {!isMobile && (
        <SubNavbar
          crumbs={[
            { label: "Tags", href: "/tags" },
            { label: name, active: true },
          ]}
        />
      )}

      <section className="max-w-7xl mx-auto px-4 pt-20 text-center">
        <div className="flex justify-center mb-8">
          <img
            src="/icons/placeholder.svg"
            alt={name}
            className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]"
          />
        </div>

        <h1 className="text-[28px] sm:text-[36px] md:text-[56px] font-semibold text-black">
          {name}
        </h1>

        <p className="mt-6 max-w-[880px] mx-auto text-[16px] sm:text-[18px] md:text-[28px] leading-relaxed">
          Browse {jobsCount} jobs related to <strong>{name}</strong> and
          subscribe for updates.
        </p>

        <div className="mt-10 sm:mt-14 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="
              w-full max-w-[280px] sm:max-w-[453px] lg:max-w-[453px] md:max-w-[400px] md:h-[75px] lg:h-[85px]
              h-[50px] sm:h-[60px]
              bg-[#8967B3] rounded-[15px]
              flex items-center justify-center gap-3 sm:gap-4
              text-white text-[18px] sm:text-[22px] md:text-[28px]
              font-medium hover:opacity-90 transition
            "
          >
            <img
              src="/icons/bell.svg"
              alt="Subscribe"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            Subscribe to Tag
          </button>
        </div>

        <p className="mt-4 sm:mt-6 text-[16px] sm:text-[20px] md:text-[28px] text-black">
          Subscribers: <span className="font-medium">{subscribers}</span>
        </p>

        <div className="mt-4 sm:mt-6 flex justify-center">
          <img
            src="/icons/socials.svg"
            alt="Socials"
            className="scale-90 sm:scale-100"
          />
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
