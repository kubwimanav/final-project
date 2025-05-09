import React, { useState } from 'react';
import { Calendar, ChevronDown, Download, CreditCard, Eye, MoreVertical, ArrowUp, ArrowDown, DollarSign, UserPlus, Clipboard, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaChartLine } from 'react-icons/fa6';
import { GoClockFill } from 'react-icons/go';
import { FaExclamationTriangle } from 'react-icons/fa';
import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg'; 

export default function PaymentDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [methodFilter, setMethodFilter] = useState('All Methods');
  const pageSize = 3;

  // Sample data for revenue cards
 const revenueCards = [
   {
     title: "Total Revenue",
     value: "$84,686",
     percentage: "+12.5% from last month",
     percentageColor: "text-green-500", // Green for positive
     icon: <DollarSign size={20} className="text-[#059669] " />,
   },
   {
     title: "Total Appointments",
     value: "145",
     percentage: "+3.2% from yesterday",
     percentageColor: "text-[#2563EB]", // Green for positive
     icon: <FaChartLine size={20} className="text-[#2563EB] " />,
   },
   {
     title: "Total Claims",
     value: "86",
     percentage: "5 new today",
     percentageColor: "text-[#D97706]", // Blue for neutral/informational
     icon: <GoClockFill size={20} className="text-[#D97706] " />,
   },
   {
     title: "Average Revenue",
     value: "$556",
     percentage: "-2 from yesterday",
     percentageColor: "text-red-500", // Red for negative
     icon: <FaExclamationTriangle size={20} className="text-[#DC2626]" />,
   },
 ];

  // Sample data for chart
  const chartData = [
    { name: 'Mon', revenue: 2400 },
    { name: 'Tue', revenue: 4200 },
    { name: 'Wed', revenue: 5800 },
    { name: 'Thu', revenue: 4800 },
    { name: 'Fri', revenue: 7200 },
    { name: 'Sat', revenue: 5600 },
    { name: 'Sun', revenue: 6800 }
  ];

  // Sample data for transactions
  const allTransactions = [
    { id: '#TRX123456', patient: 'Sarah Johnson', patientImg: doctor1, amount: '$145.00', date: '23 Apr 2025', status: 'Paid', method: 'Visa', methodIcon: <CreditCard size={16} className="text-blue-600" /> },
    { id: '#TRX123457', patient: 'Michael Brown', patientImg: doctor2, amount: '$320.50', date: '22 Apr 2025', status: 'Pending', method: 'MasterCard', methodIcon: <CreditCard size={16} className="text-red-600" /> },
    { id: '#TRX123458', patient: 'Emily Wilson', patientImg: doctor1, amount: '$95.00', date: '21 Apr 2025', status: 'Paid', method: 'PayPal', methodIcon: <CreditCard size={16} className="text-blue-400" /> },
    { id: '#TRX123459', patient: 'David Miller', patientImg: doctor1, amount: '$210.75', date: '20 Apr 2025', status: 'Failed', method: 'Visa', methodIcon: <CreditCard size={16} className="text-blue-600" /> },
    { id: '#TRX123460', patient: 'Jennifer Lee', patientImg: doctor2, amount: '$180.25', date: '19 Apr 2025', status: 'Paid', method: 'ApplePay', methodIcon: <CreditCard size={16} className="text-gray-700" /> },
    { id: '#TRX123461', patient: 'Robert Garcia', patientImg: doctor2, amount: '$75.50', date: '18 Apr 2025', status: 'Pending', method: 'MasterCard', methodIcon: <CreditCard size={16} className="text-red-600" /> },
    { id: '#TRX123462', patient: 'Lisa Anderson', patientImg: doctor2, amount: '$250.00', date: '17 Apr 2025', status: 'Paid', method: 'Visa', methodIcon: <CreditCard size={16} className="text-blue-600" /> },
    { id: '#TRX123463', patient: 'James Wilson', patientImg: doctor1, amount: '$120.00', date: '16 Apr 2025', status: 'Paid', method: 'PayPal', methodIcon: <CreditCard size={16} className="text-blue-400" /> },
  ];

  // Status options
  const statusOptions = ['All Status', 'Paid', 'Pending', 'Failed'];
  
  // Method options
  const methodOptions = ['All Methods', 'Visa', 'MasterCard', 'PayPal', 'ApplePay'];

  // Pagination logic
  const totalPages = Math.ceil(allTransactions.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedTransactions = allTransactions.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Payments</h1>

      {/* First Section: Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {revenueCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">{card.title}</p>
                <h3 className="text-sm font-bold mt-1">{card.value}</h3>

                <div className={`text-sm ${card.percentageColor}`}>
                  {card.percentage}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">{card.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Section: Revenue Trends Chart */}
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Revenue Trends</h2>
          <button className="flex items-center gap-1 border rounded-lg px-3 py-1.5 text-sm bg-white">
            Last 7 Days <ChevronDown size={16} />
          </button>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f0f0f0"
              />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#4F46E5"
                activeDot={{ r: 8 }}
                strokeWidth={3}
                dot={{ strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Third Section: Recent Transactions */}
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <div className="flex items-center gap-2">
            <div className="flex flex-wrap gap-2 mt-3 sm:mt-0">
              <input
                type="date"
                className="w-32 pl-3 pr-3 py-1.5 text-sm border rounded-lg bg-white appearance-none"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <span className="text-gray-500">to</span>
              <input
                type="date"
                className="w-32 pl-3 pr-3 py-1.5 text-sm border rounded-lg bg-white appearance-none"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>

            <select
              className="border rounded-lg px-3 py-1.5 text-sm bg-white appearance-none pr-8 relative"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.5rem center",
              }}
            >
              {statusOptions.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <select
              className="border rounded-lg px-3 py-1.5 text-sm bg-white appearance-none pr-8 relative"
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.5rem center",
              }}
            >
              {methodOptions.map((method, index) => (
                <option key={index} value={method}>
                  {method}
                </option>
              ))}
            </select>

            <button className="flex items-center gap-1 border rounded-lg px-3 py-1.5 text-sm bg-white text-blue-600">
              <Download size={16} />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Method
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayedTransactions.map((transaction, index) => (
              <tr key={index}>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {transaction.id}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={transaction.patientImg}
                      alt={transaction.patient}
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <div className="text-sm font-medium text-gray-900">
                      {transaction.patient}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {transaction.amount}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {transaction.date}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : transaction.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    {transaction.methodIcon}
                    <span className="ml-1">{transaction.method}</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-400 hover:text-blue-600">
                      <Eye size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="py-3 flex items-center justify-between border-t border-gray-200 mt-4">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(endIndex, allTransactions.length)}
              </span>{" "}
              of <span className="font-medium">{allTransactions.length}</span>{" "}
              results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border ${
                    currentPage === index + 1
                      ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                  } text-sm font-medium`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === totalPages
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}