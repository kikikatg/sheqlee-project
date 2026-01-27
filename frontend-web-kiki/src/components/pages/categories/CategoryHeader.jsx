import React, { useState } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import PostAuthModal from "../../modals/PostAuthModal";

const CategoryHeader = ({
  title,
  slug,
  icon,
  description,
  subscribers,
  showBreadcrumb,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ================= SUB NAVBAR (BREADCRUMB) ================= */}
      {showBreadcrumb && (
        <SubNavbar
          crumbs={[
            { label: "Categories", href: "/categories" },
            { label: title, href: `/categories/${slug}`, active: true },
          ]}
          className="hidden sm:block"
        />
      )}

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-12 sm:pt-20 text-center">
        {/* ICON */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src={icon}
            alt={title}
            className="w-[64px] h-[64px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px]"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[56px] font-semibold text-black">
          {title}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 sm:mt-6 max-w-[880px] mx-auto text-[14px] sm:text-[18px] md:text-[22px] leading-[20px] sm:leading-[28px] md:leading-[34px]">
          <span className="block sm:hidden">
            {description.split(". ").map((line, i) => (
              <span key={i} className="block">
                {line.trim()}.
              </span>
            ))}
          </span>
          <span className="hidden sm:block">{description}</span>
        </p>

        {/* SUBSCRIBE BUTTON */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="w-full max-w-[420px] sm:max-w-[453px] h-[64px] sm:h-[85px] bg-[#8967B3] rounded-[15px] flex items-center justify-center gap-3 sm:gap-4 text-white text-[18px] sm:text-[22px] md:text-[28px] font-medium hover:opacity-90 transition"
          >
            <img
              src="/icons/bell.svg"
              alt="Subscribe"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            Subscribe to Category
          </button>
        </div>

        {/* SUBSCRIBERS */}
        <p className="mt-4 sm:mt-6 text-[16px] sm:text-[20px] md:text-[28px] text-black">
          Subscribers: <span className="font-medium">{subscribers}</span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="mt-4 sm:mt-6 flex justify-center">
          <img
            src="/icons/socials.svg"
            alt="Socials"
            className="scale-90 sm:scale-100"
          />
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {showModal && (
        <PostAuthModal
          onClose={() => setShowModal(false)}
          titleLines={[
            "Please register or login before you",
            "could subscribe to categories.",
          ]}
        />
      )}
    </>
  );
};

export default CategoryHeader;
