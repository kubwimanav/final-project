import React, { useEffect, useState } from "react";
import axios from "axios";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const LostItems = () => {
  const [lostItems, setLostItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/lostItems");
        setLostItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lost items:", error);
        setLoading(false);
      }
    };

    fetchLostItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-[#003366] mb-10">
        Lost Items
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading lost items...</p>
      ) : lostItems.length === 0 ? (
        <p className="text-center text-gray-500">No lost items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {lostItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.itemImage}
                alt={item.itemName}
                className="w-full h-48 object-cover object-center rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.itemName}
                </h3>
                <p className="text-sm text-gray-500">
                  Reported on: {formatDate(item.date)}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Owner: {item.ownerName}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Location: {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LostItems;
