// FoundItems.js
import React, { useState, useEffect } from "react";
import "../Styles/FoundItems.css";

const FoundItems = () => {
  const [foundItems, setFoundItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Simulating API call to fetch found items
    const fetchFoundItems = async () => {
      try {
        // In a real application, this would be an API call
        // For now, using mock data based on the document
        const mockFoundItems = [
          {
            id: 1,
            title: "Found Student ID Card",
            category: "ID/Cards",
            location: "Faculty of Science",
            date: "2023-04-11",
            description:
              "Found a student ID card near the faculty building entrance",
            imageUrl: "/placeholder-image.jpg",
            contactEmail: "finder@ukm.edu.my",
            matricNumber: "A165570",
            securityQuestion: "What is your name as shown on the ID card?",
          },
          {
            id: 2,
            title: "Found USB Drive",
            category: "Electronics",
            location: "Computer Lab",
            date: "2023-04-14",
            description: "Found a black USB drive in Computer Lab 3",
            imageUrl: "/placeholder-image.jpg",
            contactEmail: "finder2@ukm.edu.my",
            matricNumber: "A165571",
            securityQuestion: "What is the brand of the USB drive?",
          },
          {
            id: 3,
            title: "Found Textbook",
            category: "Books",
            location: "Main Library",
            date: "2023-04-16",
            description: "Found a Database Systems textbook on the 2nd floor",
            imageUrl: "/placeholder-image.jpg",
            contactEmail: "finder3@ukm.edu.my",
            matricNumber: "A165572",
            securityQuestion:
              "What course code is written on the first page of the book?",
          },
        ];

        setFoundItems(mockFoundItems);
      } catch (error) {
        console.error("Error fetching found items:", error);
      }
    };

    fetchFoundItems();
  }, []);

  const categories = [
    "All",
    "ID/Cards",
    "Electronics",
    "Books",
    "Personal Items",
    "Others",
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = foundItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="found-items-container">
      <h2>Found Items</h2>
      <div className="filter-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search found items..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="category-filter">
          <select value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="no-items-message">
          <p>No found items matching your criteria.</p>
        </div>
      ) : (
        <div className="items-grid">
          {filteredItems.map((item) => (
            <div className="item-card" key={item.id}>
              <div className="item-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className="item-details">
                <h3>{item.title}</h3>
                <p className="item-category">Category: {item.category}</p>
                <p className="item-location">Location: {item.location}</p>
                <p className="item-date">Date: {item.date}</p>
                <p className="item-description">{item.description}</p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoundItems;
