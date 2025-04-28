import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            {" "}
            {/* Replace anchor tag with Link */}
            <span className="logo-text">FoundeLost</span>
          </Link>
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                {" "}
                {/* Replace anchor tag with Link */}
                Home
              </Link>
            </li>
            <li>
              <Link to="/lost" className="nav-link">
                {" "}
                {/* Replace anchor tag with Link */}
                Lost Items
              </Link>
            </li>
            <li>
              <Link to="/found" className="nav-link">
                {" "}
                {/* Replace anchor tag with Link */}
                Found Items
              </Link>
            </li>
            <li className="dropdown">
              <span className="nav-link dropdown-toggle">
                {" "}
                {/* Use span for dropdown toggle */}
                Report
              </span>
              <div className="dropdown-content">
                <Link to="/lost">Report Lost Item</Link>{" "}
                {/* Replace anchor tag with Link */}
                <Link to="/found">Report Found Item</Link>{" "}
                {/* Replace anchor tag with Link */}
              </div>
            </li>

            {isLoggedIn ? (
              <li className="dropdown user-dropdown">
                <span className="nav-link dropdown-toggle user-toggle">
                  {" "}
                  {/* Use span for dropdown toggle */}
                  <i className="user-icon">👤</i>
                  <span>My Account</span>
                </span>
                <div className="dropdown-content user-dropdown-content">
                  <Link to="/profile">My Profile</Link>{" "}
                  {/* Replace anchor tag with Link */}
                  <Link to="/my-items">My Items</Link>{" "}
                  {/* Replace anchor tag with Link */}
                  <Link to="/settings">Settings</Link>{" "}
                  {/* Replace anchor tag with Link */}
                  <span onClick={handleLogout} className="logout-link">
                    Logout
                  </span>{" "}
                  {/* Use span for logout action */}
                </div>
              </li>
            ) : (
              <>
                <li className="auth-link">
                  <Link to="/login" className="nav-link login-btn">
                    {" "}
                    {/* Replace anchor tag with Link */}
                    Login
                  </Link>
                </li>
                <li className="auth-link">
                  <Link to="/register" className="nav-link register-btn">
                    {" "}
                    {/* Replace anchor tag with Link */}
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
