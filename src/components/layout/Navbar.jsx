import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useState } from "react";

const Navbar = () => {
  /* 🔧 STEP 3: mobile menu state */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-100/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto section-x h-16 sm:h-20 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={Logo}
              alt="Sheqlee Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <Link
            to="/"
            className="text-lg sm:text-xl font-extrabold text-gray-900"
          >
            Sheqlee
          </Link>
        </div>

        {/* RIGHT CLUSTER — DESKTOP ONLY */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
            <li>
              <NavLink to="/jobs" className="hover:text-violet-600 transition">
                All jobs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/categories"
                className="hover:text-violet-600 transition flex items-center gap-1"
              >
                Categories <span className="text-xs">⌄</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/clients" className="hover:text-violet-600 transition">
                Clients
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-md border-2 border-purple-800 text-sm font-medium hover:bg-gray-100 transition"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 rounded-md bg-purple-800 text-sm font-semibold text-white hover:bg-violet-700 transition"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* 🔧 STEP 3: HAMBURGER — MOBILE ONLY */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              /* Close icon */
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              /* Hamburger icon */
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* 🔧 STEP 3: MOBILE MENU PANEL */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-200">
          <ul className="flex flex-col gap-6 px-6 py-8 text-sm font-medium text-gray-700">
            <li>
              <NavLink to="/jobs" onClick={() => setIsOpen(false)}>
                All jobs
              </NavLink>
            </li>

            <li>
              <NavLink to="/categories" onClick={() => setIsOpen(false)}>
                Categories
              </NavLink>
            </li>

            <li>
              <NavLink to="/clients" onClick={() => setIsOpen(false)}>
                Clients
              </NavLink>
            </li>

            {/* AUTH BUTTONS — MOBILE */}
            <li className="pt-4 border-t border-gray-300 flex flex-col gap-4">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-md border-2 bg-[#704cb8]  text-center"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-md bg-[#704cb8] text-white text-center"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
