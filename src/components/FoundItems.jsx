// LostItemsPage.jsx
import React from "react";
import "../Styles/LostItems.css"; // Adjust the path as necessary
import bg6 from "../assets/comput.jpg"; // Adjust the path as necessary
export default function FoundItems() {
  const lostItems = [
    {
      id: 1,
      title: "Blue Backpack",
      date: "April 23, 2025",
      status: "Unclaimed",
      bgColor: "#e3f2fd", // Light blue
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 2,
      title: "iPhone 17 Pro",
      date: "April 25, 2025",
      status: "Unclaimed",
      bgColor: "#fce4ec", // Light pink
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 3,
      title: "Car Keys",
      date: "April 22, 2025",
      status: "Unclaimed",
      bgColor: "#e8f5e9", // Light green
      imageUrl: bg6,
    },
    {
      id: 4,
      title: "Reading Glasses",
      date: "April 20, 2025",
      status: "Unclaimed",
      bgColor: "#fff3e0", // Light orange
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 5,
      title: "Silver Watch",
      date: "April 19, 2025",
      status: "Unclaimed",
      bgColor: "#e0f2f1", // Light teal
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 6,
      title: "Wallet",
      date: "April 24, 2025",
      status: "Unclaimed",
      bgColor: "#f3e5f5", // Light purple
      imageUrl: "/api/placeholder/400/320",
    },
  ];

  return (
    <div className="lost-items-container">
      <header className="lost-items-header">
        <h1 className="lost-items-title">Found Items</h1>
        <p className="lost-items-subtitle">
          Found something? Lost something? We're here to help reconnect people
          with their belongings.
        </p>
        <div className="lost-items-wave-container">
          <div className="lost-items-wave"></div>
        </div>
      </header>

      <div className="lost-items-grid">
        {lostItems.map((item) => (
          <div
            key={item.id}
            className="lost-item-card"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="lost-item-content">
              <div className="lost-item-info">
                <h3 className="lost-item-title">{item.title}</h3>
                <div className="lost-item-date-container">
                  <span className="lost-item-date">Found on {item.date}</span>
                </div>
                <div className="lost-item-details-btn-container">
                  <button className="lost-item-details-btn">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
