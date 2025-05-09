import React from "react";
import { Bell, Search } from "lucide-react";
import { GiRoyalLove } from "react-icons/gi";

import profile from "../assets/profile.jpg"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Logo Side */}
      <div className="flex items-center">
        <GiRoyalLove className="text-blue-500 h-6 w-6" />
        <span className="ml-2 font-semibold text-gray-800 text-lg">
          Digital Lost & Found System
        </span>
      </div>

      {/* Search Input - Increased left margin and decreased width */}
      <div className="hidden md:flex items-center flex-1 ml-20 mr-4 relative">
        <Search className="absolute left-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-150 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Notification & Profile */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-500" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            3
          </span>
        </div>
        <div className="h-9 w-9 bg-gray-300 rounded-full overflow-hidden">
          <img
            src={profile}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
