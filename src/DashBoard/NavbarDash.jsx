import React, { useState } from "react";
import hero from "../assets/hero-imag.jpg"; 
import "../Dashstyles/Navdash.css";

function NavbarDash({ toggleSidebar }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar-dash">
      <div className="navbar-left">
        <button className="navbar-menu-button" onClick={toggleSidebar}>
          <span className="navbar-menu-icon"></span>
        </button>
        <div className="navbar-brand">
          <h1>FoundeLost Admin</h1>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button className="navbar-search-button">
            <i className="navbar-search-icon">🔍</i>
          </button>
        </div>
        <div className="navbar-notifications">
          <button className="navbar-notification-button">
            <i className="navbar-notification-icon">🔔</i>
            <span className="navbar-notification-badge">3</span>
          </button>
        </div>
        <div
          className="navbar-profile"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img
            src={hero}
            alt="Admin Profile"
            className="navbar-profile-image"
          />
          <span className="navbar-profile-name">Admin</span>
          <i className="navbar-profile-dropdown-icon">▼</i>
          {showDropdown && (
            <div className="navbar-profile-dropdown">
              <a href="#profile">Profile</a>
              <a href="#settings">Settings</a>
              <a href="#logout">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarDash;
