import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const { currentUser } = useAuth();

  const categories = [
    "All",
    "Electronics",
    "Books",
    "ID Cards",
    "Keys",
    "Bags",
    "Wallets",
    "Clothing",
    "Others",
  ];

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll use mock data
      const mockItems = [
        {
          id: "1",
          title: "Black Laptop",
          category: "Electronics",
          description: "HP Laptop found in the library",
          location: "Main Library",
          date: "2025-04-15",
          status: "found",
          image: "/laptop.jpg",
          userId: "user123",
          securityQuestion: "What sticker is on the laptop?",
        },
        {
          id: "2",
          title: "Student ID Card",
          category: "ID Cards",
          description: "ID Card under the name of Ahmad",
          location: "Faculty of Technology and Information Science",
          date: "2025-04-16",
          status: "found",
          image: "/id_card.jpg",
          userId: "user456",
          securityQuestion: "What is the matric number on the card?",
        },
        {
          id: "3",
          title: "Lost Calculator",
          category: "Electronics",
          description: "Scientific calculator lost in the engineering building",
          location: "Engineering Building",
          date: "2025-04-14",
          status: "lost",
          image: "/calculator.jpg",
          userId: currentUser.id,
          securityQuestion: "What is the brand of the calculator?",
        },
        {
          id: "4",
          title: "Blue Backpack",
          category: "Bags",
          description: "Blue Adidas backpack",
          location: "Cafeteria",
          date: "2025-04-17",
          status: "found",
          image: "/backpack.jpg",
          userId: "user789",
          securityQuestion: "What items are inside the backpack?",
        },
      ];

      setItems(mockItems);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching items:", error);
      setLoading(false);
    }
  };

  const filterItems = () => {
    let filteredItems = [...items];

    // Filter by lost/found status
    if (filter !== "all") {
      filteredItems = filteredItems.filter((item) => item.status === filter);
    }

    // Filter by category
    if (categoryFilter !== "all") {
      filteredItems = filteredItems.filter(
        (item) => item.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredItems = filteredItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.location.toLowerCase().includes(query)
      );
    }

    return filteredItems;
  };

  if (loading) {
    return <div className="text-center mt-8">Loading items...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Lost & Found Items</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="md:w-1/4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Status
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Items</option>
            <option value="lost">Lost Items</option>
            <option value="found">Found Items</option>
          </select>
        </div>

        <div className="md:w-1/4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Category
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value.toLowerCase())}
          >
            {categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="md:w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Items
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Search by title, description, or location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterItems().length > 0 ? (
          filterItems().map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow-md bg-white"
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={item.image || "/placeholder.jpg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold text-white rounded ${
                    item.status === "lost" ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {item.status.toUpperCase()}
                </span>
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Category:</strong> {item.category}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Location:</strong> {item.location}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Date:</strong>{" "}
                  {new Date(item.date).toLocaleDateString()}
                </p>
                <Link
                  to={`/items/${item.id}`}
                  className="block text-center mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            No items match your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsList;
