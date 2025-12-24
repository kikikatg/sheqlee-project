import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-100/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          {/* Logo Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={Logo} alt="Sheqlee Logo" className="w-full h-full object-contain" />
          </div>

          {/* Brand Name */}
          <Link to="/" className="text-xl font-extrabold text-gray-900">
            Sheqlee
          </Link>
        </div>

        {/* RIGHT CLUSTER */}
        <div className="hidden md:flex items-center gap-10">
          
          {/* NAV LINKS */}
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
                Categories
                <span className="text-xs">⌄</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/clients" className="hover:text-violet-600 transition">
                Clients
              </NavLink>
            </li>
          </ul>

          {/* AUTH BUTTONS */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-md border border-purple-800 border-width:4px; text-sm font-medium hover:bg-white-900 transition"
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
      </nav>
    </header>
  );
};

export default Navbar;
