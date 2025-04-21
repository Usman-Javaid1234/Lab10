import React, { useState } from "react";

function GuestForm({ onAddGuest }) {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  // Handle name input change
  function handleNameChange(event) {
    setName(event.target.value);

    // Clear error when typing
    if (event.target.value) {
      setErrors({ ...errors, name: "" });
    }
  }

  // Handle email input change
  function handleEmailChange(event) {
    setEmail(event.target.value);

    // Clear error when typing
    if (event.target.value) {
      setErrors({ ...errors, email: "" });
    }
  }

  // Handle form submission
  function handleSubmit(event) {
    // Prevent page from reloading
    event.preventDefault();

    // Validate inputs
    const newErrors = { name: "", email: "" };
    let isValid = true;

    if (name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Call parent function to add guest
    onAddGuest(name, email);

    // Clear form after submission
    setName("");
    setEmail("");
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Add New Guest</h2>
      </div>
      
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Guest Name</label>
            <input
              type="text"
              id="name"
              className={`form-control ${errors.name ? "error" : ""}`}
              value={name}
              onChange={handleNameChange}
              placeholder="Enter full name"
            />
            {errors.name && (
              <div className="error-message">{errors.name}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              className={`form-control ${errors.email ? "error" : ""}`}
              value={email}
              onChange={handleEmailChange}
              placeholder="email@example.com"
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Add Guest
          </button>
        </form>
      </div>
    </div>
  );
}

export default GuestForm;