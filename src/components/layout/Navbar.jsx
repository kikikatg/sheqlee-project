import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CloseIcon from "/icons/close.svg";
import DownArrow from "/icons/arrow-down.svg";
import { useEffect, useState } from "react";

const Navbar = ({ showAuthModal, closeAuthModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => closeAuthModal();
    window.addEventListener("close-auth-modal", handler);
    return () => window.removeEventListener("close-auth-modal", handler);
  }, [closeAuthModal]);

  return (
    <header
      className="
        sticky top-0 z-50 bg-[#F7F7F7]
        h-[64px] sm:h-[72px] md:h-[90px]   /* ✅ FIX: navbar height scales */
      "
    >
      <nav
        className="
          max-w-[1920px] mx-auto
          flex items-center
          px-4 sm:px-6 md:px-10 lg:px-[101px] /* ✅ FIX: proportional padding */
          h-full
        "
        style={{ fontFamily: "Kantumruy Pro" }}
      >
        {/* ================= LOGO SECTION ================= */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* ✅ FIX: logo image scales down */}
          <img
            src={Logo}
            alt="Sheqlee Logo"
            className="
              w-[24px] h-[44px]
              sm:w-[30px] sm:h-[56px]
              md:w-[40px] md:h-[75px]
              object-contain
            "
          />

          {/* ✅ FIX: logo text scales down */}
          <Link
            to="/"
            className="
              font-bold text-black leading-none
              text-[18px] sm:text-[22px] md:text-[30px]
            "
          >
            Sheqlee
          </Link>
        </div>

        {/* ================= DESKTOP NAV (≥ 770px) ================= */}
        <div
          className="
            ml-auto items-center gap-6 lg:gap-10
            hidden md:flex              /* ✅ FIX: desktop only */
          "
        >
          <NavLink className="text-[16px] lg:text-[18px]" to="/jobs">
            All jobs
          </NavLink>

          <div className="flex items-center gap-2">
            <NavLink className="text-[16px] lg:text-[18px]" to="/categories">
              Categories
            </NavLink>
            <img
              src={DownArrow}
              alt=""
              className="w-[6px] h-[8px] lg:w-[7px] lg:h-[9px]" /* ✅ FIX: arrow scales */
            />
          </div>

          <NavLink className="text-[16px] lg:text-[18px]" to="/clients">
            Clients
          </NavLink>

          {/* ✅ FIX: buttons scale proportionally */}
          <Link
            to="/login"
            className="
              w-[90px] h-[40px] lg:w-[110px] lg:h-[50px]
              flex items-center justify-center
              text-[16px] lg:text-[20px]
              font-semibold
              border-[2px] lg:border-[3px]
              border-[#8967B3]
              rounded-[12px] lg:rounded-[15px]
            "
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="
              w-[90px] h-[40px] lg:w-[110px] lg:h-[50px]
              flex items-center justify-center
              bg-[#8967B3]
              rounded-[12px] lg:rounded-[15px]
              text-[16px] lg:text-[20px]
              font-semibold text-white
            "
          >
            Sign up
          </Link>
        </div>

        {/* ================= HAMBURGER (< 770px) ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            ml-auto md:hidden          /* ✅ FIX: hamburger only mobile */
            text-[22px] sm:text-[26px] /* ✅ FIX: scalable size */
          "
        >
          ☰
        </button>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div
            className="
              absolute left-0 top-full w-full
              bg-[#F7F7F7]
              flex flex-col gap-5
              px-6 py-6
              md:hidden                /* ✅ FIX: mobile only */
            "
          >
            <NavLink onClick={() => setIsOpen(false)} to="/jobs">
              All jobs
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/categories">
              Categories
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/clients">
              Clients
            </NavLink>
            <Link onClick={() => setIsOpen(false)} to="/login">
              Login
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/signup">
              Sign up
            </Link>
          </div>
        )}

        {/* CLOSE ICON (MODAL ONLY – untouched) */}
        {showAuthModal && (
          <button
            onClick={closeAuthModal}
            className="absolute top-6 right-8 z-50"
          >
            <img src={CloseIcon} className="w-6 h-6" />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
