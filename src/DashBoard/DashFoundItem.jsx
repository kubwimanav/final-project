
import React from 'react'

function DashFoundItem() {
  return (
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
 
  )
}

export default DashFoundItem