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

  /** ✅ Active underline matches UI specs */
  const navLinkClass = ({ isActive }) =>
    `
    relative
    text-[16px] lg:text-[18px]
    font-medium
    transition-colors
    ${
      isActive
        ? `
          text-[#8967B3]
          after:content-['']
          after:absolute
          after:left-1/2
          after:-translate-x-1/2
          after:-bottom-[32px]        /* visually aligns between navbar & subnavbar */
          after:w-[60px]              /* ✅ exact width */
          after:h-[8px]              /* ✅ exact height */
          after:bg-[#8967B3]
          after:opacity-100
        `
        : "text-black hover:text-[#8967B3]"
    }
  `;

  return (
    <header className="sticky top-0 z-50 bg-[#F7F7F7] h-[64px] sm:h-[72px] md:h-[90px]">
      <nav
        className="
          max-w-[1920px] mx-auto
          flex items-center
          px-4 sm:px-6 md:px-10 lg:px-[101px]
          h-full
        "
        style={{ fontFamily: "Kantumruy Pro" }}
      >
        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-2 sm:gap-3">
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

          <Link
            to="/"
            className="font-bold text-black leading-none text-[18px] sm:text-[22px] md:text-[30px]"
          >
            Sheqlee
          </Link>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <div className="ml-auto hidden md:flex items-center gap-6 lg:gap-10">
          <NavLink to="/all-jobs" className={navLinkClass}>
            All jobs
          </NavLink>

          <div className="flex items-center gap-2">
            <NavLink to="/categories" className={navLinkClass}>
              Categories
            </NavLink>
            <img
              src={DownArrow}
              alt=""
              className="w-[6px] h-[8px] lg:w-[7px] lg:h-[9px]"
            />
          </div>

          <NavLink to="/clients" className={navLinkClass}>
            Clients
          </NavLink>

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

        {/* ================= HAMBURGER ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden text-[22px] sm:text-[26px]"
        >
          ☰
        </button>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full bg-[#F7F7F7] flex flex-col gap-5 px-6 py-6 md:hidden">
            <NavLink onClick={() => setIsOpen(false)} to="/all-jobs">
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

        {/* ================= CLOSE ICON ================= */}
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
