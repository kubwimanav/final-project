import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Printer,
  Plus,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { BiSolidCalendarWeek, BiSolidCalendarX, BiSolidNotepad } from "react-icons/bi";

export default function AppointmentPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("upcoming");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Showing only 3 appointments per page

  // Dummy data for the table
  const allAppointments = [
    {
      id: 1,
      patient: { name: "Sarah Johnson", id: "P10023" },
      doctor: { name: "Dr. Robert Chen", specialization: "Cardiologist" },
      hospital: "Memorial Hospital",
      date: "Apr 24, 2025",
      time: "10:00 AM",
      type: "Check-up",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: { name: "Michael Brown", id: "P10078" },
      doctor: { name: "Dr. Emily Wilson", specialization: "Neurologist" },
      hospital: "City General Hospital",
      date: "Apr 25, 2025",
      time: "2:30 PM",
      type: "Specialist",
      status: "Confirmed",
    },
    {
      id: 3,
      patient: { name: "Jennifer Lee", id: "P10046" },
      doctor: { name: "Dr. James Taylor", specialization: "Dermatologist" },
      hospital: "Wellness Medical Center",
      date: "Apr 26, 2025",
      time: "9:15 AM",
      type: "Follow-up",
      status: "Confirmed",
    },
    {
      id: 4,
      patient: { name: "David Garcia", id: "P10092" },
      doctor: { name: "Dr. Sarah Martinez", specialization: "Orthopedist" },
      hospital: "Regional Medical Center",
      date: "Apr 27, 2025",
      time: "3:45 PM",
      type: "Emergency",
      status: "Pending",
    },
    {
      id: 5,
      patient: { name: "Lisa Rodriguez", id: "P10103" },
      doctor: { name: "Dr. Michael Smith", specialization: "Pediatrician" },
      hospital: "Children's Hospital",
      date: "Apr 28, 2025",
      time: "11:30 AM",
      type: "Check-up",
      status: "Confirmed",
    },
    {
      id: 6,
      patient: { name: "Robert Wilson", id: "P10118" },
      doctor: { name: "Dr. Jessica Park", specialization: "Ophthalmologist" },
      hospital: "Eye Institute",
      date: "Apr 29, 2025",
      time: "1:15 PM",
      type: "Specialist",
      status: "Confirmed",
    },
    {
      id: 7,
      patient: { name: "Emily Davis", id: "P10124" },
      doctor: { name: "Dr. Thomas White", specialization: "Dentist" },
      hospital: "Dental Care Center",
      date: "Apr 30, 2025",
      time: "10:45 AM",
      type: "Check-up",
      status: "Pending",
    },
    {
      id: 8,
      patient: { name: "Kevin Martinez", id: "P10135" },
      doctor: { name: "Dr. Amanda Lee", specialization: "Psychologist" },
      hospital: "Mental Health Clinic",
      date: "May 1, 2025",
      time: "3:00 PM",
      type: "Follow-up",
      status: "Confirmed",
    },
    {
      id: 9,
      patient: { name: "Nancy Taylor", id: "P10149" },
      doctor: { name: "Dr. Richard Brown", specialization: "Cardiologist" },
      hospital: "Heart Center",
      date: "May 2, 2025",
      time: "11:00 AM",
      type: "Emergency",
      status: "Confirmed",
    },
  ];

  // Get current appointments for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAppointments = allAppointments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(allAppointments.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Get type color based on appointment type
  const getTypeColor = (type) => {
    switch (type) {
      case "Check-up":
        return "bg-green-100 text-green-800";
      case "Specialist":
        return "bg-purple-100 text-purple-800";
      case "Follow-up":
        return "bg-yellow-100 text-yellow-800";
      case "Emergency":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  // Get status color based on appointment status
  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-gray-100 text-gray-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show first page, current page, and pages around current page
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* First Section: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-6 flex items-start">
            <div className="flex flex-col flex-grow">
              <p className="text-gray-500 text-sm font-medium">
                Today's Appointments
              </p>
              <p className="text-2xl font-bold mt-1">248</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full ml-4">
              <div className="text-blue-500 text-xl">
                <BiSolidNotepad />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-6 flex items-start">
            <div className="flex flex-col flex-grow">
              <p className="text-gray-500 text-sm font-medium">
                Upcoming This Week
              </p>
              <p className="text-2xl font-bold mt-1">32</p>
            </div>
            <div className="bg-[#D1FAE5] p-3 rounded-full ml-4">
              <div className="text-[#059669] text-xl">
                <BiSolidCalendarWeek />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow p-6 flex items-start">
            <div className="flex flex-col flex-grow">
              <p className="text-gray-500 text-sm font-medium">
                Missed Appointments
              </p>
              <p className="text-2xl font-bold mt-1">56</p>
            </div>
            <div className="bg-[#FEE2E2] p-3 rounded-full ml-4">
              <div className="text-[#DC2626] text-xl">
                <BiSolidCalendarX />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section: Search, Filter, and Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search appointments..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
            <button className="ml-3 flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
              <Filter className="mr-2 h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>

          <div className="flex items-center w-full md:w-auto justify-end">
            <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-3">
              <Download className="mr-2 h-5 w-5" />
              <Printer className="h-5 w-5" />
            </button>
            <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              <Plus className="mr-2 h-5 w-5" />
              <span>Add Appointment</span>
            </button>
          </div>
        </div>

        {/* Third Section: Status Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-6">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`inline-block py-4 px-1 font-medium ${
                  activeTab === "upcoming"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Upcoming
              </button>
            </li>
            <li className="mr-6">
              <button
                onClick={() => setActiveTab("completed")}
                className={`inline-block py-4 px-1 font-medium ${
                  activeTab === "completed"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Completed
              </button>
            </li>
            <li className="mr-6">
              <button
                onClick={() => setActiveTab("cancelled")}
                className={`inline-block py-4 px-1 font-medium ${
                  activeTab === "cancelled"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Cancelled
              </button>
            </li>
            <li className="mr-6">
              <button
                onClick={() => setActiveTab("missed")}
                className={`inline-block py-4 px-1 font-medium ${
                  activeTab === "missed"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Missed
              </button>
            </li>
          </ul>
        </div>

        {/* Fourth Section: Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Patient
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Doctor
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hospital
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date & Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="/api/placeholder/40/40"
                            alt="Patient"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {appointment.patient.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            patient-id: {appointment.patient.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="/api/placeholder/40/40"
                            alt="Doctor"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {appointment.doctor.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appointment.doctor.specialization}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {appointment.hospital}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {appointment.date}
                      </div>
                      <div className="text-sm text-gray-500">
                        {appointment.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeColor(
                          appointment.type
                        )}`}
                      >
                        {appointment.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          appointment.status
                        )}`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg shadow">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
                currentPage === 1
                  ? "text-gray-300"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
                currentPage === totalPages
                  ? "text-gray-300"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing
                <span className="font-medium mx-1">{indexOfFirstItem + 1}</span>
                to
                <span className="font-medium mx-1">
                  {Math.min(indexOfLastItem, allAppointments.length)}
                </span>
                of
                <span className="font-medium mx-1">
                  {allAppointments.length}
                </span>
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center rounded-l-md px-2 py-2 ${
                    currentPage === 1
                      ? "text-gray-300"
                      : "text-gray-400 hover:bg-gray-50"
                  } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {getPageNumbers().map((number, idx) =>
                  number === "..." ? (
                    <span
                      key={`ellipsis-${idx}`}
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      aria-current={currentPage === number ? "page" : undefined}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        currentPage === number
                          ? "bg-blue-600 text-white focus-visible:outline-indigo-600"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      } focus:z-20 focus:outline-offset-0`}
                    >
                      {number}
                    </button>
                  )
                )}

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${
                    currentPage === totalPages
                      ? "text-gray-300"
                      : "text-gray-400 hover:bg-gray-50"
                  } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                >
                  <span className="sr-only">Next</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
