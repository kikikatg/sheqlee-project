import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CloseIcon from "/icons/close.svg";
import DownArrow from "/icons/arrow-down.svg";
import { mockCategories } from "../../data/mockCategories";

const Navbar = ({ showAuthModal, closeAuthModal }) => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);

  /** Hide navbar on scroll (WITHOUT affecting layout) */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Close category dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /** 🔹 ACTIVE LINK STYLE (UNCHANGED) */
  const navLinkClass = ({ isActive }) =>
    `
      relative
      text-[22px]
      font-medium
      transition-colors
      ${
        isActive
          ? `
            after:content-['']
            after:absolute
            after:left-1/2
            after:-translate-x-1/2
            after:-bottom-[42px]
            after:w-[60px]
            after:h-[8px]
            after:bg-[#8967B3]
          `
          : "text-black hover:text-[#8967B3]"
      }
    `;

  return (
    <header
      className={`
        relative
        bg-[#F7F7F7]
        h-[160px]
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <nav
        className="
          w-full
          max-w-[1920px]
          mx-auto
          flex
          items-center
          h-full
          px-4 sm:px-8 md:px-[101px]
        "
        style={{ fontFamily: "Kantumruy Pro" }}
      >
        {/* LOGO */}
        <div className="flex items-center gap-6 shrink-0">
          <img
            src={Logo}
            alt="Sheqlee Logo"
            className="w-[65px] h-[65px] object-contain"
          />
          <Link
            to="/"
            className="font-bold text-black text-[40px] leading-[48px]"
          >
            Sheqlee
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="ml-auto hidden md:flex items-center gap-12">
          <NavLink to="/all-jobs" className={navLinkClass}>
            All jobs
          </NavLink>

          {/* Categories */}
          <div
            className="relative flex items-center gap-3"
            ref={dropdownRef}
          >
            <NavLink to="/categories" className={navLinkClass}>
              Categories
            </NavLink>

            <button
              type="button"
              onClick={() => setCategoriesOpen((v) => !v)}
              className="flex items-center mt-[2px]"
            >
              <img src={DownArrow} className="w-[10px] h-[6px]" />
            </button>

            {categoriesOpen && (
              <div className="absolute top-full mt-6 w-[280px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] py-4 z-50">
                {mockCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/categories/${cat.id}`}
                    onClick={() => setCategoriesOpen(false)}
                    className="block px-6 py-3 text-[18px] font-medium hover:bg-[#F4F1FA]"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/clients" className={navLinkClass}>
            Clients
          </NavLink>

          {/* AUTH */}
          <Link
            to="/login"
            className="w-[130px] h-[56px] flex items-center justify-center border-[3px] border-[#8967B3] rounded-[15px] text-[22px] font-semibold"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="w-[140px] h-[56px] flex items-center justify-center bg-[#8967B3] rounded-[15px] text-[22px] font-semibold text-white"
          >
            Sign up
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="#000"
              strokeWidth="2"
            />
          </svg>
        </button>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col p-8">
            <button
              className="self-end mb-8"
              onClick={() => setMobileOpen(false)}
            >
              <img src={CloseIcon} className="w-7 h-7" />
            </button>

            <NavLink to="/all-jobs" onClick={() => setMobileOpen(false)}>
              All jobs
            </NavLink>

            <NavLink to="/categories" onClick={() => setMobileOpen(false)}>
              Categories
            </NavLink>

            <NavLink to="/clients" onClick={() => setMobileOpen(false)}>
              Clients
            </NavLink>

            <Link to="/login" >
             <button className="mt-6">
              Login
              </button>
            </Link>

            <Link to="/signup" className="mt-4">
              Sign up
            </Link>
          </div>
        )}

        {/* AUTH MODAL CLOSE */}
        {showAuthModal && (
          <button
            onClick={closeAuthModal}
            className="absolute top-8 right-10 z-50"
          >
            <img src={CloseIcon} className="w-7 h-7" />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
