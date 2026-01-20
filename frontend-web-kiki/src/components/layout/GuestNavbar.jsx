import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CloseIcon from "/icons/close.svg";
import DownArrow from "/icons/arrow-down.svg";
import { mockCategories } from "../../data/mockCategories";

const GuestNavbar = ({ showAuthModal, closeAuthModal }) => {
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  /** 🔹 ACTIVE LINK STYLE (AUTO WIDTH) */
  const navLinkClass = ({ isActive }) =>
    `
    relative
    inline-block
    text-[15px] sm:text-[16px] md:text-[18px] lg:text-[25px]
    py-10
    font-medium
    transition-colors

    ${
      isActive
        ? `
          text-black
          after:content-['']
          after:absolute
          after:left-0
          after:-bottom-[30px]
          after:w-full
          after:h-[8px]
          after:bg-[#8967B3]
          after:rounded-full
        `
        : "text-black hover:text-[#8967B3]"
    }
  `;

  return (
    <header
      className={`
       relative
    bg-[#F7F7F7]
    min-h-[80px]
    sm:min-h-[120px] lg:h-[178px]
    transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <nav
        className="
    w-full
    flex
    items-center
    justify-between
    min-h-full
    px-4
    sm:px-6
    md:px-8
    lg:px-12
    xl:px-16
  "
        style={{ fontFamily: "Kantumruy Pro" }}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3 lg:gap-4 sm:gap-4 shrink-0 min-w-fit">
          <img
            src={Logo}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[75px]  lg:h-[75px]"
          />

          <Link
            to="/"
            className="font-bold text-black
  text-[22px]
  sm:text-[26px]
  lg:text-[40px]"
          >
            Sheqlee
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div
          className="
  hidden md:flex
  items-center
  gap-4
  lg:gap-6
  xl:gap-8
  flex-1
  justify-end
"
        >
          <NavLink to="/all-jobs" className={navLinkClass}>
            All jobs
          </NavLink>

          {/* Categories */}
          <div className="relative flex items-center gap-3" ref={dropdownRef}>
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
            className=" min-w-[110px] h-[48px] lg:h-[70px] lg:w-[130px] 
text-[14px] sm:text-[16px] lg:text-[25px]
flex items-center justify-center border-[3px] border-[#8967B3] rounded-[15px]  font-semibold"
          >
            Login
          </Link>

          <Link
            to="/company-signup"
            className=" min-w-[110px] h-[48px] lg:h-[70px] lg:w-[130px] 
text-[14px] sm:text-[16px] lg:text-[25px]
 flex items-center justify-center bg-[#8967B3] rounded-[15px]  font-semibold text-white"
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
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#000" strokeWidth="2" />
          </svg>
        </button>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-white flex flex-col">
            {/* TOP BAR */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <span className="text-[22px] font-semibold">Menu</span>

              {/* KEEP THIS TYPE OF CLOSE BUTTON */}
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[26px] font-medium"
              >
                ✕
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col px-6 pt-8 gap-6 text-[20px] font-medium">
              <NavLink
                to="/all-jobs"
                onClick={() => setMobileOpen(false)}
                className="hover:text-[#8967B3]"
              >
                All jobs
              </NavLink>

              <NavLink
                to="/categories"
                onClick={() => setMobileOpen(false)}
                className="hover:text-[#8967B3]"
              >
                Categories
              </NavLink>

              <NavLink
                to="/clients"
                onClick={() => setMobileOpen(false)}
                className="hover:text-[#8967B3]"
              >
                Clients
              </NavLink>
            </div>

            {/* AUTH BUTTONS */}
            <div className="mt-auto px-6 pb-8 flex flex-col gap-4">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="
          h-[52px]
          flex items-center justify-center
          border-2 border-[#8967B3]
          rounded-[14px]
          text-[18px] w-40
          font-semibold
        "
              >
                Login
              </Link>

              <Link
                to="/company-signup"
                onClick={() => setMobileOpen(false)}
                className="
          h-[52px]
          flex items-center justify-center
          bg-[#8967B3]
          rounded-[14px]
          text-[18px]
          font-semibold
          text-white w-40
        "
              >
                Sign up
              </Link>
            </div>
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

export default GuestNavbar;
