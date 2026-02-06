import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CloseIcon from "/icons/close.svg";
import DownArrow from "/icons/arrow-down.svg";
import { mockCategories } from "../../data/mockCategories";
import HamburgerIcon from "/icons/Group 3.svg";

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
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        <div className="hidden md:flex items-center gap-3 lg:gap-4 sm:gap-4  shrink-0 min-w-fit">
          <img
            src={Logo}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[75px] lg:h-[75px]"
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
            {/* Categories Dropdown – DESKTOP/TABLET ONLY */}
            {categoriesOpen && (
              <div className="absolute top-full mt-6 w-[280px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] py-4 z-50">
                {/* Scrollable container */}
                <div
                  className="
        max-h-[320px]
        overflow-y-auto
        py-2
        scrollbar-thin
        scrollbar-thumb-[#C7B8E6]
        scrollbar-track-transparent
      "
                >
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

        {/* MOBILE LEFT SECTION */}
        <div className="flex  items-center gap-3 md:hidden">
          <button onClick={() => setMobileOpen(true)}>
            <img src={HamburgerIcon} className="w-3 h-3" alt="menu" />
          </button>

          <div className="flex items-center gap-2">
            <img
              src={Logo}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[65px] lg:h-[65px]"
            />
          </div>
        </div>

        {/* MOBILE AUTH RIGHT */}
        <div className="ml-auto flex  items-center gap-3 md:hidden">
          <Link to="/login" className="text-[14px] max-[360px]:text-[12px]">
            Login
          </Link>

          <Link
            to="/company-signup"
            className="bg-[#8967B3] text-white px-4 py-2 rounded-[10px] text-[14px] font-semibold"
          >
            Sign up
          </Link>
        </div>

        {/* MOBILE OVERLAY + DROPDOWN */}
        {mobileOpen && (
          <>
            {/* BLACK OVERLAY */}
            <div
              className="fixed top-0 left-0 z-40 md:hidden"
              style={{
                width: "414px",
                height: "735px",
                background: "#000000",
                opacity: 0.5,
              }}
              onClick={() => setMobileOpen(false)}
            />

            {/* WHITE MENU CONTAINER */}
            <div
              className="fixed z-50 bg-white md:hidden"
              style={{
                top: "50px",
                left: "15px",
                width: "120px",
                height: "100px",
                borderRadius: "0px 0px 10px 10px",
              }}
            >
              <div className="flex flex-col px-4 py-1 gap-2 text-[14px]  font-medium">
                <NavLink to="/all-jobs" onClick={() => setMobileOpen(false)}>
                  All jobs
                </NavLink>

                <div className="flex items-center gap-1">
                  <NavLink
                    to="/categories"
                    onClick={() => setMobileOpen(false)}
                  >
                    Categories
                  </NavLink>
                  <img src={DownArrow} className="w-[10px] h-[6px]" />
                </div>

                <NavLink to="/clients" onClick={() => setMobileOpen(false)}>
                  Clients
                </NavLink>
              </div>
            </div>
          </>
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
