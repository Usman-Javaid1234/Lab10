import React, { useState } from "react";
import GuestForm from "./GuestForm";
import GuestList from "./GuestList";
import GuestStats from "./GuestStats";
import "./styles.css";

function EventPlanner() {
  // List of guests with basic information
  const [guests, setGuests] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", confirmed: false },
    { id: 2, name: "Jane Smith", email: "jane@example.com", confirmed: false },
    { id: 3, name: "Alex Johnson", email: "alex@example.com", confirmed: true },
  ]);

  // Function to add a new guest
  function addGuest(name, email) {
    // Check if inputs are not empty
    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    // Check if email already exists
    const emailExists = guests.some((guest) => guest.email === email);
    if (emailExists) {
      alert("This email is already in the guest list");
      return;
    }

    // Create new guest object
    const newGuest = {
      id: Date.now(), // Simple way to create unique IDs
      name: name,
      email: email,
      confirmed: false,
    };

    // Add new guest to the list
    setGuests([...guests, newGuest]);
  }

  // Function to toggle guest confirmation status
  function toggleConfirmation(guestId) {
    // Create new array with updated guest
    setGuests(
      guests.map(function (guest) {
        if (guest.id === guestId) {
          // If this is the guest we want to update, toggle confirmed status
          return {
            ...guest,
            confirmed: !guest.confirmed,
          };
        } else {
          // For all other guests, keep them the same
          return guest;
        }
      })
    );
  }

  // Function to delete a guest
  function deleteGuest(guestId) {
    // Ask for confirmation before deleting
    if (window.confirm("Are you sure you want to remove this guest?")) {
      // Filter out the guest with the given ID
      setGuests(
        guests.filter(function (guest) {
          return guest.id !== guestId;
        })
      );
    }
  }

  return (
    <div className="container">
      <div className="app-title">
        <h1>Event Planner</h1>
        <p>Manage your event guests efficiently</p>
      </div>

      <div className="event-planner">
        <div className="event-content">
          {/* Stats Section */}
          <GuestStats guests={guests} />

          <div className="main-content">
            {/* Guest Form */}
            <GuestForm onAddGuest={addGuest} />
            
            {/* Guest List */}
            <GuestList
              guests={guests}
              onToggleConfirmation={toggleConfirmation}
              onDeleteGuest={deleteGuest}
            />
          </div>
        </div>
      </div>
      
      <div className="footer">
        <p>CS-343: Web Technologies - Lab 10</p>
        <p>BSCS-13E - Dr. Qaiser Riaz</p>
      </div>
    </div>
  );
}

export default EventPlanner;