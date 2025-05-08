
import React from 'react';
import '../Dashstyles/Sidebar.css'; 

function Sidebar({ isOpen, activeMenu, setActiveMenu }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'items', label: 'Items', icon: '🧩' },
    { id: 'lost', label: 'Lost Items', icon: '❓' },
    { id: 'found', label: 'Found Items', icon: '✓' },
    { id: 'reports', label: 'Reports', icon: '📝' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className={`sidebar-menu-item ${activeMenu === item.id ? 'sidebar-menu-active' : ''}`}
            onClick={() => setActiveMenu(item.id)}
          >
            <span className="sidebar-menu-icon">{item.icon}</span>
            <span className="sidebar-menu-label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <p>© 2025 FoundeLost System</p>
      </div>
    </aside>
  );
}

export default Sidebar;

