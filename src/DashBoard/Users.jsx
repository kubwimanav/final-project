import React from 'react'

function Users() {
  return (
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
}

export default Users