import React, { useState, useEffect } from "react";
import "../Styles/SignUpForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    // Set the height of the container to the viewport height
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial set
    setHeight();

    // Update on resize
    window.addEventListener('resize', setHeight);
    return () => window.removeEventListener('resize', setHeight);
  }, []);

  return (
    <div className="signup-container">
      <div className="brand-container">
        <div className="brand-logo">
          <div className="soccer-ball-icon"></div>
          <h3>Digital Lost and Found System</h3>
        </div>
        <p>Already have an account?</p>
        <Link to="/login" className="signin-link">
          <button className="signin-button">Sign In</button>
        </Link>
      </div>
      <div className="signup-form-container">
        <h1>Hello!</h1>
        <p className="signup-subtitle">Please signup to continue</p>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {/* Form content */}
          {/* First row with first and last name */}
          <div style={{ display: "flex", gap: "20px" }}>
            <div className="form-group" style={{ flex: 1 }}>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group" style={{ flex: 1 }}>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div className="form-group" style={{ flex: 1 }}>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group" style={{ flex: 1 }}>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "5px 0",
                  border: "none",
                  borderBottom: "1px solid #ddd",
                  fontSize: "16px",
                  color: "#333",
                  backgroundColor: "transparent",
                  appearance: "none",
                }}
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <span className="input-icon">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
          </div>

          <div className="form-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>

          <div className="separator">
            <span>or</span>
          </div>

          <p className="login-link">
            I'm already a member! <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;