// App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import NavbarDash from './NavbarDash';
import '../Dashstyles/Layoutdash.css'; 

function Layoutdash() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <NavbarDash toggleSidebar={toggleSidebar} />
      <div className="app-content">
        <Sidebar isOpen={sidebarOpen} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <main className="app-main">
          <Dashboard activeMenu={activeMenu} />
        </main>
      </div>
    </div>
  );
}

export default Layoutdash;