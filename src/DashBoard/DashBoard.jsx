import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  User,
  Box,
  LogOut,
  Bell,
  Settings,
  ChevronDown,
  Tag,
  Clock,
  MapPin,
  Trash2,
  AlertCircle,
} from "lucide-react";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Mock data for dashboard stats
  const stats = [
    {
      title: "Total Items",
      value: "126",
      increase: "+12%",
      color: "bg-blue-100",
    },
    {
      title: "Found Items",
      value: "78",
      increase: "+8%",
      color: "bg-green-100",
    },
    {
      title: "Lost Items",
      value: "48",
      increase: "+15%",
      color: "bg-yellow-100",
    },
    {
      title: "Recovered",
      value: "53",
      increase: "+23%",
      color: "bg-purple-100",
    },
  ];

  // Mock data for recent items
  const recentItems = [
    {
      id: 1,
      type: "found",
      name: "Student ID Card",
      location: "Faculty of Technology & Information Science",
      date: "20 Apr 2025",
      status: "pending",
      category: "ID/Documents",
      reporter: "Ibrahim Khan (A165321)",
    },
    {
      id: 2,
      type: "lost",
      name: "Black Laptop Charger",
      location: "Main Library, 2nd Floor",
      date: "19 Apr 2025",
      status: "pending",
      category: "Electronics",
      reporter: "Sarah Ahmad (A176543)",
    },
    {
      id: 3,
      type: "found",
      name: "Water Bottle (Blue)",
      location: "Cafeteria",
      date: "18 Apr 2025",
      status: "matched",
      category: "Personal Items",
      reporter: "Maryam Abdullah (A189023)",
    },
    {
      id: 4,
      type: "lost",
      name: "Calculator",
      location: "Science Building, Room 204",
      date: "17 Apr 2025",
      status: "recovered",
      category: "School Supplies",
      reporter: "Tan Wei Ming (A157890)",
    },
    {
      id: 5,
      type: "found",
      name: "House Keys",
      location: "Sports Complex",
      date: "16 Apr 2025",
      status: "pending",
      category: "Keys",
      reporter: "Ahmed Razak (A162345)",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "matched":
        return "bg-blue-100 text-blue-800";
      case "recovered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type) => {
    return type === "found"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  const filteredItems =
    selectedFilter === "all"
      ? recentItems
      : recentItems.filter((item) => item.type === selectedFilter);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {isSidebarOpen ? (
            <h1 className="text-xl font-bold text-blue-700">
              FoundeLost Admin
            </h1>
          ) : (
            <h1 className="text-xl font-bold text-blue-700">FL</h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="flex-1 py-4">
          <nav className="px-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center w-full p-3 mb-1 rounded-md hover:bg-gray-100 ${
                activeTab === "dashboard"
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600"
              }`}
            >
              <Box size={20} className="mr-3" />
              {isSidebarOpen && <span>Dashboard</span>}
            </button>

            <button
              onClick={() => setActiveTab("found-items")}
              className={`flex items-center w-full p-3 mb-1 rounded-md hover:bg-gray-100 ${
                activeTab === "found-items"
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600"
              }`}
            >
              <Tag size={20} className="mr-3" />
              {isSidebarOpen && <span>Found Items</span>}
            </button>

            <button
              onClick={() => setActiveTab("lost-items")}
              className={`flex items-center w-full p-3 mb-1 rounded-md hover:bg-gray-100 ${
                activeTab === "lost-items"
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600"
              }`}
            >
              <AlertCircle size={20} className="mr-3" />
              {isSidebarOpen && <span>Lost Items</span>}
            </button>

            <button
              onClick={() => setActiveTab("expired-items")}
              className={`flex items-center w-full p-3 mb-1 rounded-md hover:bg-gray-100 ${
                activeTab === "expired-items"
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600"
              }`}
            >
              <Clock size={20} className="mr-3" />
              {isSidebarOpen && <span>Expired Items</span>}
            </button>

            <button
              onClick={() => setActiveTab("users")}
              className={`flex items-center w-full p-3 mb-1 rounded-md hover:bg-gray-100 ${
                activeTab === "users"
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600"
              }`}
            >
              <User size={20} className="mr-3" />
              {isSidebarOpen && <span>Users</span>}
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center w-full p-3 mb-1 rounded-md hover:bg-gray-100 ${
                activeTab === "settings"
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600"
              }`}
            >
              <Settings size={20} className="mr-3" />
              {isSidebarOpen && <span>Settings</span>}
            </button>
          </nav>
        </div>

        <div className="p-4 border-t">
          <button className="flex items-center w-full p-2 text-red-600 rounded-md hover:bg-red-50">
            <LogOut size={20} className="mr-3" />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between bg-white p-4 shadow-sm">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">UKM Lost and Found System</h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-gray-400"
              />
            </div>

            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                A
              </div>
              {isSidebarOpen && (
                <div className="flex items-center">
                  <span className="font-medium">Admin</span>
                  <ChevronDown size={16} className="ml-1" />
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Dashboard Overview
            </h1>
            <p className="text-gray-600">
              Welcome to the FoundeLost admin panel - manage all lost and found
              items across UKM campus
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.color} rounded-lg p-6 shadow-sm`}
              >
                <h3 className="text-gray-600 font-medium">{stat.title}</h3>
                <div className="flex items-end justify-between mt-2">
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <span className="text-green-600 text-sm font-medium">
                    {stat.increase}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Items Section */}
          <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Recent Items</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedFilter("all")}
                    className={`px-3 py-1 rounded-md ${
                      selectedFilter === "all"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedFilter("found")}
                    className={`px-3 py-1 rounded-md ${
                      selectedFilter === "found"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100"
                    }`}
                  >
                    Found
                  </button>
                  <button
                    onClick={() => setSelectedFilter("lost")}
                    className={`px-3 py-1 rounded-md ${
                      selectedFilter === "lost"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100"
                    }`}
                  >
                    Lost
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Reporter
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${getTypeColor(
                            item.type
                          )}`}
                        >
                          {item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1 text-gray-400" />
                          {item.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.reporter}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status.charAt(0).toUpperCase() +
                            item.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded">
                            <Settings size={16} />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t text-center">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                View All Items
              </button>
            </div>
          </div>

          {/* System Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">System Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Current Date</div>
                <div className="font-medium">April 23, 2025</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">System Version</div>
                <div className="font-medium">FoundeLost v2.0.3</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">
                  Total Registered Users
                </div>
                <div className="font-medium">1,248 users</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">
                  Items Expiring Soon
                </div>
                <div className="font-medium">12 items (within 7 days)</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
