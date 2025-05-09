import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, FileText, Users, Settings } from "lucide-react";
import { IoMdClock, IoMdSettings } from "react-icons/io";
import { FaChartLine, FaUserDoctor, FaUsers } from "react-icons/fa6";
import { MdOutlineAppSettingsAlt, MdPayment, MdSupportAgent } from "react-icons/md";

const SidebarAdmin= ({ isOpen }) => {
  const location = useLocation();
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

  return (
    <aside
      className={`bg-white w-50 shadow-md flex-shrink-0 transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive =
              currentPath === item.path ||
              (currentPath === "/admin" && item.path === "/adminhome");

            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-[#EFF6FF] text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
