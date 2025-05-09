import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

const AdminDashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden">
        <SidebarAdmin isOpen={sidebarOpen} />

        <main className="flex-1 overflow-auto p-6">
                  <div className="max-w-7xl mx-auto">
                    
                    <Outlet/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
