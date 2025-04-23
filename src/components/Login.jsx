import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Auth.css";

function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email.endsWith("@ukm.edu.my")) {
      setError("Please use your university email (@ukm.edu.my)");
      return;
    }

    // Mock login - In a real app, this would make an API call
    // to verify credentials
    login({
      id: 1,
      name: email.split("@")[0],
      email: email,
      matricNumber: "A123456",
      phoneNumber: "012-3456789",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to FoundeLost</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
        <div className="auth-links">
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
