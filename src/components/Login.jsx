import React, { useState } from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

  return (
    <div className="Login-container">
      <div className="Login-brand-container">
        <div className="brand-logo">
          <div className="soccer-ball-icon"></div>
          <h4>Digital Lost and Found System</h4>
        </div>
        <p>Don't have an account?</p>
        <Link to="/signup" className="signin-link">
          <button className="signin-button">Sign in</button>
        </Link>
      </div>
      <div className="login-form-container">
        <h2> Welcome Back! </h2>
        <p className="signup-subtitle">Please login to continue</p>

        <form onSubmit={handleSubmit} className="Login-form">
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
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
