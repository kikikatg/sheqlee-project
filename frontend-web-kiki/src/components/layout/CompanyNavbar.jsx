import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import HamburgerIcon from "/icons/Group 3.svg";
import DownArrow from "/icons/arrow-down.svg";
import { mockCategories } from "../../data/mockCategories";
import { useUser } from "../../context/UserContext";
import useIsMobile from "../../hooks/useIsMobile";

const CompanyNavbar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
const isMobile = useIsMobile();

  const fallbackCompany = {
    name: "Demo Company",
    logo: "/icons/set.svg",
  };

  const company = user?.companyProfile || fallbackCompany;
  const name = company.name;
  const logo = company.logo;

  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const [dropdownPos, setDropdownPos] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const profileTriggerRef = useRef(null);
  const lastScrollY = useRef(0);

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

  /* Desktop / Tablet dropdown positioning (FIXED) */
  useEffect(() => {
    if (profileOpen && profileTriggerRef.current) {
      const rect = profileTriggerRef.current.getBoundingClientRect();
      const minWidth = 240;
      const width = Math.max(rect.width, minWidth);

      const viewportWidth = window.innerWidth;
      const padding = 16;

      let left = rect.left;

      if (left + width + padding > viewportWidth) {
        left = viewportWidth - width - padding;
      }

      if (left < padding) {
        left = padding;
      }

      setDropdownPos({
        top: rect.bottom + 8,
        left,
        width,
      });
    }
  }, [profileOpen]);

  const closeAllDropdowns = () => {
    setProfileOpen(false);
    setCategoriesOpen(false);
    setMobileMenuOpen(false);
    setMobileProfileOpen(false);
    setMobileCategoriesOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `
      relative
      text-[16px] md:text-[18px] lg:text-[20px]
      font-medium
      transition-colors
      ${
        isActive
          ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[28px] after:w-[45px] after:h-[5px] after:bg-[#8967B3]"
          : "text-black hover:text-[#8967B3]"
      }
    `;

  return (
    <>
      {/* GRAY OVERLAY */}
      {/* GRAY OVERLAY */}
      {(mobileMenuOpen ||
        mobileProfileOpen ||
        profileOpen ||
        mobileCategoriesOpen) && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-[60]"
          onClick={closeAllDropdowns}
        />
      )}

      <header
        className={`relative z-50 bg-[#F7F7F7] h-[90px] sm:h-[120px] lg:h-[160px] transition-opacity ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="w-full max-w-[1920px] mx-auto flex items-center h-full px-6 sm:px-6 lg:px-[101px]">
          {/* LEFT */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              className="sm:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <img src={HamburgerIcon} className="w-3 h-3" />
            </button>

            <img
              src={Logo}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[65px] lg:h-[65px]"
            />

            <Link
              to="/user"
              className="hidden sm:block text-[22px] md:text-[26px] lg:text-[36px] font-bold"
            >
              Sheqlee
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="ml-auto hidden sm:flex items-center gap-3 md:gap-5 lg:gap-8">
            <NavLink to="/all-jobs" className={navLinkClass}>
              All jobs
            </NavLink>

            {/* Categories */}
            <div className="relative flex items-center gap-1">
              <NavLink to="/categories" className={navLinkClass}>
                Categories
              </NavLink>

              <button onClick={() => setCategoriesOpen((v) => !v)}>
                <img src={DownArrow} className="w-[10px]" />
              </button>
              {/* Categories Dropdown – DESKTOP/TABLET ONLY */}
              {categoriesOpen && (
                <div
                  className="
      hidden sm:block
      fixed
      top-[140px]
      w-[280px]
      bg-white
      rounded-2xl
      shadow-[0_10px_30px_rgba(0,0,0,0.12)]
      border border-[#EFEAF6]
      !z-[9999]
      overflow-hidden
    "
                >
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
                        onClick={closeAllDropdowns}
                        className="
            block
            px-6
            py-3
            text-[15px]
            transition-all
            hover:bg-[#F4F1FA]
            hover:pl-8
          "
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

         {!isMobile && (
  <Link
    to="/company/post-job"
    className="px-4 lg:px-6 py-2 lg:py-3 text-[16px] lg:text-[20px] bg-[#8967B3] text-white rounded-[15px]"
  >
    Post a job
  </Link>
)}

            {/* PROFILE TRIGGER */}
            <div
              ref={profileTriggerRef}
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src={logo} className="w-8 h-8 rounded-full" />
              <span className="hidden sm:inline text-[18px] lg:text-[20px] font-medium">
                {name}
              </span>
              <img src={DownArrow} className="w-[10px]" />
            </div>
          </div>

          {/* MOBILE PROFILE */}
          <div
            className="sm:hidden ml-auto flex items-center gap-2"
            onClick={() => setMobileProfileOpen(true)}
          >
            <img src={logo} className="w-8 h-8 rounded-full" />
            <span className="text-[16px] font-medium">{name}</span>
            <img src={DownArrow} className="w-[10px]" />
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed z-[70] bg-white sm:hidden top-[75px] left-[20px] w-[160px] rounded-b-[10px]">
          <div className="flex flex-col gap-4 px-4 py-4 text-[14px] font-medium">
            <NavLink to="/all-jobs" onClick={closeAllDropdowns}>
              All jobs
            </NavLink>

            <div className="flex flex-col">
              <button
                className="flex justify-between items-center  py-2"
                onClick={() => setMobileCategoriesOpen((v) => !v)}
              >
                Categories
                <img src={DownArrow} className="w-4 h-4" />
              </button>

              {mobileCategoriesOpen && (
                <div
                  className="
      mt-2
      bg-white
      rounded-xl
      shadow-lg
      border border-[#EFEAF6]
      overflow-hidden
    "
                >
                  <div
                    className="
        max-h-[240px]
        overflow-y-auto
        flex flex-col
        scrollbar-thin
        scrollbar-thumb-[#C7B8E6]
        scrollbar-track-transparent
      "
                  >
                    {mockCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/categories/${cat.id}`}
                        onClick={closeAllDropdowns}
                        className="
            px-5
            py-2.5
            text-[14px]
            transition-all
            hover:bg-[#F4F1FA]
            active:bg-[#EDE7F6]
          "
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

           {!isMobile && (
  <NavLink to="/company/post-job" onClick={closeAllDropdowns}>
    Post a job
  </NavLink>
)}

          </div>
        </div>
      )}

      {/* MOBILE PROFILE DROPDOWN */}
      {mobileProfileOpen && (
        <div className="fixed z-[70] bg-white sm:hidden top-[65px] right-[25px] w-[180px] rounded-b-[12px]">
          <div className="flex flex-col">
            <Link
              to="/company/dashboard"
              onClick={closeAllDropdowns}
              className="px-3 py-2 flex gap-2"
            >
              <img src="/icons/dashboard.svg" className="w-5 h-5" />
              Dashboard
            </Link>
            <div className="h-[2px] bg-[#DFDFDF]" />
            <Link
              to="/company/profile"
              onClick={closeAllDropdowns}
              className="px-3 py-2 flex gap-2"
            >
              <img src="/icons/company (1).svg" className="w-5 h-5" />
              Company profile
            </Link>
            <Link
              to="/company/account-setting"
              onClick={closeAllDropdowns}
              className="px-3 py-2 flex gap-2"
            >
              <img src="/icons/account-setting.svg" className="w-5 h-5" />
              Account setting
            </Link>
            <div className="h-[2px] bg-[#DFDFDF]" />
            <button
              onClick={() => {
                navigate("/login");
                closeAllDropdowns();
              }}
              className="px-3 py-2 flex gap-2"
            >
              <img src="/icons/logout.svg" className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}

      {/* DESKTOP / TABLET PROFILE DROPDOWN */}
      {profileOpen && (
        <div
          className="fixed z-[70] bg-white shadow-lg rounded-b-2xl"
          style={{
            top: dropdownPos.top,
            left: dropdownPos.left,
            width: dropdownPos.width,
          }}
        >
          <div className="flex flex-col py-2">
            <Link
              to="/company/dashboard"
              onClick={closeAllDropdowns}
              className="px-6 py-3 flex gap-4"
            >
              <img src="/icons/dashboard.svg" className="w-5 h-5" />
              Dashboard
            </Link>
            <div className="h-[2px] bg-[#DFDFDF]" />
            <Link
              to="/company/profile"
              onClick={closeAllDropdowns}
              className="px-6 py-3 flex gap-4"
            >
              <img src="/icons/company (1).svg" className="w-5 h-5" />
              Company profile
            </Link>
            <Link
              to="/company/account-setting"
              onClick={closeAllDropdowns}
              className="px-6 py-3 flex gap-4"
            >
              <img src="/icons/account-setting.svg" className="w-5 h-5" />
              Account setting
            </Link>
            <div className="h-[2px] bg-[#DFDFDF]" />
            <button
              onClick={() => {
                navigate("/login");
                closeAllDropdowns();
              }}
              className="px-6 py-3 flex gap-4 text-left"
            >
              <img src="/icons/logout.svg" className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyNavbar;
