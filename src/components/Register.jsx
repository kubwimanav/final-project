import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Auth.css";

function Register({ login }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email.endsWith("@ukm.edu.my")) {
      setError("Please use your university email (@ukm.edu.my)");
      return;
    }

    // Validate password
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Mock registration - In a real app, this would make an API call
    // to create a new user
    login({
      id: 1,
      name: name,
      email: email,
      matricNumber: matricNumber,
      phoneNumber: phoneNumber,
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register for FoundeLost</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              University Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="example@ukm.edu.my"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="matricNumber" className="form-label">
              Matric Number
            </label>
            <input
              type="text"
              id="matricNumber"
              className="form-control"
              placeholder="A123456"
              value={matricNumber}
              onChange={(e) => setMatricNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="form-control"
              placeholder="012-3456789"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </form>
        <div className="auth-links">
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
