import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  PenLine,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Filter,
} from "lucide-react";

export default function FoundItemsAdmin() {
  // Sample data for the found items
  const [foundItems, setFoundItems] = useState([
    {
      id: 1,
      photo: "/api/placeholder/80/80",
      name: "Apple Watch Series 7",
      foundPhoneNumber: "+1 (555) 123-4567",
      foundEmail: "john.doe@example.com",
      category: "Electronics",
      dateFound: "2025-05-07",
      description:
        "Found in the university library, second floor near the study area.",
    },
    {
      id: 2,
      photo: "/api/placeholder/80/80",
      name: "Blue Leather Wallet",
      foundPhoneNumber: "+1 (555) 987-6543",
      foundEmail: "jane.smith@example.com",
      category: "Personal Items",
      dateFound: "2025-05-06",
      description: "Found at the cafeteria near the entrance.",
    },
    {
      id: 3,
      photo: "/api/placeholder/80/80",
      name: "Car Keys (Toyota)",
      foundPhoneNumber: "+1 (555) 234-5678",
      foundEmail: "robert.johnson@example.com",
      category: "Keys",
      dateFound: "2025-05-05",
      description: "Found in the parking lot, section B.",
    },
    {
      id: 4,
      photo: "/api/placeholder/80/80",
      name: "MacBook Pro 16-inch",
      foundPhoneNumber: "+1 (555) 345-6789",
      foundEmail: "emily.wilson@example.com",
      category: "Electronics",
      dateFound: "2025-05-04",
      description: "Found in room 302, left under the desk.",
    },
    {
      id: 5,
      photo: "/api/placeholder/80/80",
      name: "Student ID Card",
      foundPhoneNumber: "+1 (555) 456-7890",
      foundEmail: "michael.brown@example.com",
      category: "IDs & Cards",
      dateFound: "2025-05-03",
      description: "Found near the entrance of the science building.",
    },
  ]);

  // State for search and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("dateFound");
  const [sortDirection, setSortDirection] = useState("desc");

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // State for expanded items
  const [expandedItemId, setExpandedItemId] = useState(null);

  // State for filter dropdown
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(foundItems.map((item) => item.category)),
  ];

  // Toggle expanded item in card view
  const toggleExpandItem = (id) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  // Handle sort change
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Handle category filter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category === "All" ? "" : category);
    setCurrentPage(1);
    setShowFilterDropdown(false);
  };

  // Handle item deletion
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setFoundItems(foundItems.filter((item) => item.id !== id));
    }
  };

  // Filter and sort items
  const filteredItems = foundItems.filter(
    (item) =>
      (selectedCategory === "" || item.category === selectedCategory) &&
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-6 max-w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Found Items Management
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          Manage and track all found items in the system
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search items..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          {/* Sort dropdown */}
          <div className="relative inline-block w-full sm:w-auto">
            <button
              className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              <Filter className="h-4 w-4 mr-2" />
              <span>{selectedCategory || "All Categories"}</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>

            {showFilterDropdown && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        selectedCategory === category ||
                        (category === "All" && selectedCategory === "")
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-sm md:text-base whitespace-nowrap">
            <span className="text-gray-600">Total: {filteredItems.length}</span>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="h-14 w-14 rounded-full mr-3 object-cover border border-gray-200"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      {new Date(item.dateFound).toLocaleDateString()}
                    </div>
                    <span className="mt-1 px-2 text-xs inline-flex leading-4 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleExpandItem(item.id)}
                  className="ml-2 p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  aria-label={
                    expandedItemId === item.id ? "Collapse" : "Expand"
                  }
                >
                  {expandedItemId === item.id ? (
                    <X className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Menu className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>

              {expandedItemId === item.id && (
                <div className="border-t border-gray-200 px-4 py-4 bg-gray-50">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-500">Phone:</span>
                      <span className="ml-2 text-gray-900">
                        {item.foundPhoneNumber}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-500">Email:</span>
                      <span className="ml-2 text-gray-900 break-all">
                        {item.foundEmail}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-500">
                        Description:
                      </span>
                      <p className="mt-1 text-gray-900">{item.description}</p>
                    </div>
                    <div className="flex justify-end space-x-2 mt-2">
                      <button
                        className="flex items-center px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors duration-200"
                        aria-label="Edit item"
                      >
                        <PenLine className="h-4 w-4 mr-1" /> Edit
                      </button>
                      <button
                        className="flex items-center px-3 py-1.5 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors duration-200"
                        onClick={() => handleDelete(item.id)}
                        aria-label="Delete item"
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {currentItems.length === 0 && (
            <div className="col-span-full px-4 py-12 text-center text-gray-500 bg-gray-50 rounded-lg">
              <div className="font-medium text-lg mb-2">No items found</div>
              <p>
                Try adjusting your search or filter to find what you're looking
                for
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 px-4 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200">
            <div className="flex items-center mb-4 sm:mb-0">
              <p className="text-sm text-gray-700">
                Showing page <span className="font-medium">{currentPage}</span>{" "}
                of <span className="font-medium">{totalPages}</span>
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                } transition-colors duration-200`}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Previous</span>
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                } transition-colors duration-200`}
                aria-label="Next page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
