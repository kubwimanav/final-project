import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Sample data for found items
const foundItemsData = [
  {
    id: 1,
    itemName: "Student ID Card",
    category: "Documents",
    location: "FTSM Building",
    dateFound: "2023-05-08",
    description: "Found at Computer Lab 3",
    foundBy: "John Doe",
    contact: "john@ukm.edu.my",
    image: "/api/placeholder/80/80",
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
    image: "/api/placeholder/80/80",
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
    image: "/api/placeholder/80/80",
  },
  {
    id: 4,
    itemName: "Textbook",
    category: "Books",
    location: "Lecture Hall A",
    dateFound: "2023-05-05",
    description: "Calculus textbook found under seat",
    foundBy: "Sarah Lee",
    contact: "sarah@ukm.edu.my",
    image: "/api/placeholder/80/80",
  },
  {
    id: 5,
    itemName: "Umbrella",
    category: "Personal Items",
    location: "Bus Stop",
    dateFound: "2023-05-04",
    description: "Black umbrella left at the bus stop",
    foundBy: "Ahmad Razali",
    contact: "ahmad@ukm.edu.my",
    image: "/api/placeholder/80/80",
  },
  {
    id: 6,
    itemName: "Prescription Glasses",
    category: "Personal Items",
    location: "Sports Complex",
    dateFound: "2023-05-03",
    description: "Found near basketball court",
    foundBy: "Mei Ling",
    contact: "mei@ukm.edu.my",
    image: "/api/placeholder/80/80",
  },
  {
    id: 7,
    itemName: "Calculator",
    category: "Electronics",
    location: "Engineering Building",
    dateFound: "2023-05-02",
    description: "Scientific calculator found in Room 201",
    foundBy: "David Wong",
    contact: "david@ukm.edu.my",
    image: "/api/placeholder/80/80",
  },
  {
    id: 8,
    itemName: "Wallet",
    category: "Personal Items",
    location: "Student Center",
    dateFound: "2023-05-01",
    description: "Brown leather wallet with ID inside",
    foundBy: "Aisha Rahman",
    contact: "aisha@ukm.edu.my",
    image: "/api/placeholder/80/80",
  },
  {
    id: 9,
    itemName: "USB Drive",
    category: "Electronics",
    location: "Computer Lab",
    dateFound: "2023-04-30",
    description: "16GB black USB drive",
    foundBy: "Lee Ming",
    contact: "lee@ukm.edu.my",
    image: "/api/placeholder/80/80",
  },
  {
    id: 10,
    itemName: "Notebook",
    category: "Stationery",
    location: "Library",
    dateFound: "2023-04-29",
    description: "Blue spiral notebook with math notes",
    foundBy: "Ali Hassan",
    contact: "ali@ukm.edu.my",
    image: "/api/placeholder/80/80",
  },
  {
    id: 11,
    itemName: "Earphones",
    category: "Electronics",
    location: "Student Lounge",
    dateFound: "2023-04-28",
    description: "White wireless earphones",
    foundBy: "Jessica Tan",
    contact: "jessica@ukm.edu.my",
    image: "/api/placeholder/80/80",
  },
  {
    id: 12,
    itemName: "Sweater",
    category: "Clothing",
    location: "Lecture Hall B",
    dateFound: "2023-04-27",
    description: "Gray university hoodie, size M",
    foundBy: "Raj Patel",
    contact: "raj@ukm.edu.my",
    image: "/api/placeholder/80/80",
  },
];

// Item Card component for mobile view
const ItemCard = ({ item, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow mb-4 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={item.image}
            alt={item.itemName}
            className="w-12 h-12 rounded-md object-cover mr-4"
          />
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              {item.itemName}
            </h3>
            <p className="text-xs text-gray-500">{item.category}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div>
          <p className="text-gray-500">Location:</p>
          <p className="font-medium">{item.location}</p>
        </div>
        <div>
          <p className="text-gray-500">Date Found:</p>
          <p className="font-medium">{item.dateFound}</p>
        </div>
        <div>
          <p className="text-gray-500">Found By:</p>
          <p className="font-medium">{item.foundBy}</p>
        </div>
        <div>
          <p className="text-gray-500">Contact:</p>
          <p className="font-medium truncate">{item.contact}</p>
        </div>
      </div>

      <div className="mt-2 text-xs">
        <p className="text-gray-500">Description:</p>
        <p className="font-medium text-gray-900">{item.description}</p>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => onEdit(item.id)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
        >
          <Edit size={16} />
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="p-2 text-red-600 hover:bg-red-50 rounded-full"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPageButtons = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  // Adjust start page if we're near the end
  if (endPage - startPage + 1 < maxPageButtons) {
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-between">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> of{" "}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            {startPage > 1 && (
              <>
                <button
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => onPageChange(1)}
                >
                  1
                </button>
                {startPage > 2 && (
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                )}
              </>
            )}

            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`relative inline-flex items-center px-4 py-2 border ${
                  number === currentPage
                    ? "border-blue-500 bg-blue-50 text-blue-600"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                } text-sm font-medium`}
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            ))}

            {endPage < totalPages && (
              <>
                {endPage < totalPages - 1 && (
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                )}
                <button
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => onPageChange(totalPages)}
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile pagination */}
      <div className="flex items-center justify-between sm:hidden">
        <button
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> of{" "}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <button
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Main component
export default function FoundItemsDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [filteredItems, setFilteredItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);

  // Filter items based on search term and category filter
  useEffect(() => {
    const filtered = foundItemsData.filter((item) => {
      const matchesSearch =
        item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" || item.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });

    setFilteredItems(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, categoryFilter]);

  // Calculate displayed items for current page
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setDisplayedItems(filteredItems.slice(indexOfFirstItem, indexOfLastItem));
  }, [filteredItems, currentPage, itemsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle delete confirmation
  const handleDeleteConfirmation = (itemId) => {
    setItemToDelete(itemId);
    setShowDeleteConfirm(true);
  };

  // Handle delete
  const handleDelete = () => {
    // In a real app, you would delete the item from the database here
    console.log("Deleting item:", itemToDelete);
    setShowDeleteConfirm(false);
    setItemToDelete(null);
  };

  // Handle edit
  const handleEdit = (itemId) => {
    // In a real app, you would navigate to the edit page or show an edit modal
    console.log("Editing item:", itemId);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Extract unique categories from data
  const categories = [
    "All",
    ...new Set(foundItemsData.map((item) => item.category)),
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Found Items Administration
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="py-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Action Buttons */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              {/* Search */}
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search items..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="relative w-full sm:w-40">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter size={16} className="text-gray-400" />
                </div>
                <select
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Items per page selector */}
              <div className="relative w-full sm:w-40">
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                >
                  <option value="5">5 per page</option>
                  <option value="10">10 per page</option>
                  <option value="15">15 per page</option>
                  <option value="20">20 per page</option>
                </select>
              </div>
            </div>

            {/* Add New Button */}
            <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Plus size={16} className="mr-2" />
              Add New Item
            </button>
          </div>

          {/* Table (desktop) */}
          <div className="hidden md:block bg-white shadow rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Item
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date Found
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Found By
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {displayedItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-md object-cover"
                              src={item.image}
                              alt={item.itemName}
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.dateFound}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.foundBy}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.contact}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(item.id)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteConfirmation(item.id)}
                            className="text-red-600 hover:text-red-900"
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

          {/* Cards (mobile) */}
          <div className="md:hidden space-y-4">
            {displayedItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onEdit={handleEdit}
                onDelete={handleDeleteConfirmation}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="bg-white shadow rounded-lg p-8 text-center">
              <p className="text-gray-500">
                No items found. Try adjusting your search or filter.
              </p>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-6">
            {filteredItems.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>

          {/* Results summary */}
          {filteredItems.length > 0 && (
            <div className="mt-2 text-sm text-gray-500">
              Showing{" "}
              {Math.min(
                (currentPage - 1) * itemsPerPage + 1,
                filteredItems.length
              )}{" "}
              to {Math.min(currentPage * itemsPerPage, filteredItems.length)} of{" "}
              {filteredItems.length} items
            </div>
          )}
        </div>
      </main>

      {/* Delete confirmation modal */}
      {showDeleteConfirm && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Trash2
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Delete Item
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this item? This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
