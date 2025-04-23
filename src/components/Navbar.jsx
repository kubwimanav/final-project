import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css"; 

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Check if user is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
    // You would typically redirect to search results page or filter current page
  };

  const handleLogout = () => {
    // Implement logout functionality
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-text">FoundeLost</span>
          </a>
        </div>

       

        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/lost-items" className="nav-link">
                Lost Items
              </a>
            </li>
            <li>
              <a href="/found-items" className="nav-link">
                Found Items
              </a>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link dropdown-toggle">
                Report
              </a>
              <div className="dropdown-content">
                <a href="/report-lost">Report Lost Item</a>
                <a href="/report-found">Report Found Item</a>
              </div>
            </li>

            {isLoggedIn ? (
              <li className="dropdown user-dropdown">
                <a href="#" className="nav-link dropdown-toggle user-toggle">
                  <i className="user-icon">👤</i>
                  <span>My Account</span>
                </a>
                <div className="dropdown-content user-dropdown-content">
                  <a href="/profile">My Profile</a>
                  <a href="/my-items">My Items</a>
                  <a href="/settings">Settings</a>
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </div>
              </li>
            ) : (
              <>
                <li className="auth-link">
                  <a href="/login" className="nav-link login-btn">
                    Login
                  </a>
                </li>
                <li className="auth-link">
                  <a href="/register" className="nav-link register-btn">
                    Register
                  </a>
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
