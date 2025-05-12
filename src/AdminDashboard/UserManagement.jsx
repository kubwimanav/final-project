import { useState } from "react";
import { Trash2, ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function UserManagement() {
  // Sample user data - in a real app, this would come from an API
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "+1 (555) 123-4567",
      initials: "J",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phoneNumber: "+1 (555) 987-6543",
      initials: "J",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.j@example.com",
      phoneNumber: "+1 (555) 234-5678",
      initials: "R",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      phoneNumber: "+1 (555) 345-6789",
      initials: "S",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.b@example.com",
      phoneNumber: "+1 (555) 456-7890",
      initials: "M",
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily.d@example.com",
      phoneNumber: "+1 (555) 567-8901",
      initials: "E",
    },
    {
      id: 7,
      name: "David Miller",
      email: "david.m@example.com",
      phoneNumber: "+1 (555) 678-9012",
      initials: "D",
    },
    {
      id: 8,
      name: "Lisa Wilson",
      email: "lisa.w@example.com",
      phoneNumber: "+1 (555) 789-0123",
      initials: "L",
    },
    {
      id: 9,
      name: "Kevin Jones",
      email: "kevin.j@example.com",
      phoneNumber: "+1 (555) 890-1234",
      initials: "K",
    },
    {
      id: 10,
      name: "Amanda Taylor",
      email: "amanda.t@example.com",
      phoneNumber: "+1 (555) 901-2345",
      initials: "A",
    },
    {
      id: 11,
      name: "Brian Clark",
      email: "brian.c@example.com",
      phoneNumber: "+1 (555) 012-3456",
      initials: "B",
    },
    {
      id: 12,
      name: "Nicole Lewis",
      email: "nicole.l@example.com",
      phoneNumber: "+1 (555) 123-4567",
      initials: "N",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 3;

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phoneNumber.includes(searchTerm)
  );

  // Delete user handler
  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  // Pagination logic
  const totalFilteredUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalFilteredUsers / usersPerPage);

  // Ensure current page is valid after filtering/deletion
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages);
  }

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Calculate visible page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 4;

    if (totalPages <= maxPagesToShow) {
      // If we have fewer pages than max, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include page 1
      pageNumbers.push(1);

      // Calculate start and end of middle pages
      let middleStart = Math.max(2, currentPage - 1);
      let middleEnd = Math.min(currentPage + 1, totalPages - 1);

      // Adjust if we're at the start
      if (currentPage <= 2) {
        middleEnd = 3;
      }

      // Adjust if we're at the end
      if (currentPage >= totalPages - 1) {
        middleStart = totalPages - 2;
      }

      // Add ellipsis after page 1 if needed
      if (middleStart > 2) {
        pageNumbers.push("...");
      }

      // Add middle pages
      for (let i = middleStart; i <= middleEnd; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis before last page if needed
      if (middleEnd < totalPages - 1) {
        pageNumbers.push("...");
      }

      // Always include the last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="w-full px-2 sm:px-4 py-4 sm:py-8 mx-auto max-w-7xl">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        User Management
      </h1>

      {/* Search and controls */}
      <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2 sm:gap-4">
        <div className="relative w-full md:w-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search users..."
            className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full md:w-auto text-sm">
          Add New User
        </button>
      </div>

      {/* Show message when no results */}
      {currentUsers.length === 0 && (
        <div className="text-center py-6 sm:py-8 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-sm sm:text-base">
            {filteredUsers.length === 0
              ? "No users found matching your search."
              : "No users available."}
          </p>
        </div>
      )}

      {/* Responsive container with scrolling */}
      {currentUsers.length > 0 && (
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="px-2 sm:px-4 py-2 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-3 sm:py-4 whitespace-nowrap">
                    <div className="text-xs sm:text-sm text-gray-900">
                      {user.id}
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-2 sm:mr-3 text-xs sm:text-sm">
                        {user.initials}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-900">
                        <div className="truncate max-w-24 sm:max-w-none">
                          {user.name}
                        </div>
                        <div className="md:hidden text-xs text-gray-500 mt-1 truncate max-w-24 sm:max-w-none">
                          {user.email}
                        </div>
                        <div className="lg:hidden text-xs text-gray-500 mt-1 md:block truncate max-w-24 sm:max-w-none">
                          {user.phoneNumber}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 whitespace-nowrap hidden md:table-cell">
                    <div className="text-xs sm:text-sm text-gray-500">
                      {user.email}
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden lg:table-cell">
                    {user.phoneNumber}
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-800"
                      aria-label="Delete user"
                    >
                      <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination - only show if we have users */}
      {filteredUsers.length > 0 && (
        <div className="bg-white px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-t border-gray-200 mt-4 rounded-lg shadow-sm">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">{indexOfFirstUser + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastUser, totalFilteredUsers)}
                </span>{" "}
                of <span className="font-medium">{totalFilteredUsers}</span>{" "}
                results
              </p>
            </div>
            <div className="flex space-x-1">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-1 sm:px-2 py-1 sm:py-2 rounded-md border ${
                  currentPage === 1
                    ? "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed"
                    : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {totalPages > 0 &&
                getPageNumbers().map((page, index) =>
                  page === "..." ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-700"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={`page-${page}`}
                      onClick={() => goToPage(page)}
                      className={`relative inline-flex items-center px-2 sm:px-4 py-1 sm:py-2 border ${
                        currentPage === page
                          ? "bg-blue-500 text-white border-blue-500"
                          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                      } text-xs sm:text-sm font-medium rounded-md`}
                    >
                      {page}
                    </button>
                  )
                )}

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`relative inline-flex items-center px-1 sm:px-2 py-1 sm:py-2 rounded-md border ${
                  currentPage === totalPages || totalPages === 0
                    ? "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed"
                    : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Mobile pagination - improved for tiny screens */}
          <div className="flex flex-1 justify-between items-center sm:hidden">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-2 py-1 border rounded-md text-xs ${
                currentPage === 1
                  ? "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
              }`}
            >
              Prev
            </button>
            <span className="text-xs text-gray-500 px-1">
              {currentPage}/{totalPages || 1}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`relative inline-flex items-center px-2 py-1 border rounded-md text-xs ${
                currentPage === totalPages || totalPages === 0
                  ? "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
