import FooterColumn from "./FooterColumn";
import FooterSocials from "./FooterSocials";
import { mockFooterLinks } from "../../data/mockFooterLinks";

const Footer = () => {
  return (
    /* 🔧 DARK BACKGROUND (unchanged) */
    <footer className="bg-[#0B0B0B]">
      {/* 🔧 RESPONSIVE PADDING (smaller on mobile) */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-8 sm:pt-12">

        {/* ================= TOP GRID ================= */}
        {/* 🔧 MOBILE: stacked | DESKTOP: 5 columns */}
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

          {/* ================= BRAND + ADDRESS ================= */}
          {/* 🔧 MOBILE CENTERED | DESKTOP LEFT */}
          <div className="space-y-6 max-w-sm sm:mt-9 text-center sm:text-left">
            
            {/* Logo */}
            <img
              src="/icons/footer-logo.svg"
              alt="Sheqlee logo"
              className="h-12 mx-auto sm:mx-0" /* 🔧 CENTER ON MOBILE */
            />

            {/* Address */}
            <div>
              <p className="text-sm font-semibold uppercase text-white">
                Address
              </p>
              <p className="text-sm text-gray-400 mt-1">
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
          <span className="text-sm text-gray-400 text-center sm:text-left">
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
