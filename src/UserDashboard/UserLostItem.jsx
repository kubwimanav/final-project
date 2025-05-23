import { useState } from "react";
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Edit,
  Trash2,
} from "lucide-react";

export default function UserLostItem() {
  // Mock data for lost items (in a real app, this would come from an API)
  const allItems = [
    {
      id: 1,
      itemName: "Silver Watch",
      category: "Documents",
      location: "FTSM Building",
      dateFound: "2023-05-08",
      description: "Found at Computer Lab 3",
      foundBy: "John Doe",
      contact: "john@ukm.edu.my",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop&crop=center",
    },
    {
      id: 2,
      itemName: "Laptop Charger",
      category: "Electronics",
      location: "Library",
      dateFound: "2023-05-07",
      description: "Found at Study Table B4",
      foundBy: "Jane Smith",
      contact: "jane@ukm.edu.my",
      image:
        "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=100&h=100&fit=crop&crop=center",
    },
    {
      id: 3,
      itemName: "Water Bottle",
      category: "Personal Items",
      location: "Cafeteria",
      dateFound: "2023-05-06",
      description: "Blue colored bottle found on table",
      foundBy: "Mike Johnson",
      contact: "mike@ukm.edu.my",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=100&h=100&fit=crop&crop=center",
    },
    {
      id: 4,
      itemName: "Laptop",
      category: "Books",
      location: "Lecture Hall A",
      dateFound: "2023-05-05",
      description: "Calculus textbook found under seat",
      foundBy: "Sarah Lee",
      contact: "sarah@ukm.edu.my",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop&crop=center",
    },
    {
      id: 5,
      itemName: "Car Key",
      category: "Personal Items",
      location: "Bus Stop",
      dateFound: "2023-05-04",
      description: "Black umbrella left at the bus stop",
      foundBy: "Ahmad Razali",
      contact: "ahmad@ukm.edu.my",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center",
    },
    {
      id: 6,
      itemName: "iPhone 17 Pro",
      category: "Personal Items",
      location: "Sports Complex",
      dateFound: "2023-05-03",
      description: "Found near basketball court",
      foundBy: "Mei Ling",
      contact: "mei@ukm.edu.my",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop&crop=center",
    },
    {
      id: 7,
      itemName: "Blue Backpack",
      category: "Electronics",
      location: "Engineering Building",
      dateFound: "2023-05-02",
      description: "Scientific calculator found in Room 201",
      foundBy: "David Wong",
      contact: "david@ukm.edu.my",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItemId, setExpandedItemId] = useState(null);

  // Filter items based on search term
  const filteredItems = allItems.filter((item) => {
    const matchesSearch =
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.foundBy.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
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

  // Action handlers
  const handleEdit = (itemId) => {
    console.log("Edit item:", itemId);
    // Add your edit logic here
  };

  const handleDelete = (itemId) => {
    console.log("Delete item:", itemId);
    // Add your delete logic here
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-2">
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
          <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus size={16} className="mr-2" />
            Add Lost Item
          </button>
        </div>
      </div>

      {/* Desktop view - Table */}
      <div className="hidden lg:block">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Item
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date Lost
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Lost By
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-md object-cover"
                          src={item.image}
                          alt={item.itemName}
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiAxNkMyMC40MTgzIDE2IDI0IDE5LjU4MTcgMjQgMjRDMjQgMjguNDE4MyAyMC40MTgzIDMyIDE2IDMyQzExLjU4MTcgMzIgOCAyOC40MTgzIDggMjRDOCAxOS41ODE3IDExLjU4MTcgMTYgMTYgMTZaIiBmaWxsPSIjOUM5Qzk3Ii8+CjxwYXRoIGQ9Ik0yMS4zMzMzIDIxLjMzMzNWMjIuNjY2N0gyMi42NjY3VjI0SDIxLjMzMzNWMjUuMzMzM0gyMFYyNEgxOC42NjY3VjIyLjY2NjdIMjBWMjEuMzMzM0gyMS4zMzMzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+";
                          }}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.itemName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900 max-w-xs">
                      {item.description}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.location}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {item.dateFound}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.foundBy}</div>
                    <div className="text-sm text-gray-500">{item.contact}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50 transition-colors"
                        title="Edit item"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-800 p-1 rounded-md hover:bg-red-50 transition-colors"
                        title="Delete item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tablet view - Cards */}
      <div className="hidden sm:block lg:hidden">
        <div className="grid gap-4">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <img
                        className="h-16 w-16 rounded-md object-cover"
                        src={item.image}
                        alt={item.itemName}
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNiAyNkMzNC44MzY2IDI2IDQyIDMzLjE2MzQgNDIgNDJDNDIgNTAuODM2NiAzNC44MzY2IDU4IDI2IDU4QzE3LjE2MzQgNTggMTAgNTAuODM2NiAxMCA0MkMxMCAzMy4xNjM0IDE3LjE2MzQgMjYgMjYgMjZaIiBmaWxsPSIjOUM5Qzk3Ii8+CjxwYXRoIGQ9Ik0zNC4xMzMzIDM0LjEzMzNWMzYuMjY2N0gzNi4yNjY3VjM4LjRIMzQuMTMzM1Y0MC41MzMzSDMzLjA2NjdWMzguNEgzMC40VjM2LjI2NjdIMzMuMDY2N1YzNC4xMzMzSDM0LjEzMzNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=";
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {item.itemName}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.category}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 ml-2">
                          {item.dateFound}
                        </p>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        {item.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Location:</span>
                          <p className="text-gray-900">{item.location}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Found by:</span>
                          <p className="text-gray-900">{item.foundBy}</p>
                          <p className="text-gray-500 text-xs">
                            {item.contact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 ml-4">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="text-blue-600 hover:text-blue-800 p-2 rounded-md hover:bg-blue-50 transition-colors"
                      title="Edit item"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800 p-2 rounded-md hover:bg-red-50 transition-colors"
                      title="Delete item"
                    >
                      <Trash2 size={18} />
                    </button>
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
      </div>

      {/* Mobile Card Layout */}
      <div className="sm:hidden">
        <div className="divide-y divide-gray-200">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div key={item.id} className="p-3 hover:bg-gray-50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-md object-cover"
                      src={item.image}
                      alt={item.itemName}
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xOSAxOUMyNi4xODA2IDE5IDMyIDI0LjgxOTQgMzIgMzJDMzIgMzkuMTgwNiAyNi4xODA2IDQ1IDE5IDQ1QzExLjgxOTQgNDUgNiAzOS4xODA2IDYgMzJDNiAyNC44MTk0IDExLjgxOTQgMTkgMTkgMTlaIiBmaWxsPSIjOUM5Qzk3Ii8+CjxwYXRoIGQ9Ik0yNS42IDI1LjZWMjcuMkgyNy4yVjI4LjhIMjUuNlYzMC40SDI0LjhWMjguOEgyMi44VjI3LjJIMjQuOFYyNS42SDI1LjZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-2">
                        <p className="text-sm font-medium text-gray-900">
                          {item.itemName}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.category}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="text-blue-600 hover:text-blue-800 p-1.5 rounded-md hover:bg-blue-50 transition-colors"
                          title="Edit item"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-800 p-1.5 rounded-md hover:bg-red-50 transition-colors"
                          title="Delete item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-gray-700">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-2 flex flex-col space-y-1 text-xs text-gray-500">
                      <div className="flex justify-between">
                        <span>📍 {item.location}</span>
                        <span>{item.dateFound}</span>
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium">
                          {item.foundBy}
                        </span>
                        <span className="ml-2">{item.contact}</span>
                      </div>
                    </div>
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
