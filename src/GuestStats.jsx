import React from "react";

function GuestStats({ guests }) {
  // Calculate stats
  const totalGuests = guests.length;

  // Count confirmed guests
  let confirmedGuests = 0;
  for (let i = 0; i < guests.length; i++) {
    if (guests[i].confirmed) {
      confirmedGuests++;
    }
  }

  // Calculate pending guests
  const pendingGuests = totalGuests - confirmedGuests;

  // Calculate confirmation percentage
  const confirmationPercentage = totalGuests > 0 
    ? Math.round((confirmedGuests / totalGuests) * 100) 
    : 0;

  return (
    <div className="stats-container">
      <div className="stats-header">
        <h2>Guest Summary</h2>
      </div>
      
      <div className="stats-content">
        <div className="stats-grid">
          <div className="stat-card total">
            <div className="stat-value">{totalGuests}</div>
            <div className="stat-label">Total Guests</div>
          </div>
          
          <div className="stat-card confirmed">
            <div className="stat-value">{confirmedGuests}</div>
            <div className="stat-label">Confirmed</div>
          </div>
          
          <div className="stat-card pending">
            <div className="stat-value">{pendingGuests}</div>
            <div className="stat-label">Pending</div>
          </div>
        </div>
        
        {totalGuests > 0 && (
          <div className="progress-container">
            <div className="progress-bar-container">
              <div 
                className="progress-bar" 
                style={{ width: `${confirmationPercentage}%` }}
              ></div>
            </div>
            <div className="progress-label">
              Confirmation Rate: {confirmationPercentage}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GuestStats;