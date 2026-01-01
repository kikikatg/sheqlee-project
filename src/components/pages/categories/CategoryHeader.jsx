import React, { useState } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import PostAuthModal from "../../modals/PostAuthModal";

const CategoryHeader = ({
  title,
  slug,
  icon,
  description,
  subscribers,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ================= SUB NAVBAR (BREADCRUMB) ================= */}
      <SubNavbar
        crumbs={[
          { label: "Categories", href: "/categories" },
          {
            label: title,
            href: `/categories/${slug}`,
            active: true,
          },
        ]}
      />

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-20 text-center">
        {/* ICON */}
        <div className="flex justify-center mb-8">
          <img
            src={icon}
            alt={title}
            className="w-[90px] h-[90px] md:w-[120px] md:h-[120px]"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-[36px] md:text-[56px] font-semibold text-black">
          {title}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 max-w-[880px] mx-auto text-[18px] md:text-[28px] leading-[34px] md:leading-[44px]">
          {description}
        </p>

        {/* SUBSCRIBE BUTTON */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="
              w-full max-w-[453px] h-[85px]
              bg-[#8967B3] rounded-[15px]
              flex items-center justify-center gap-4
              text-white text-[22px] md:text-[28px]
              font-medium hover:opacity-90 transition
            "
          >
            <img src="/icons/bell.svg" alt="Subscribe" className="w-8 h-8" />
            Subscribe to Category
          </button>
        </div>

        {/* SUBSCRIBERS */}
        <p className="mt-6 text-[20px] md:text-[28px] text-black">
          Subscribers: <span className="font-medium">{subscribers}</span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="mt-6 flex justify-center">
          <img src="/icons/socials.svg" alt="Socials" />
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
