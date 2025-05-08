import comput from "../assets/image1.jpg";
import keyboard from "../assets/keyboard.jpg";
import ReportItemForm from "./ReportLostItemForm";
import { useState } from "react";

export default function FoundItem() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const lostItems = [
    {
      id: 1,
      category: "BACKPACK",
      title: "BLUE BACKPACK",
      description: "Found on April 23, 2025 at the main entrance",
      imageUrl: keyboard,
    },
    {
      id: 2,
      category: "ELECTRONICS",
      title: "IPHONE 17 PRO",
      description: "Found on April 25, 2025 in the library",
      imageUrl: "/api/placeholder/600/400",
    },
    {
      id: 3,
      category: "ACCESSORIES",
      title: "CAR KEYS",
      description: "Found on April 22, 2025 in parking lot B",
      imageUrl: "/api/placeholder/600/400",
    },
    {
      id: 4,
      category: "ACCESSORIES",
      title: "READING GLASSES",
      description: "Found on April 20, 2025 in classroom 302",
      imageUrl: "/api/placeholder/600/400",
    },
    {
      id: 5,
      category: "ACCESSORIES",
      title: "SILVER WATCH",
      description: "Found on April 19, 2025 near the cafeteria",
      imageUrl: "/api/placeholder/600/400",
    },
    {
      id: 6,
      category: "PERSONAL",
      title: "BLACK WALLET",
      description: "Found on April 24, 2025 in the gym",
      imageUrl: "/api/placeholder/600/400",
    },
  ];

  const openReportModal = () => {
    setIsReportModalOpen(true);
  };

  const closeReportModal = () => {
    setIsReportModalOpen(false);
  };

  const handleReportSubmit = (formData) => {
    console.log("Report submitted:", formData);
    closeReportModal();
    alert("Your lost item report has been submitted successfully!");
  };

  return (
    <div className="font-sans bg-gray-100 w-full min-h-screen m-0 overflow-x-hidden pb-12">
      {/* Header Section with Gradient Background */}
      <header
        className="relative pt-16 pb-24 px-5 bg-[#003366] bg-opacity-85 bg-cover bg-center text-center text-white mb-16"
        style={{
          background: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(${comput})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-3">Lost Items</h1>
          <p className="font-light text-lg max-w-lg mx-auto">
            Found something? Lost something? We're here to help reconnect people
            with their belongings.
          </p>
          <button
            className="mt-6 bg-white text-blue-900 py-2 px-5 rounded-lg font-semibold text-base cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
            onClick={openReportModal}
          >
            Report Lost Item
          </button>
        </div>

        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#f1f5f9"
            ></path>
          </svg>
        </div>
      </header>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {lostItems.map((item) => (
          <div
            key={item.id}
            className="relative h-72 sm:h-64 md:h-80 overflow-hidden rounded-lg shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl group"
          >
            {/* Image with proper aspect ratio */}
            <div className="absolute inset-0">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Dark overlay gradient from bottom to top */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
              <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                <p className="text-sm font-medium text-blue-300 mb-1 uppercase tracking-wider">
                  {item.category}
                </p>
                <h3 className="text-2xl font-bold mb-1 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for ReportItemForm Modal */}
      <ReportItemForm
        isOpen={isReportModalOpen}
        onClose={closeReportModal}
        onSubmit={handleReportSubmit}
      />
    </div>
  );
}
