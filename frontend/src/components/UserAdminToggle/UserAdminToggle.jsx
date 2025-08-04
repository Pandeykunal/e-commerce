import React, { useState } from "react";
import "./UserAdminToggle.css";

const UserAdminToggle = ({ onToggle }) => {
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  const handleToggle = () => {
    const newRole = role === "user" ? "admin" : "user";
    setRole(newRole);
    onToggle(newRole);
    localStorage.setItem("role", newRole);
  };

  return (
    <div className="toggle-wrapper">
      <div className="toggle-container">
        <span className={`label ${role === "user" ? "active" : ""}`}>User</span>

        <label className="switch">
          <input type="checkbox" onChange={handleToggle} checked={role === "admin"} />
          <span className="slider"></span>
        </label>

        <span className={`label ${role === "admin" ? "active" : ""}`}>Admin</span>
      </div>

      <p className="current-role">
        Current Role: <strong>{role}</strong>
      </p>
    </div>
  );
};

export default UserAdminToggle;
