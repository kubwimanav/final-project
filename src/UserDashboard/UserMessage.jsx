import { useState } from "react";
import {
  Trash2,
  Send,
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Menu,
} from "lucide-react";

// Sample data for messages
const initialMessages = [
  {
    id: 1,
    name: "Nurul Ahmad",
    email: "nurul@ukm.edu.my",
    description:
      "I found a student ID card near the library with the name 'Muhammad Firdaus'",
    status: "unread",
  },
  {
    id: 2,
    name: "Sarah Tan",
    email: "sarah.tan@siswa.ukm.edu.my",
    description:
      "I lost my water bottle in the Faculty of Technology and Information Science building yesterday",
    status: "pending",
  },
  {
    id: 3,
    name: "Ahmad Razak",
    email: "ahmad.razak@ukm.edu.my",
    description:
      "Found a calculator in Lecture Hall A. It's a scientific calculator Texas Instruments",
    status: "resolved",
  },
  {
    id: 4,
    name: "Mei Ling",
    email: "mei.ling@siswa.ukm.edu.my",
    description:
      "Lost my student ID card somewhere in the cafeteria. My name is Mei Ling, matric number A175523",
    status: "pending",
  },
  {
    id: 5,
    name: "Dr. Kumar",
    email: "kumar@ukm.edu.my",
    description:
      "Found a laptop charger in the staff room. It appears to be for a Lenovo ThinkPad",
    status: "resolved",
  },

  {
    id: 1,
    name: "Nurul Ahmad",
    email: "nurul@ukm.edu.my",
    description:
      "I found a student ID card near the library with the name 'Muhammad Firdaus'",
    status: "unread",
  },
  {
    id: 2,
    name: "Sarah Tan",
    email: "sarah.tan@siswa.ukm.edu.my",
    description:
      "I lost my water bottle in the Faculty of Technology and Information Science building yesterday",
    status: "pending",
  },
  {
    id: 3,
    name: "Ahmad Razak",
    email: "ahmad.razak@ukm.edu.my",
    description:
      "Found a calculator in Lecture Hall A. It's a scientific calculator Texas Instruments",
    status: "resolved",
  },
  {
    id: 4,
    name: "Mei Ling",
    email: "mei.ling@siswa.ukm.edu.my",
    description:
      "Lost my student ID card somewhere in the cafeteria. My name is Mei Ling, matric number A175523",
    status: "pending",
  },
  {
    id: 5,
    name: "Dr. Kumar",
    email: "kumar@ukm.edu.my",
    description:
      "Found a laptop charger in the staff room. It appears to be for a Lenovo ThinkPad",
    status: "resolved",
  },
];

export default function UserMessage() {
  const [messages, setMessages] = useState(initialMessages);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const messagesPerPage = 3;

  // Delete message handler
  const handleDelete = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
    }
  };

  // Update status handler
  const handleStatusChange = (id, newStatus) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, status: newStatus } : message
      )
    );
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage({ ...selectedMessage, status: newStatus });
    }
  };

  // Filter messages based on search term and status filter
  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "all" || message.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  // Pagination logic
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );
  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

  // Status badge color mapping
  const statusColors = {
    unread: "bg-blue-100 text-blue-800",
    pending: "bg-yellow-100 text-yellow-800",
    resolved: "bg-green-100 text-green-800",
  };

  return (
    <div className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto py-4 px-2 sm:px-4 lg:px-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
              Contact Messages
            </h1>
            <div className="flex space-x-2">
              <button
                className="md:hidden text-gray-600 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={20} />
              </button>
              <span className="hidden md:inline text-blue-600 hover:text-blue-800 cursor-pointer font-medium text-sm">
                View All
              </span>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden px-4 py-2 bg-gray-50 border-b border-gray-200">
              <div className="flex flex-col space-y-2">
                <button className="text-left text-blue-600 hover:text-blue-800 font-medium text-sm py-1">
                  View All Messages
                </button>
                <button className="text-left text-blue-600 hover:text-blue-800 font-medium text-sm py-1">
                  Export Data
                </button>
                <button className="text-left text-blue-600 hover:text-blue-800 font-medium text-sm py-1">
                  Settings
                </button>
              </div>
            </div>
          )}

          {/* Search and filter */}
          <div className="px-4 py-3 flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 md:space-x-3 border-b border-gray-200">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search messages..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <Search size={18} />
              </div>
              {searchTerm && (
                <button
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  onClick={() => {
                    setSearchTerm("");
                    setCurrentPage(1);
                  }}
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="flex items-center space-x-2 w-full md:w-auto">
              <span className="text-gray-500">
                <Filter size={18} />
              </span>
              <select
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                value={filterStatus}
                onChange={(e) => {
                  setFilterStatus(e.target.value);
                  setCurrentPage(1); // Reset to first page on filter change
                }}
              >
                <option value="all">All Status</option>
                <option value="unread">Unread</option>
                <option value="pending">Pending</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden">
            {currentMessages.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {currentMessages.map((message) => (
                  <div key={message.id} className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {message.name}
                        </h3>
                        <p className="text-xs text-gray-500">{message.email}</p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          statusColors[message.status]
                        }`}
                      >
                        {message.status.charAt(0).toUpperCase() +
                          message.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                      {message.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500">{message.time}</p>
                      <div className="flex space-x-2">
                        <button
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="View Details"
                          onClick={() => setSelectedMessage(message)}
                        >
                          <MoreHorizontal size={16} />
                        </button>
                        <button
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="Reply"
                        >
                          <Send size={16} />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900 p-1"
                          title="Delete"
                          onClick={() => handleDelete(message.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center text-gray-500">
                No messages found matching your criteria
              </div>
            )}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentMessages.length > 0 ? (
                  currentMessages.map((message) => (
                    <tr key={message.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {message.name}
                        </div>
                        <div className="text-xs text-gray-500 md:hidden">
                          {message.email}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap hidden lg:table-cell">
                        <div className="text-sm text-gray-500">
                          {message.email}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm text-gray-900 flex items-center">
                          <span className="line-clamp-1 xl:line-clamp-2">
                            {message.description}
                          </span>
                          <button
                            className="ml-1 flex-shrink-0 text-xs text-blue-600 hover:text-blue-800"
                            title="View full description"
                            onClick={() => setSelectedMessage(message)}
                          >
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                            statusColors[message.status]
                          }`}
                        >
                          {message.status.charAt(0).toUpperCase() +
                            message.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            className="text-blue-600 hover:text-blue-900 p-1"
                            title="Reply"
                          >
                            <Send size={16} />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-900 p-1"
                            title="Delete"
                            onClick={() => handleDelete(message.id)}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No messages found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {filteredMessages.length > 0 && (
            <div className="bg-white px-4 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200">
              <div className="text-sm text-gray-700 mb-2 sm:mb-0">
                Showing{" "}
                <span className="font-medium">{indexOfFirstMessage + 1}</span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastMessage, filteredMessages.length)}
                </span>{" "}
                of{" "}
                <span className="font-medium">{filteredMessages.length}</span>{" "}
                results
              </div>
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <button
                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                      currentPage === 1
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      currentPage > 1 && setCurrentPage(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft size={16} />
                  </button>

                  {/* Show limited page numbers */}
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNumber = i + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          currentPage === pageNumber
                            ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                            : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  <button
                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                      currentPage === totalPages
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      currentPage < totalPages &&
                      setCurrentPage(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRight size={16} />
                  </button>
                </nav>
              </div>
            </div>
          )}
        </div>

        {/* Message Detail Modal */}
        {selectedMessage && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-auto">
              <div className="px-4 py-3 bg-gray-50 border-b flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Message Details
                </h3>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="px-4 py-3 max-h-64 sm:max-h-96 overflow-y-auto">
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-500">From</p>
                  <p className="text-sm text-gray-900">
                    {selectedMessage.name} ({selectedMessage.email})
                  </p>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-500">Time</p>
                  <p className="text-sm text-gray-900">
                    {selectedMessage.time}
                  </p>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        statusColors[selectedMessage.status]
                      }`}
                    >
                      {selectedMessage.status.charAt(0).toUpperCase() +
                        selectedMessage.status.slice(1)}
                    </span>
                    <select
                      className="text-xs border border-gray-300 rounded-md px-2 py-1"
                      value={selectedMessage.status}
                      onChange={(e) =>
                        handleStatusChange(selectedMessage.id, e.target.value)
                      }
                    >
                      <option value="unread">Unread</option>
                      <option value="pending">Pending</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Message</p>
                  <p className="text-sm text-gray-900 mt-1">
                    {selectedMessage.description}
                  </p>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 border-t flex justify-end space-x-3">
                <button
                  className="py-1.5 px-3 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setSelectedMessage(null)}
                >
                  Close
                </button>
                <button className="py-1.5 px-3 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700">
                  Reply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
