import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, BarChart2, FileText, Users, Settings } from "lucide-react";
import { IoMdClock, IoMdSettings } from "react-icons/io";
import { FaChartLine, FaUserDoctor, FaUsers } from "react-icons/fa6";
import { MdOutlineAppSettingsAlt, MdPayment, MdSupportAgent } from "react-icons/md";

const SidebarAdmin= ({ isOpen, toggleSidebar } ) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <IoMdClock className="h-5 w-5 mr-3" />,
    },
    {
      name: "Users",
      path: "user",
      icon: <FaUsers className="h-5 w-5 mr-3" />,
    },

    {
      name: "Messages",
      path: "contact",
      icon: <FaUserDoctor className="h-5 w-5 mr-3" />,
    },
    {
      name: "Found Items",
      path: "founditem",
      icon: <MdOutlineAppSettingsAlt className="h-5 w-5 mr-3" />,
    },

    {
      name: "Lost Items",
      path: "lostitem",
      icon: <MdPayment className="h-5 w-5 mr-3" />,
    },
    {
      name: "Settings",
      path: "adminsetting",
      icon: <IoMdSettings className="h-5 w-5 mr-3" />,
    },
  ];

  const handleNavClick = (path) => {
    navigate(path);

    // Close sidebar on mobile after clicking a link
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`bg-white w-64 shadow-md flex-shrink-0 transition-all duration-300 ease-in-out fixed md:relative h-full z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <nav className="p-4 h-full overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive =
              currentPath === item.path ||
              (currentPath === "/dashboard" && item.path === "/");

            return (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center px-4 py-2 rounded-md w-full text-left ${
                    isActive
                      ? "bg-[#EFF6FF] text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
