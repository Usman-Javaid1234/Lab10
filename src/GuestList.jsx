import React from "react";

function GuestList({ guests, onToggleConfirmation, onDeleteGuest }) {
  // If there are no guests, show a message
  if (guests.length === 0) {
    return (
      <div className="guest-list-container">
        <div className="guest-list-header">
          <h2>Guest List</h2>
        </div>
        
        <div className="guest-list-content">
          <div className="empty-state">
            <div className="empty-state-icon">👥</div>
            <h3>No guests yet</h3>
            <p>Add your first guest using the form</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="guest-list-container">
      <div className="guest-list-header">
        <h2>Guest List</h2>
      </div>
      
      <div className="guest-list-content">
        <table className="guest-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {guests.map(function (guest) {
              return (
                <tr key={guest.id}>
                  <td>{guest.name}</td>
                  <td>{guest.email}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        guest.confirmed ? "status-confirmed" : "status-pending"
                      }`}
                    >
                      {guest.confirmed ? "Confirmed" : "Pending"}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={function () {
                        onToggleConfirmation(guest.id);
                      }}
                      className={`btn btn-sm ${
                        guest.confirmed ? "btn-undo" : "btn-confirm"
                      }`}
                    >
                      {guest.confirmed ? "Undo" : "Confirm"}
                    </button>
                    <button
                      onClick={function () {
                        onDeleteGuest(guest.id);
                      }}
                      className="btn btn-sm btn-remove"
                      style={{ marginLeft: "8px" }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GuestList;