import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-[#003366] shadow-lg" : "bg-[#003366] shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-white no-underline">
            <span className="text-2xl font-bold">DFL System</span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-between h-6 w-8 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`bg-white h-0.5 w-full rounded transition-all duration-300 ${
                menuOpen ? "transform rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`bg-white h-0.5 w-full rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`bg-white h-0.5 w-full rounded transition-all duration-300 ${
                menuOpen ? "transform -rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div
          className={`fixed md:static top-0 ${
            menuOpen ? "right-0" : "-right-full"
          } md:right-auto h-screen md:h-auto w-4/5 md:w-auto max-w-sm md:max-w-none bg-blue-900 md:bg-transparent md:flex items-center transition-all duration-300 z-50 md:z-auto
          pt-20 md:pt-0 px-6 md:px-0 overflow-y-auto md:overflow-visible shadow-lg md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-1 list-none p-0 m-0 w-full">
            <li>
              <Link
                to="/"
                className="text-white px-4 py-2 block md:inline-block hover:bg-white/10 rounded text-base transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/lost"
                className="text-white px-4 py-2 block md:inline-block hover:bg-white/10 rounded text-base transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Lost Items
              </Link>
            </li>
            <li>
              <Link
                to="/found"
                className="text-white px-4 py-2 block md:inline-block hover:bg-white/10 rounded text-base transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                FoundItems
              </Link>
            </li>
          
            <li>
              <Link
                to="/contact"
                className="text-white px-4 py-2 block md:inline-block hover:bg-white/10 rounded text-base transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>

            {/* Report Dropdown */}
            <li className="relative group">
              <button className="text-white px-4 py-2 flex items-center hover:bg-white/10 rounded text-base transition-colors duration-200">
                Report
                <MdArrowDropDown className="w-5 h-5 ml-1" />
              </button>
              <div
                className="absolute left-0 mt-0 w-48 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50
                md:mt-2 transform origin-top-left md:translate-y-0 scale-95 group-hover:scale-100"
              >
                <Link
                  to="/lost"
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100 text-sm transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Report Lost Item
                </Link>
                <Link
                  to="/found"
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100 text-sm transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Report Found Item
                </Link>
              </div>
            </li>

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <li className="relative group md:ml-4 mt-6 md:mt-0">
                <button className="text-white px-4 py-2 flex items-center hover:bg-white/10 rounded text-base transition-colors duration-200">
                  <span className="mr-2">👤</span>
                  My Account
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  className="absolute right-0 md:left-0 mt-0 w-48 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50
                  md:mt-2 transform origin-top-right md:origin-top-left md:translate-y-0 scale-95 group-hover:scale-100"
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 text-sm transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/my-items"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 text-sm transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Items
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 text-sm transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 text-sm transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              <div className="md:ml-4 mt-6 md:mt-0 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2">
                <li>
                  <Link
                    to="/login"
                    className="block w-full md:w-auto text-center text-white border border-white px-6 py-2 rounded hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block w-full md:w-auto text-center bg-yellow-400 text-blue-900 font-medium px-6 py-2 rounded hover:bg-yellow-300 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Register
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
