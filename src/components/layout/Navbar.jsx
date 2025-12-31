import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CloseIcon from "/icons/close.svg";
import DownArrow from "/icons/arrow-down.svg";
import { useEffect, useState, useRef } from "react";
import { mockCategories } from "../../data/mockCategories";

const Navbar = ({ showAuthModal, closeAuthModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = () => closeAuthModal();
    window.addEventListener("close-auth-modal", handler);
    return () => window.removeEventListener("close-auth-modal", handler);
  }, [closeAuthModal]);

  /** Close dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <header className="sticky top-0 z-50 bg-[#F7F7F7] h-[160px]">
      <nav
        className="
          max-w-[1920px]
          mx-auto
          flex
          items-center
          h-full
          px-[101px]
        "
        style={{ fontFamily: "Kantumruy Pro" }}
      >
        {/* LOGO */}
        <div className="flex items-center gap-6">
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
        <div className="ml-auto hidden md:flex items-center gap-12 ">
          <NavLink to="/all-jobs" className={navLinkClass}>
            All jobs
          </NavLink>

          {/* CATEGORIES + DROPDOWN */}
          <div className="relative flex items-center gap-3" ref={dropdownRef}>
            <NavLink to="/categories" className={navLinkClass}>
              Categories
            </NavLink>

            <button
              type="button"
              onClick={() => setCategoriesOpen((v) => !v)}
              className="flex items-center mt-[2px]"
            >
              <img src={DownArrow} alt="" className="w-[10px] h-[6px]" />
            </button>

            {categoriesOpen && (
              <div
                className="
                  absolute
                  top-full
                  mt-6
                  w-[280px]
                  bg-white
                  rounded-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                  py-4
                  z-[9999]
                "
              >
                {mockCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/categories/${cat.id}`}
                    onClick={() => setCategoriesOpen(false)}
                    className="
                      block
                      px-6
                      py-3
                      text-[18px]
                      !text-black
                      font-medium
                      hover:bg-[#F4F1FA]
                      hover:text-[#8967B3]
                      transition-colors
                    "
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

          {/* AUTH BUTTONS */}
          <Link
            to="/login"
            className="
              w-[130px]
              h-[56px]
              flex
              items-center
              justify-center
              border-[3px]
              border-[#8967B3]
              rounded-[15px]
              text-[22px]
              font-semibold
              text-black
            "
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="
              w-[140px]
              h-[56px]
              flex
              items-center
              justify-center
              bg-[#8967B3]
              rounded-[15px]
              text-[22px]
              font-semibold
              text-white
            "
          >
            Sign up
          </Link>
        </div>

        {/* CLOSE ICON */}
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
