import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CloseIcon from "/icons/close.svg";
import DownArrow from "/icons/arrow-down.svg";
import { mockCategories } from "../../data/mockCategories";

const Navbar = ({ showAuthModal, closeAuthModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef(null);

  /* 🔽 Hide navbar on scroll */
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

  /* Close auth modal listener */
  useEffect(() => {
    const handler = () => closeAuthModal();
    window.addEventListener("close-auth-modal", handler);
    return () => window.removeEventListener("close-auth-modal", handler);
  }, [closeAuthModal]);

  /* Close dropdown on outside click */
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
    `text-[20px] font-medium transition ${
      isActive ? "text-[#8967B3]" : "text-black hover:text-[#8967B3]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#F7F7F7] z-50 transition-transform duration-300 overflow-x-hidden ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className="max-w-[1920px] mx-auto flex items-center h-[120px] px-6 md:px-[100px]"
        style={{ fontFamily: "Kantumruy Pro" }}
      >
        {/* LOGO */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Sheqlee Logo" className="w-[55px] h-[55px]" />
          <Link to="/" className="font-bold text-[32px]">
            Sheqlee
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="ml-auto hidden md:flex items-center gap-10">
          <NavLink to="/all-jobs" className={navLinkClass}>All jobs</NavLink>

          {/* Categories */}
          <div className="relative flex items-center gap-2" ref={dropdownRef}>
            <NavLink to="/categories" className={navLinkClass}>Categories</NavLink>
            <button onClick={() => setCategoriesOpen(!categoriesOpen)}>
              <img src={DownArrow} className="w-3 h-2" />
            </button>

            {categoriesOpen && (
              <div className="absolute top-full mt-4 w-[260px] bg-white rounded-xl shadow-lg py-3">
                {mockCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/categories/${cat.id}`}
                    onClick={() => setCategoriesOpen(false)}
                    className="block px-5 py-2 text-[16px] hover:bg-[#F4F1FA]"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/clients" className={navLinkClass}>Clients</NavLink>

          <Link to="/login" className="border-2 border-[#8967B3] px-6 py-2 rounded-xl text-[18px]">
            Login
          </Link>

          <Link to="/signup" className="bg-[#8967B3] px-6 py-2 rounded-xl text-white text-[18px]">
            Sign up
          </Link>
        </div>

        {/* HAMBURGER (NO ICON FILE) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[3px] bg-black" />
          <span className="w-6 h-[3px] bg-black" />
          <span className="w-6 h-[3px] bg-black" />
        </button>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 overflow-x-hidden">
            <button onClick={() => setIsOpen(false)} className="self-end">
              <img src={CloseIcon} className="w-6 h-6" />
            </button>

            <div className="mt-10 flex flex-col gap-6 text-[22px]">
              <Link to="/all-jobs" onClick={() => setIsOpen(false)}>All jobs</Link>
              <Link to="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
              <Link to="/clients" onClick={() => setIsOpen(false)}>Clients</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup" className="text-[#8967B3] font-semibold">Sign up</Link>
            </div>
          </div>
        )}

        {/* CLOSE ICON (AUTH MODAL) */}
        {showAuthModal && (
          <button onClick={closeAuthModal} className="absolute top-6 right-6">
            <img src={CloseIcon} className="w-6 h-6" />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
