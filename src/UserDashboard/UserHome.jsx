import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DollarSign, Users, UserCheck, FileText } from "lucide-react";
import { mycontext } from "../Context/ContextProvider";

function UserHome() {
  // Sample data for charts
  const revenueData = [
    { name: "Jan", revenue: 18500 },
    { name: "Feb", revenue: 21200 },
    { name: "Mar", revenue: 19800 },
    { name: "Apr", revenue: 24500 },
    { name: "May", revenue: 26300 },
    { name: "Jun", revenue: 24583 },
  ];

  const usersData = [
    { name: "Jan", users: 850 },
    { name: "Feb", users: 920 },
    { name: "Mar", users: 1050 },
    { name: "Apr", users: 980 },
    { name: "May", users: 1200 },
    { name: "Jun", users: 1100 },
  ];

  // Sample data for activity table with placeholder images
  const activities = [
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
 
  ];

  const { booking, contact, tour } = mycontext();
  const firstFiveBookings = booking?.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-3 sm:p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm text-gray-500">Users</span>
              <span className="text-lg sm:text-xl font-bold mt-1">
                {booking.length}
              </span>
              <span className="text-xs sm:text-sm text-green-500 mt-1">
                +12.5% from last month
              </span>
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-sm bg-[#EFF6FF] flex items-center justify-center text-blue-400">
              <Users size={16} className="sm:w-5 sm:h-5" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-3 sm:p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm text-gray-500">
                Lost Items
              </span>
              <span className="text-lg sm:text-xl font-bold mt-1">1,427</span>
              <span className="text-xs sm:text-sm text-green-500 mt-1">
                +5.2% from last month
              </span>
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-sm bg-[#ECFDF5] flex items-center justify-center text-[#10B981]">
              <UserCheck size={16} className="sm:w-5 sm:h-5" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow p-3 sm:p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm text-gray-500">
                Found Items
              </span>
              <span className="text-lg sm:text-xl font-bold mt-1">
                {tour.length}
              </span>
              <span className="text-xs sm:text-sm text-green-500 mt-1">
                12 completed
              </span>
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-sm bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6]">
              <FileText size={16} className="sm:w-5 sm:h-5" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow p-3 sm:p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm text-gray-500">Messages</span>
              <span className="text-lg sm:text-xl font-bold mt-1">
                {contact.length}
              </span>
              <span className="text-xs sm:text-sm text-red-500 mt-1">
                +8.4% from last month
              </span>
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-sm bg-[#FFFBEB] flex items-center justify-center text-[#F59E0B]">
              <DollarSign size={16} className="sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg shadow p-3 sm:p-4">
            <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-2 sm:mb-4">
              Revenue Overview
            </h3>
            <div className="w-full h-48 sm:h-56 lg:h-50">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revenueData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4b7bec"
                    strokeWidth={2}
                    activeDot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Users Chart */}
          <div className="bg-white rounded-lg shadow p-3 sm:p-4">
            <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-2 sm:mb-4">
              User Statistics
            </h3>
            <div className="w-full h-48 sm:h-56 lg:h-50">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={usersData}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="users" fill="#20bf6b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-3 sm:p-4 flex justify-between items-center border-b border-gray-200">
            <h3 className="text-sm sm:text-base font-medium text-gray-800">
              Recent Activity
            </h3>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium"
            >
              View All
            </a>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block">
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
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {firstFiveBookings.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-md object-cover"
                              src={item.itemImage}
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
                              {item.ownerName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {item.descrption}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.ownerEmail}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.ownerPhone}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card Layout */}
          <div className="lg:hidden">
            <div className="divide-y divide-gray-200">
              {firstFiveBookings.map((item) => (
                <div key={item.id} className="p-3 sm:p-4 hover:bg-gray-50">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 sm:h-14 sm:w-14 rounded-md object-cover"
                        src={item.itemImage}
                        alt={item.itemName}
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMiAyMkMzMC44MzY2IDIyIDM4IDI5LjE2MzQgMzggMzhDMzggNDYuODM2NiAzMC44MzY2IDU0IDIyIDU0QzEzLjE2MzQgNTQgNiA0Ni44MzY2IDYgMzhDNiAyOS4xNjM0IDEzLjE2MzQgMjIgMjIgMjJaIiBmaWxsPSIjOUM5Qzk3Ii8+CjxwYXRoIGQ9Ik0yOS44NjY3IDI5Ljg2NjdWMzJIMzJWMzQuMTMzM0gyOS44NjY3VjM2LjI2NjdIMjguOFYzNC4xMzMzSDI2LjEzMzNWMzJIMjguOFYyOS44NjY3SDI5Ljg2NjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=";
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 pr-2">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {item.itemName}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.ownerName}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-700">
                          {item.descrption}
                        </p>
                      </div>
                      <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 space-y-1 sm:space-y-0">
                        <span>📍 {item.location}</span>
                        <div className="sm:text-right">
                          <span className="block text-gray-900 font-medium">
                            {item.ownerEmail}
                          </span>
                          <span className="block">{item.ownerPhone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
