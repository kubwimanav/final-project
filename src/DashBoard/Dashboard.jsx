// components/Dashboard.js
import React from "react";
import "../Dashstyles/Dashboard.css";

function Dashboard({ activeMenu }) {
  // Sample dashboard content
  const dashboardContent = (
    <div className="dashboard-content">
      <h2 className="dashboard-title">Dashboard Overview</h2>
      <div className="dashboard-stats">
        <div className="dashboard-stat-card">
          <div className="dashboard-stat-icon">🧩</div>
          <div className="dashboard-stat-info">
            <h3>Total Items</h3>
            <p>245</p>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="dashboard-stat-icon">❓</div>
          <div className="dashboard-stat-info">
            <h3>Lost Items</h3>
            <p>128</p>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="dashboard-stat-icon">✓</div>
          <div className="dashboard-stat-info">
            <h3>Found Items</h3>
            <p>117</p>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <div className="dashboard-stat-icon">🔄</div>
          <div className="dashboard-stat-info">
            <h3>Recovered</h3>
            <p>87</p>
          </div>
        </div>
      </div>

      <div className="dashboard-recent">
        <div className="dashboard-recent-items">
          <h3>Recent Items</h3>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Type</th>
                <th>Category</th>
                <th>Location</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#UKM-001</td>
                <td>Lost</td>
                <td>Electronics</td>
                <td>Faculty of IT</td>
                <td>2025-05-03</td>
                <td>
                  <span className="status-pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>#UKM-002</td>
                <td>Found</td>
                <td>Student Card</td>
                <td>Main Library</td>
                <td>2025-05-04</td>
                <td>
                  <span className="status-complete">Returned</span>
                </td>
              </tr>
              <tr>
                <td>#UKM-003</td>
                <td>Lost</td>
                <td>Book</td>
                <td>Cafeteria</td>
                <td>2025-05-04</td>
                <td>
                  <span className="status-pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>#UKM-004</td>
                <td>Found</td>
                <td>USB Drive</td>
                <td>Computer Lab</td>
                <td>2025-05-05</td>
                <td>
                  <span className="status-new">New</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Users management content
  const usersContent = (
    <div className="dashboard-content">
      <h2 className="dashboard-title">Users Management</h2>
      <div className="dashboard-users">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Matric Number</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@ukm.edu.my</td>
              <td>A123456</td>
              <td>Student</td>
              <td>
                <span className="status-active">Active</span>
              </td>
              <td>
                <button className="action-button">Edit</button>
                <button className="action-button action-button-delete">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>jane@ukm.edu.my</td>
              <td>A234567</td>
              <td>Staff</td>
              <td>
                <span className="status-active">Active</span>
              </td>
              <td>
                <button className="action-button">Edit</button>
                <button className="action-button action-button-delete">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mike Johnson</td>
              <td>mike@ukm.edu.my</td>
              <td>A345678</td>
              <td>Student</td>
              <td>
                <span className="status-inactive">Inactive</span>
              </td>
              <td>
                <button className="action-button">Edit</button>
                <button className="action-button action-button-delete">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Items management content
  const itemsContent = (
    <div className="dashboard-content">
      <h2 className="dashboard-title">Items Management</h2>
      <div className="dashboard-actions">
        <button className="dashboard-action-button">Add New Item</button>
        <button className="dashboard-action-button">Export Data</button>
        <button className="dashboard-action-button">Generate Report</button>
      </div>
      <div className="dashboard-items">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Type</th>
              <th>Location</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#UKM-001</td>
              <td>Laptop Charger</td>
              <td>Electronics</td>
              <td>Lost</td>
              <td>Faculty of IT</td>
              <td>2025-05-03</td>
              <td>
                <span className="status-pending">Pending</span>
              </td>
              <td>
                <button className="action-button">View</button>
                <button className="action-button">Edit</button>
                <button className="action-button action-button-delete">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>#UKM-002</td>
              <td>Student Card</td>
              <td>ID</td>
              <td>Found</td>
              <td>Main Library</td>
              <td>2025-05-04</td>
              <td>
                <span className="status-complete">Returned</span>
              </td>
              <td>
                <button className="action-button">View</button>
                <button className="action-button">Edit</button>
                <button className="action-button action-button-delete">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>#UKM-003</td>
              <td>Textbook</td>
              <td>Book</td>
              <td>Lost</td>
              <td>Cafeteria</td>
              <td>2025-05-04</td>
              <td>
                <span className="status-pending">Pending</span>
              </td>
              <td>
                <button className="action-button">View</button>
                <button className="action-button">Edit</button>
                <button className="action-button action-button-delete">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>#UKM-004</td>
              <td>USB Drive</td>
              <td>Electronics</td>
              <td>Found</td>
              <td>Computer Lab</td>
              <td>2025-05-05</td>
              <td>
                <span className="status-new">New</span>
              </td>
              <td>
                <button className="action-button">View</button>
                <button className="action-button">Edit</button>
                <button className="action-button action-button-delete">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Lost items content
  const lostContent = (
    <div className="dashboard-content">
      <h2 className="dashboard-title">Lost Items</h2>
      <div className="dashboard-filters">
        <input
          type="text"
          placeholder="Search lost items..."
          className="filter-search"
        />
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="id">ID Cards</option>
          <option value="keys">Keys</option>
          <option value="other">Other</option>
        </select>
        <button className="filter-button">Filter</button>
      </div>
      <div className="dashboard-items">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Date</th>
              <th>Reported By</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#UKM-001</td>
              <td>Laptop Charger</td>
              <td>Electronics</td>
              <td>Faculty of IT</td>
              <td>2025-05-03</td>
              <td>John Doe</td>
              <td>
                <span className="status-pending">Pending</span>
              </td>
              <td>
                <button className="action-button">View</button>
                <button className="action-button">Mark as Found</button>
              </td>
            </tr>
            <tr>
              <td>#UKM-003</td>
              <td>Textbook</td>
              <td>Book</td>
              <td>Cafeteria</td>
              <td>2025-05-04</td>
              <td>Jane Smith</td>
              <td>
                <span className="status-pending">Pending</span>
              </td>
              <td>
                <button className="action-button">View</button>
                <button className="action-button">Mark as Found</button>
              </td>
            </tr>
            <tr>
              <td>#UKM-005</td>
              <td>Water Bottle</td>
              <td>Other</td>
              <td>Sport Center</td>
              <td>2025-05-05</td>
              <td>Mike Johnson</td>
              <td>
                <span className="status-pending">Pending</span>
              </td>
              <td>
                <button className="action-button">View</button>
                <button className="action-button">Mark as Found</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Found items content
  const foundContent = (
    <div className="dashboard-content">
      <h2 className="dashboard-title">Found Items</h2>
      <div className="dashboard-filters">
        <input
          type="text"
          placeholder="Search found items..."
          className="filter-search"
        />
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="id">ID Cards</option>
          <option value="keys">Keys</option>
          <option value="other">Other</option>
        </select>
        <button className="filter-button">Filter</button>
      </div>
      <div className="dashboard-items">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Date</th>
              <th>Found By</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#UKM-002</td>
              <td>Student Card</td>
              <td>ID</td>
              <td>Main Library</td>
              <td>2025-05-04</td>
              <td>Admin</td>
              <td>
                <span className="status-complete">Returned</span>
              </td>
              <td>
                <button className="action-button">View</button>
              </td>
            </tr>
            <tr>
              <td>#UKM-004</td>
              <td>USB Drive</td>
              <td>Electronics</td>
              <td>Computer Lab</td>
              <td>2025-05-05</td>
              <td>Jane Smith</td>
              <td>
                <span className="status-new">New</span>
              </td>
              <td>
                <button className="action-button">View</button>
                <button className="action-button">Mark as Returned</button>
              </td>
            </tr>
            <tr>
              <td>#UKM-006</td>
              <td>Notebook</td>
              <td>Book</td>
              <td>Faculty of Science</td>
              <td>2025-05-05</td>
              <td>John Doe</td>
              <td>
                <span className="status-new">New</span>
              </td>
              <td>
                <button className="action-button">View</button>
                <button className="action-button">Mark as Returned</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Reports content
  const reportsContent = (
    <div className="dashboard-content">
      <h2 className="dashboard-title">Reports</h2>
      <div className="dashboard-reports">
        <div className="dashboard-report-card">
          <h3>Monthly Report</h3>
          <p>Summary of all items reported in the past month</p>
          <button className="dashboard-action-button">Generate Report</button>
        </div>
        <div className="dashboard-report-card">
          <h3>Category Analysis</h3>
          <p>Breakdown of items by category</p>
          <button className="dashboard-action-button">Generate Report</button>
        </div>
        <div className="dashboard-report-card">
          <h3>Recovery Rate</h3>
          <p>Analysis of item recovery success rate</p>
          <button className="dashboard-action-button">Generate Report</button>
        </div>
        <div className="dashboard-report-card">
          <h3>Location Trends</h3>
          <p>Hotspots where items are frequently lost or found</p>
          <button className="dashboard-action-button">Generate Report</button>
        </div>
      </div>
    </div>
  );

  // Settings content
  const settingsContent = (
    <div className="dashboard-content">
      <h2 className="dashboard-title">Settings</h2>
      <div className="dashboard-settings">
        <div className="settings-section">
          <h3>General Settings</h3>
          <div className="settings-row">
            <label>System Name</label>
            <input type="text" value="FoundeLost" />
          </div>
          <div className="settings-row">
            <label>Contact Email</label>
            <input type="email" value="admin@ukm.edu.my" />
          </div>
          <div className="settings-row">
            <label>Item Expiry Period (Days)</label>
            <input type="number" value="30" />
          </div>
        </div>

        <div className="settings-section">
          <h3>Email Notifications</h3>
          <div className="settings-row">
            <label>Send email for new item</label>
            <input type="checkbox" checked />
          </div>
          <div className="settings-row">
            <label>Send email for item match</label>
            <input type="checkbox" checked />
          </div>
          <div className="settings-row">
            <label>Send email for item expiry</label>
            <input type="checkbox" checked />
          </div>
        </div>

        <div className="settings-section">
          <h3>Security</h3>
          <div className="settings-row">
            <label>Password Expiry (Days)</label>
            <input type="number" value="90" />
          </div>
          <div className="settings-row">
            <label>Allow User Registration</label>
            <input type="checkbox" checked />
          </div>
          <div className="settings-row">
            <label>Require UKM Email</label>
            <input type="checkbox" checked />
          </div>
        </div>

        <button className="settings-save-button">Save Changes</button>
      </div>
    </div>
  );

  // Render the appropriate content based on the activeMenu
  let content;
  switch (activeMenu) {
    case "users":
      content = usersContent;
      break;
    case "items":
      content = itemsContent;
      break;
    case "lost":
      content = lostContent;
      break;
    case "found":
      content = foundContent;
      break;
    case "reports":
      content = reportsContent;
      break;
    case "settings":
      content = settingsContent;
      break;
    default:
      content = dashboardContent;
  }

  return content;
}

export default Dashboard;
