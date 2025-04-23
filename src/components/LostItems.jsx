// LostItems.js
import React, { useState, useEffect } from "react";
import "../Styles/LostItems.css";

const LostItems = () => {
  const [lostItems, setLostItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Simulating API call to fetch lost items
    const fetchLostItems = async () => {
      try {
        // In a real application, this would be an API call
        // For now, using mock data based on the document
        const mockLostItems = [
          {
            id: 1,
            title: "Lost Student ID Card",
            category: "ID/Cards",
            location: "Faculty of Information Science and Technology",
            date: "2023-04-10",
            description: "Lost my student ID card near the faculty building",
            imageUrl: "/placeholder-image.jpg",
            contactEmail: "student@ukm.edu.my",
            matricNumber: "A165563",
          },
          {
            id: 2,
            title: "Lost Laptop Charger",
            category: "Electronics",
            location: "Main Library",
            date: "2023-04-12",
            description:
              "Lost my Dell laptop charger in the main library study area",
            imageUrl: "/placeholder-image.jpg",
            contactEmail: "student2@ukm.edu.my",
            matricNumber: "A165564",
          },
          {
            id: 3,
            title: "Lost Water Bottle",
            category: "Personal Items",
            location: "Cafeteria",
            date: "2023-04-15",
            description:
              "Lost my blue water bottle at the cafeteria during lunch time",
            imageUrl: "/placeholder-image.jpg",
            contactEmail: "student3@ukm.edu.my",
            matricNumber: "A165565",
          },
        ];

        setLostItems(mockLostItems);
      } catch (error) {
        console.error("Error fetching lost items:", error);
      }
    };

    fetchLostItems();
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

  const filteredItems = lostItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="lost-items-container">
      <h2>Lost Items</h2>
      <div className="filter-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search lost items..."
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
          <p>No lost items found matching your criteria.</p>
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

export default LostItems;
