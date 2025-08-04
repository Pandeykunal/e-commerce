// MainApp.jsx
import React, { useState } from "react";
import App from "./App"; // Admin version
import AppUser from "./AppUser"; // User version
import UserAdminToggle from "./components/UserAdminToggle/UserAdminToggle";

const MainApp = () => {
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  const handleToggle = (newRole) => {
    setRole(newRole);
    localStorage.setItem("role", newRole);
  };

  return (
    <>
      <UserAdminToggle onToggle={handleToggle} />
      {role === "user" ? <AppUser /> : <App />}
    </>
  );
};

export default MainApp;
