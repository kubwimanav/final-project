import { useState } from "react";
import {
  Users,
  UserPlus,
  Download,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

export default function UserManagementPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const itemsPerPage = 3;

  // Sample user data
  const allUsers = [
    {
      id: 1,
      name: "John Doe",
      role: "Patient",
      email: "john@example.com",
      status: "Active",
      registered: "12-Apr-2025",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Patient",
      email: "jane@example.com",
      status: "Inactive",
      registered: "10-Apr-2025",
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Patient",
      email: "robert@example.com",
      status: "Pending",
      registered: "05-Apr-2025",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Admin",
      email: "emily@example.com",
      status: "Active",
      registered: "01-Apr-2025",
    },
    {
      id: 5,
      name: "Michael Wilson",
      role: "Editor",
      email: "michael@example.com",
      status: "Active",
      registered: "25-Mar-2025",
    },
    {
      id: 6,
      name: "Sarah Brown",
      role: "Admin",
      email: "sarah@example.com",
      status: "Active",
      registered: "20-Mar-2025",
    },
    {
      id: 7,
      name: "David Lee",
      role: "Viewer",
      email: "david@example.com",
      status: "Inactive",
      registered: "15-Mar-2025",
    },
    {
      id: 8,
      name: "Lisa Miller",
      role: "Editor",
      email: "lisa@example.com",
      status: "Pending",
      registered: "10-Mar-2025",
    },
    {
      id: 9,
      name: "James Wilson",
      role: "Admin",
      email: "james@example.com",
      status: "Active",
      registered: "05-Mar-2025",
    },
    {
      id: 10,
      name: "Jennifer Garcia",
      role: "Viewer",
      email: "jennifer@example.com",
      status: "Inactive",
      registered: "01-Mar-2025",
    },
    {
      id: 11,
      name: "Thomas Martinez",
      role: "Editor",
      email: "thomas@example.com",
      status: "Active",
      registered: "25-Feb-2025",
    },
    {
      id: 12,
      name: "Jessica Robinson",
      role: "Admin",
      email: "jessica@example.com",
      status: "Pending",
      registered: "20-Feb-2025",
    },
  ];

  // Available roles and statuses for dropdowns
  const roles = ["All Roles", "Admin", "Editor", "Viewer"];
  const statuses = ["All Status", "Active", "Inactive", "Pending"];

  // Filter users based on selected role and status
  const filteredUsers = allUsers.filter((user) => {
    const roleMatch =
      selectedRole === "" ||
      selectedRole === "All Roles" ||
      user.role === selectedRole;
    const statusMatch =
      selectedStatus === "" ||
      selectedStatus === "All Status" ||
      user.status === selectedStatus;
    return roleMatch && statusMatch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle checkbox selection
  const toggleUserSelection = (userId) => {
    setSelectedUsers((prev) => {
      if (prev.includes(userId)) {
        return prev.filter((id) => id !== userId);
      } else {
        return [...prev, userId];
      }
    });
  };

  // Handle select all for current page
  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    if (newSelectAll) {
      // Add all ids from current page
      const currentPageIds = paginatedUsers.map((user) => user.id);
      setSelectedUsers((prev) => {
        const existingIds = prev.filter((id) => !currentPageIds.includes(id));
        return [...existingIds, ...currentPageIds];
      });
    } else {
      // Remove all ids from current page
      setSelectedUsers((prev) =>
        prev.filter((id) => !paginatedUsers.some((user) => user.id === id))
      );
    }
  };

  // Check if all users on current page are selected
  const areAllCurrentUsersSelected = () => {
    return paginatedUsers.every((user) => selectedUsers.includes(user.id));
  };

  // Update selectAll state when page changes or when selections change
  useState(() => {
    setSelectAll(areAllCurrentUsersSelected());
  }, [currentPage, selectedUsers]);

  // Helper function to render status badge
  const renderStatusBadge = (status) => {
    let bgColor = "bg-gray-100 text-gray-800";

    if (status === "Active") {
      bgColor = "bg-green-100 text-green-800";
    } else if (status === "Inactive") {
      bgColor = "bg-red-100 text-red-800";
    } else if (status === "Pending") {
      bgColor = "bg-yellow-100 text-yellow-800";
    }

    return (
      <span
        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColor}`}
      >
        {status}
      </span>
    );
  };

  // Generate pagination buttons
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;
    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisibleButtons / 2)
    );
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`px-3 py-1 border rounded-md ${
            currentPage === i
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "hover:bg-gray-50 text-gray-600"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  // Custom checkbox component
  const Checkbox = ({ checked, onChange }) => (
    <div
      className={`h-5 w-5 border rounded flex items-center justify-center cursor-pointer ${
        checked ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"
      }`}
      onClick={onChange}
    >
      {checked && <Check size={12} className="text-white" />}
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* First Section: Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Card 1: Total Users */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
              <p className="text-2sm font-bold mt-1">{allUsers.length}</p>
              <p className="text-sm mt-2 text-green-500">
                +12.5% from last month
              </p>
            </div>
            <div className="p-2 bg-gray-100 rounded-lg">
              <Users className="text-blue-500" size={24} />
            </div>
          </div>
        </div>

        {/* Card 2: Active Users */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Active Users
              </h3>
              <p className="text-2sm font-bold mt-1">
                {allUsers.filter((u) => u.status === "Active").length}
              </p>
              <p className="text-sm mt-2 text-green-500">
                +8.2% from last month
              </p>
            </div>
            <div className="p-2 bg-gray-100 rounded-lg">
              <UserPlus className="text-green-500" size={24} />
            </div>
          </div>
        </div>

        {/* Card 3: Inactive Users */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Inactive Users
              </h3>
              <p className="text-2sm font-bold mt-1">
                {allUsers.filter((u) => u.status === "Inactive").length}
              </p>
              <p className="text-sm mt-2 text-green-500">-3.1% from last month</p>
            </div>
            <div className="p-2 bg-gray-100 rounded-lg">
              <Users className="text-yellow-500" size={24} />
            </div>
          </div>
        </div>

        {/* Card 4: Pending Users */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Pending Users
              </h3>
              <p className="text-2sm font-bold mt-1">
                {allUsers.filter((u) => u.status === "Pending").length}
              </p>
              <p className="text-sm mt-2 text-green-500">
                +5.8% from last month
              </p>
            </div>
            <div className="p-2 bg-gray-100 rounded-lg">
              <Users className="text-red-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section: Controls */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            {/* Role dropdown - without icon */}
            <select
              className="px-3 py-2 text-sm bg-gray-100 rounded-md border border-gray-200"
              value={selectedRole}
              onChange={(e) => {
                setSelectedRole(e.target.value);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            {/* Status dropdown - without icon */}
            <select
              className="px-3 py-2 text-sm bg-gray-100 rounded-md border border-gray-200"
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            {/* Date picker - without icon */}
            <input
              type="date"
              className="px-3 py-2 text-sm bg-gray-100 rounded-md border border-gray-200"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-500 text-white hover:bg-blue-600 rounded-md transition-colors">
              <UserPlus size={16} />
              <span>Add User</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <Download size={16} />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Third Section: Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left">
                <div className="flex items-center">
                  <Checkbox checked={selectAll} onChange={toggleSelectAll} />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.role}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {renderStatusBadge(user.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.registered}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <button className="p-1 text-blue-600 hover:text-blue-900">
                      <Eye size={16} />
                    </button>
                    <button className="p-1 text-green-600 hover:text-green-900">
                      <Edit size={16} />
                    </button>
                    <button className="p-1 text-red-600 hover:text-red-900">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(startIndex + itemsPerPage, filteredUsers.length)}
            </span>{" "}
            of <span className="font-medium">{filteredUsers.length}</span>{" "}
            results
          </div>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 border rounded-md hover:bg-gray-50 text-gray-600 disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
            </button>

            {renderPaginationButtons()}

            <button
              className="px-3 py-1 border rounded-md hover:bg-gray-50 text-gray-600 disabled:opacity-50"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
