import { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Phone,
  Mail,
  Eye,
  CheckCircle,
  Info,
} from "lucide-react";

export default function UserLostItem() {
  // Mock data for lost items (in a real app, this would come from an API)
  const allItems = [
    {
      id: 1,
      name: "Wallet",
      location: "Main Lobby",
      date: "2025-05-10",
      status: "Unclaimed",
      description: "Brown leather wallet with ID cards inside",
      finder: {
        name: "John Doe",
        contact: "john.doe@example.com",
        phone: "555-123-4567",
      },
    },
    {
      id: 2,
      name: "iPhone 16",
      location: "Cafeteria",
      date: "2025-05-11",
      status: "Unclaimed",
      description: "Black iPhone with red case",
      finder: {
        name: "Sarah Wilson",
        contact: "s.wilson@example.com",
        phone: "555-987-6543",
      },
    },
    {
      id: 3,
      name: "Umbrella",
      location: "Entrance Hall",
      date: "2025-05-09",
      status: "Claimed",
      description: "Blue foldable umbrella",
      finder: {
        name: "Mike Chen",
        contact: "mike.c@example.com",
        phone: "555-333-7777",
      },
    },
    {
      id: 4,
      name: "Laptop Bag",
      location: "Conference Room B",
      date: "2025-05-08",
      status: "Unclaimed",
      description: "Black Dell laptop bag",
      finder: {
        name: "Lisa Johnson",
        contact: "ljohnson@example.com",
        phone: "555-444-5555",
      },
    },
    {
      id: 5,
      name: "Water Bottle",
      location: "Gym",
      date: "2025-05-11",
      status: "Unclaimed",
      description: "Metal water bottle with company logo",
      finder: {
        name: "Tom Brown",
        contact: "t.brown@example.com",
        phone: "555-222-3333",
      },
    },
    {
      id: 6,
      name: "Reading Glasses",
      location: "Library",
      date: "2025-05-07",
      status: "Unclaimed",
      description: "Tortoiseshell frame reading glasses",
      finder: {
        name: "Emma Davis",
        contact: "emma.d@example.com",
        phone: "555-888-9999",
      },
    },
    {
      id: 7,
      name: "Car Keys",
      location: "Parking Lot",
      date: "2025-05-10",
      status: "Claimed",
      description: "Toyota car keys with black fob",
      finder: {
        name: "Robert Wilson",
        contact: "rwilson@example.com",
        phone: "555-777-8888",
      },
    },
    {
      id: 8,
      name: "Notebook",
      location: "Study Room",
      date: "2025-05-09",
      status: "Unclaimed",
      description: "Red spiral notebook with math notes",
      finder: {
        name: "Jessica Park",
        contact: "j.park@example.com",
        phone: "555-111-2222",
      },
    },
    {
      id: 9,
      name: "Headphones",
      location: "Bus Stop",
      date: "2025-05-08",
      status: "Unclaimed",
      description: "White AirPods Pro with case",
      finder: {
        name: "David Martinez",
        contact: "d.martinez@example.com",
        phone: "555-666-7777",
      },
    },
    {
      id: 10,
      name: "Scarf",
      location: "Coat Rack",
      date: "2025-05-07",
      status: "Claimed",
      description: "Blue wool scarf with fringe",
      finder: {
        name: "Grace Kim",
        contact: "g.kim@example.com",
        phone: "555-222-1111",
      },
    },
    {
      id: 11,
      name: "Tablet",
      location: "Meeting Room",
      date: "2025-05-06",
      status: "Unclaimed",
      description: "iPad Air with green cover",
      finder: {
        name: "Alex Johnson",
        contact: "ajohnson@example.com",
        phone: "555-333-4444",
      },
    },
    {
      id: 12,
      name: "Credit Card",
      location: "Reception",
      date: "2025-05-11",
      status: "Unclaimed",
      description: 'Visa card under name "John Smith"',
      finder: {
        name: "Rachel Lee",
        contact: "r.lee@example.com",
        phone: "555-999-8888",
      },
    },
    {
      id: 13,
      name: "Lunch Box",
      location: "Cafeteria",
      date: "2025-05-10",
      status: "Claimed",
      description: "Blue plastic lunch container",
      finder: {
        name: "Kevin Wong",
        contact: "k.wong@example.com",
        phone: "555-444-3333",
      },
    },
    {
      id: 14,
      name: "Sunglasses",
      location: "Garden",
      date: "2025-05-09",
      status: "Unclaimed",
      description: "Ray-Ban aviator sunglasses",
      finder: {
        name: "Maria Garcia",
        contact: "mgarcia@example.com",
        phone: "555-111-7777",
      },
    },
    {
      id: 15,
      name: "USB Drive",
      location: "Computer Lab",
      date: "2025-05-08",
      status: "Unclaimed",
      description: "32GB Kingston flash drive",
      finder: {
        name: "James Wilson",
        contact: "jwilson@example.com",
        phone: "555-222-6666",
      },
    },
    {
      id: 16,
      name: "Watch",
      location: "Changing Room",
      date: "2025-05-07",
      status: "Unclaimed",
      description: "Silver Casio digital watch",
      finder: {
        name: "Patricia Lopez",
        contact: "plopez@example.com",
        phone: "555-888-1111",
      },
    },
    {
      id: 17,
      name: "Textbook",
      location: "Study Area",
      date: "2025-05-06",
      status: "Claimed",
      description: "Biology 101 textbook",
      finder: {
        name: "Daniel Kim",
        contact: "dkim@example.com",
        phone: "555-777-2222",
      },
    },
    {
      id: 18,
      name: "Gloves",
      location: "Lost and Found Box",
      date: "2025-05-05",
      status: "Unclaimed",
      description: "Black leather gloves, size M",
      finder: {
        name: "Michelle Thomas",
        contact: "mthomas@example.com",
        phone: "555-333-5555",
      },
    },
    {
      id: 19,
      name: "Camera",
      location: "Auditorium",
      date: "2025-05-04",
      status: "Unclaimed",
      description: "Canon DSLR with lens cap",
      finder: {
        name: "Brian Clark",
        contact: "b.clark@example.com",
        phone: "555-444-7777",
      },
    },
    {
      id: 20,
      name: "Necklace",
      location: "Bathroom",
      date: "2025-05-03",
      status: "Claimed",
      description: "Gold chain with heart pendant",
      finder: {
        name: "Sophie Wang",
        contact: "swang@example.com",
        phone: "555-999-1111",
      },
    },
    {
      id: 21,
      name: "ID Card",
      location: "Security Desk",
      date: "2025-05-10",
      status: "Unclaimed",
      description: "University ID card for Sarah Johnson",
      finder: {
        name: "Mark Rodriguez",
        contact: "mrodriguez@example.com",
        phone: "555-222-8888",
      },
    },
    {
      id: 22,
      name: "Jacket",
      location: "Coat Check",
      date: "2025-05-09",
      status: "Unclaimed",
      description: "Navy blue windbreaker, size L",
      finder: {
        name: "Laura Miller",
        contact: "lmiller@example.com",
        phone: "555-666-3333",
      },
    },
    {
      id: 23,
      name: "Pen Set",
      location: "Conference Room",
      date: "2025-05-08",
      status: "Unclaimed",
      description: "Mont Blanc pen set in case",
      finder: {
        name: "Chris Taylor",
        contact: "ctaylor@example.com",
        phone: "555-111-4444",
      },
    },
    {
      id: 24,
      name: "Earbuds",
      location: "Gym",
      date: "2025-05-07",
      status: "Claimed",
      description: "Wireless earbuds in charging case",
      finder: {
        name: "Nicole Adams",
        contact: "nadams@example.com",
        phone: "555-333-2222",
      },
    },
    {
      id: 25,
      name: "Baseball Cap",
      location: "Sports Field",
      date: "2025-05-06",
      status: "Unclaimed",
      description: "Red baseball cap with team logo",
      finder: {
        name: "Ryan Johnson",
        contact: "rjohnson@example.com",
        phone: "555-888-4444",
      },
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [expandedItemId, setExpandedItemId] = useState(null);

  const statuses = ["All", "Claimed", "Unclaimed"];

  // Filter items based on search term and filters
  const filteredItems = allItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.finder.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Pagination handlers
  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(1, prev - 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  const goToLastPage = () => setCurrentPage(totalPages);

  // Toggle expanded item
  const toggleItemExpansion = (id) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-3 sm:p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
        Lost Items Dashboard
      </h1>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search items, locations, or finders..."
            className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>

        <div className="flex flex-row gap-2 sm:gap-4">
          <select
            className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1); // Reset to first page on filter change
            }}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <select
            className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page when changing items per page
            }}
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={15}>15 per page</option>
          </select>
        </div>
      </div>

      {/* Mobile view - Cards */}
      <div className="sm:hidden space-y-4">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-4 bg-gray-50 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full
                  ${
                    item.status === "Claimed"
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> {item.location}
                </p>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700">
                    Finder Information
                  </p>
                  <p className="text-sm text-gray-600">{item.finder.name}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <Mail size={14} className="mr-1" /> {item.finder.contact}
                  </div>
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <Phone size={14} className="mr-1" /> {item.finder.phone}
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
                    title="View Details"
                  >
                    <Eye size={20} />
                  </button>
                  {item.status === "Unclaimed" && (
                    <button
                      className="p-2 ml-2 text-green-500 hover:text-green-700 hover:bg-green-50 rounded-full transition-colors"
                      title="Claim Item"
                    >
                      <CheckCircle size={20} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-6 text-center text-gray-500">
            No items found matching your search criteria
          </div>
        )}
      </div>

      {/* Desktop view - Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                Item
              </th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                Location
              </th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                Date Found
              </th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                Status
              </th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                Finder
              </th>
              <th className="py-3 px-4 text-center font-semibold text-gray-700 border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <>
                  <tr
                    key={item.id}
                    className={`hover:bg-gray-50 border-b cursor-pointer ${
                      expandedItemId === item.id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => toggleItemExpansion(item.id)}
                  >
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-gray-800">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-700">{item.location}</td>
                    <td className="py-3 px-4 text-gray-700">{item.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${
                          item.status === "Claimed"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {item.finder.name}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex justify-center space-x-2">
                        <button
                          className="p-1 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleItemExpansion(item.id);
                          }}
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        {item.status === "Unclaimed" && (
                          <button
                            className="p-1 text-green-500 hover:text-green-700 hover:bg-green-50 rounded-full transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            title="Claim Item"
                          >
                            <CheckCircle size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                  {expandedItemId === item.id && (
                    <tr>
                      <td colSpan="6" className="bg-gray-50 p-4 border-b">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">
                              Item Details
                            </h4>
                            <p className="text-sm text-gray-600 mb-1">
                              <strong>Name:</strong> {item.name}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                              <strong>Description:</strong> {item.description}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                              <strong>Location Found:</strong> {item.location}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                              <strong>Date Found:</strong> {item.date}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                              <strong>Status:</strong>
                              <span
                                className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                ${
                                  item.status === "Claimed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-orange-100 text-orange-800"
                                }`}
                              >
                                {item.status}
                              </span>
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">
                              Finder Information
                            </h4>
                            <p className="text-sm text-gray-600 mb-1">
                              <strong>Name:</strong> {item.finder.name}
                            </p>
                            <div className="flex items-center mb-1">
                              <Mail size={16} className="mr-2 text-gray-500" />
                              <p className="text-sm text-gray-600">
                                <strong>Email:</strong> {item.finder.contact}
                              </p>
                            </div>
                            <div className="flex items-center mb-1">
                              <Phone size={16} className="mr-2 text-gray-500" />
                              <p className="text-sm text-gray-600">
                                <strong>Phone:</strong> {item.finder.phone}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-6 text-center text-gray-500">
                  No items found matching your search criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white pt-3 mt-4">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-3 py-2 text-sm font-medium rounded-md
              ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
              }`}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`relative ml-3 inline-flex items-center px-3 py-2 text-sm font-medium rounded-md
              ${
                currentPage === totalPages || totalPages === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
              }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {filteredItems.length > 0 ? indexOfFirstItem + 1 : 0}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(indexOfLastItem, filteredItems.length)}
              </span>{" "}
              of <span className="font-medium">{filteredItems.length}</span>{" "}
              results
            </p>
          </div>

          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={goToFirstPage}
                disabled={currentPage === 1 || totalPages === 0}
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md text-gray-400
                  ${
                    currentPage === 1 || totalPages === 0
                      ? "bg-gray-100 cursor-not-allowed"
                      : "bg-white hover:bg-gray-50 border border-gray-300"
                  }`}
                title="First Page"
              >
                <ChevronsLeft size={18} />
              </button>
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1 || totalPages === 0}
                className={`relative inline-flex items-center px-2 py-2 text-gray-400
                  ${
                    currentPage === 1 || totalPages === 0
                      ? "bg-gray-100 cursor-not-allowed"
                      : "bg-white hover:bg-gray-50 border border-gray-300"
                  }`}
                title="Previous Page"
              >
                <ChevronLeft size={18} />
              </button>

              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-white border border-gray-300">
                Page {totalPages > 0 ? currentPage : 0} of {totalPages}
              </span>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`relative inline-flex items-center px-2 py-2 text-gray-400
                  ${
                    currentPage === totalPages || totalPages === 0
                      ? "bg-gray-100 cursor-not-allowed"
                      : "bg-white hover:bg-gray-50 border border-gray-300"
                  }`}
                title="Next Page"
              >
                <ChevronRight size={18} />
              </button>
              <button
                onClick={goToLastPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md text-gray-400
                  ${
                    currentPage === totalPages || totalPages === 0
                      ? "bg-gray-100 cursor-not-allowed"
                      : "bg-white hover:bg-gray-50 border border-gray-300"
                  }`}
                title="Last Page"
              >
                <ChevronsRight size={18} />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
