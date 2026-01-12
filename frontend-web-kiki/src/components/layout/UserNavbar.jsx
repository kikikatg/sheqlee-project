import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import DownArrow from "/icons/arrow-down.svg";
import { mockCategories } from "../../data/mockCategories";
import CloseIcon from "/icons/close.svg";

const UserNavbar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const [visible, setVisible] = useState(true);

  const profileTriggerRef = useRef(null);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  /* Hide navbar on scroll */
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

  /* Position desktop profile dropdown */
  useEffect(() => {
    if (profileOpen && profileTriggerRef.current) {
      const rect = profileTriggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom,
        right: window.innerWidth - rect.right - 12,
      });
    }
  }, [profileOpen]);

  const navLinkClass = ({ isActive }) =>
    `relative text-[22px] font-medium transition-colors ${
      isActive
        ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[42px] after:w-[60px] after:h-[8px] after:bg-[#8967B3]"
        : "text-black hover:text-[#8967B3]"
    }`;

  return (
    <>
      {/* OVERLAY FOR DESKTOP DROPDOWN */}
      {profileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setProfileOpen(false)}
        />
      )}

      {/* NAVBAR */}
      <header
        className={`relative z-20 bg-[#F7F7F7] h-[90px] md:h-[160px] transition-opacity ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="w-full max-w-[1920px] mx-auto flex items-center h-full px-4 md:px-[101px] gap-6">
          {/* LOGO */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <img
              src={Logo}
              className="w-[45px] h-[45px] md:w-[65px] md:h-[65px]"
            />
            <Link to="/user" className="text-[24px] md:text-[40px] font-bold">
              Sheqlee
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="ml-auto hidden md:flex items-center gap-6 lg:gap-10 flex-nowrap min-w-0">
            <NavLink to="/all-jobs" className={navLinkClass}>
              All jobs
            </NavLink>

            {/* Categories */}
            <div className="relative flex items-center gap-3">
              <NavLink to="/categories" className={navLinkClass}>
                Categories
              </NavLink>
              <button onClick={() => setCategoriesOpen(!categoriesOpen)}>
                <img src={DownArrow} className="w-[10px]" />
              </button>

              {categoriesOpen && (
                <div className="absolute top-full mt-6 w-[280px] bg-white rounded-2xl shadow-lg py-4 z-50">
                  {mockCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/categories/${cat.id}`}
                      className="block px-6 py-3 hover:bg-[#F4F1FA]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* POST JOB */}
            <Link
              to="/user/post-job"
              className="w-[140px] md:w-[160px] h-[48px] md:h-[56px]  text-[18px] md:text-[22px]
              bg-[#8967B3] text-white rounded-[15px] flex items-center justify-center"
            >
              Post a job
            </Link>

            {/* USER PROFILE */}
            <div
              ref={profileTriggerRef}
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img src="/icons/set.svg" className="w-8 h-8" />
              <span className="hidden xl:inline text-[22px] font-medium">
                Microsoft
              </span>
              <img src="/icons/arrow-down.svg" className="w-[10px]" />
            </div>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="ml-auto md:hidden flex items-center"
            onClick={() => setMobileOpen(true)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#000" strokeWidth="2" />
            </svg>
          </button>
        </nav>
      </header>

      {/* DESKTOP PROFILE DROPDOWN */}
      {profileOpen && (
        <div
          className="fixed z-[60] w-[220px] bg-white shadow-xl py-2 my-4 rounded-b-2xl rounded-t-none"
          style={{
            top: `${dropdownPos.top}px`,
            right: `${dropdownPos.right}px`,
          }}
        >
          <Link
            to="/dashboard"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-4 px-6 py-3 hover:bg-[#F4F1FA]"
          >
            <img src="/icons/dashboard.svg" className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            to="/company-profile"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-4 px-6 py-3 hover:bg-[#F4F1FA]"
          >
            <img src="/icons/company (1).svg" className="w-5 h-5" />
            Company profile
          </Link>
          <Link
            to="/account-setting"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-4 px-6 py-3 hover:bg-[#F4F1FA]"
          >
            <img src="/icons/account-setting.svg" className="w-5 h-5" />
            Account setting
          </Link>
          <button
            onClick={() => navigate("/login")}
            className="w-full flex items-center gap-4 px-6 py-3 hover:bg-[#F4F1FA]"
          >
            <img src="/icons/logout.svg" className="w-5 h-5" />
            Logout
          </button>
        </div>
      )}

      {/* MOBILE NAVBAR */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div className="flex items-center gap-3">
              <img src={Logo} className="w-10 h-10" />
              <span className="text-[24px] font-bold">Sheqlee</span>
            </div>
            <button onClick={() => setMobileOpen(false)}>✕</button>
          </div>

          {/* MOBILE CONTENT */}
          <div className="flex flex-col gap-6 px-6 py-8 text-[20px] font-medium">
            <NavLink to="/all-jobs" onClick={() => setMobileOpen(false)}>
              All jobs
            </NavLink>

            {/* Categories */}
            <div>
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex items-center gap-2"
              >
                Categories
                <img src={DownArrow} className="w-3" />
              </button>

              {categoriesOpen && (
                <div className="mt-4 flex flex-col gap-3 pl-4">
                  {mockCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/categories/${cat.id}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/user/post-job"
              onClick={() => setMobileOpen(false)}
              className="w-[120px] bg-[#8967B3] text-white py-3 rounded-xl text-center"
            >
              Post a job
            </Link>

            {/* USER PROFILE */}
            <div className="border-t pt-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <img src="/icons/set.svg" className="w-10 h-10 rounded-full" />
                <span className="font-medium">Microsoft</span>
              </div>

              <div className="flex flex-col gap-4">
                <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
                  Dashboard
                </Link>
                <Link
                  to="/company-profile"
                  onClick={() => setMobileOpen(false)}
                >
                  Company profile
                </Link>
                <Link
                  to="/account-setting"
                  onClick={() => setMobileOpen(false)}
                >
                  Account setting
                </Link>
                <button
                  onClick={() => navigate("/login")}
                  className="text-left"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserNavbar;
