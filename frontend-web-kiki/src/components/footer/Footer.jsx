import FooterColumn from "./FooterColumn";
import FooterSocials from "./FooterSocials";
import { mockFooterLinks } from "../../data/mockFooterLinks";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-6 sm:pt-14 ">
        {/* ================= TOP GRID ================= */}
        {/* 🔧 MOBILE: stacked | DESKTOP: 5 columns */}
        <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-6 max-w-sm sm:mt-9  text-center sm:text-left">
            {/* Logo */}
            <img
              src="/icons/footer-logo.svg"
              alt="Sheqlee logo"
              className="h-18  sm:mx-0 " /* 🔧 CENTER ON MOBILE */
            />

            {/* Address */}
            <div>
              <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-semibold uppercase text-gray-300">
                Address
              </p>
              <p className="text-[13px] sm:text-[15px]  lg:text-[18px] text-gray-400 mt-1">
                MIT, Mekelle, Tigray
              </p>
            </div>
          </div>

          {/* ================= LINK COLUMNS ================= */}
          {/* 🔧 COLUMNS STACK NICELY ON MOBILE */}
          {mockFooterLinks.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        {/* ================= BOTTOM BAR ================= */}
        {/* 🔧 STACK ON MOBILE | SPLIT ON DESKTOP */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {/* Copyright */}
          <span
            className="text-[12px] lg:text-[18px] sm:text-[14px]
 text-gray-400 text-center sm:text-left"
          >
            © {new Date().getFullYear()} Sheqlee Co.Ltd. All rights reserved.
          </span>

          {/* Social icons */}
          {/* 🔧 CENTER ON MOBILE | RIGHT ON DESKTOP */}
          <div className="flex justify-center sm:justify-end">
            <FooterSocials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
