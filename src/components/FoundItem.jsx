import { useState } from "react";
import comput from "../assets/image1.jpg";

const ReportItemForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemDescription: "",
    dateFound: "",
    location: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      itemName: "",
      itemDescription: "",
      dateFound: "",
      location: "",
      contactInfo: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="bg-[#003366] text-white p-4">
          <h2 className="text-xl font-bold">Report Found Item</h2>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="itemName"
            >
              Item Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="itemName"
              name="itemName"
              type="text"
              value={formData.itemName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="itemDescription"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="itemDescription"
              name="itemDescription"
              rows="3"
              value={formData.itemDescription}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dateFound"
            >
              Date Found
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateFound"
              name="dateFound"
              type="date"
              value={formData.dateFound}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contactInfo"
            >
              Contact Information
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contactInfo"
              name="contactInfo"
              type="text"
              value={formData.contactInfo}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-[#003366] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Submit Report
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FoundItem() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const lostItems = [
    {
      id: 1,
      title: "Blue Backpack",
      date: "April 23, 2025",
      status: "Unclaimed",
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 2,
      title: "iPhone 17 Pro",
      date: "April 25, 2025",
      status: "Unclaimed",
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 3,
      title: "Car Keys",
      date: "April 22, 2025",
      status: "Unclaimed",
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 4,
      title: "Reading Glasses",
      date: "April 20, 2025",
      status: "Unclaimed",
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 5,
      title: "Silver Watch",
      date: "April 19, 2025",
      status: "Unclaimed",
      imageUrl: "/api/placeholder/400/320",
    },
    {
      id: 6,
      title: "Wallet",
      date: "April 24, 2025",
      status: "Unclaimed",
      imageUrl: "/api/placeholder/400/320",
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
    <div className="font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] bg-[#f5f5f5] w-full min-h-screen m-0 overflow-x-hidden pb-12">
      {/* Header Section with Wave */}
      <header
        className="relative pt-16 pb-24 px-5 bg-[#003366] bg-opacity-85 bg-cover bg-center text-center text-white mb-16"
        style={{
          background: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(${comput})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-3">Found Items</h1>
          <p className="font-light text-lg max-w-lg mx-auto">
            Found something? Lost something? We're here to help reconnect people
            with their belongings.
          </p>
          <button
            className="mt-6 bg-white text-[#003366] border-none py-2 px-5 rounded-lg font-semibold text-base cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
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
              fill="#f5f5f5"
            ></path>
          </svg>
        </div>
      </header>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[90%] mx-auto">
        {lostItems.map((item) => (
          <div
            key={item.id}
            className="relative h-64 w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-[#242446] bg-opacity-85 text-white z-10 flex flex-col justify-end">
              <div className="p-4 mt-auto">
                <h3 className="text-lg font-semibold mb-2 text-center text-shadow">
                  {item.title}
                </h3>
                <div className="flex justify-center mb-3">
                  <span className="italic opacity-90 text-xs">
                    Found on {item.date}
                  </span>
                </div>
                <div className="flex justify-center w-full">
                  <button className="bg-white text-gray-800 border-none py-1.5 px-7 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-200 shadow-md hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Report Item Form Modal */}
      <ReportItemForm
        isOpen={isReportModalOpen}
        onClose={closeReportModal}
        onSubmit={handleReportSubmit}
      />
    </div>
  );
}
