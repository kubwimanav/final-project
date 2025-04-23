import React, { useState } from "react";
import "../Styles/Profile.css";

function Profile({ user, setUser }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [matricNumber, setMatricNumber] = useState(user.matricNumber);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update user profile - In a real app, this would make an API call
    const updatedUser = {
      ...user,
      name,
      matricNumber,
      phoneNumber,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditing(false);
    setMessage({ type: "success", text: "Profile updated successfully!" });

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {message && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
      <div className="profile-card">
        {editing ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
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
                value={user.email}
                disabled
              />
              <small>Email cannot be changed</small>
            </div>
            <div className="form-group">
              <label htmlFor="matricNumber" className="form-label">
                Matric Number
              </label>
              <input
                type="text"
                id="matricNumber"
                className="form-control"
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="button-group">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="profile-info">
            <div className="info-row">
              <span className="info-label">Full Name:</span>
              <span className="info-value">{user.name}</span>
            </div>
            <div className="info-row">
              <span className="info-label">University Email:</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Matric Number:</span>
              <span className="info-value">{user.matricNumber}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Phone Number:</span>
              <span className="info-value">{user.phoneNumber}</span>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>

      <h3 className="my-items-heading">My Items</h3>
      <div className="profile-tabs">
        <button className="tab-button active">Lost Items</button>
        <button className="tab-button">Found Items</button>
      </div>

      <div className="empty-state">
        <i className="fas fa-box-open"></i>
        <p>You haven't posted any items yet.</p>
        <button className="btn btn-primary">Add New Item</button>
      </div>
    </div>
  );
}

export default Profile;
