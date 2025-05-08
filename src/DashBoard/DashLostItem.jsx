import React from 'react'

function DashLostItem() {
  return (
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
}

export default DashLostItem