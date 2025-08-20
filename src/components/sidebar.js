import React, { useState } from "react";
import "./sidebar.css";
import profilePic from "../assets/myphoto.jpg";
import toggleIcon from "../assets/toggle.png"; // your button image

function Sidebar({ onSelect }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Toggle Button with image */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        <img
          src={toggleIcon}
          alt="toggle"
          className={`toggle-icon ${collapsed ? "rotated" : ""}`}
        />
      </button>

      {/* Sidebar Header */}
      <div className="sidebar-header">
        <img
          src={profilePic}
          alt="profile"
          className="sidebar-avatar"
        />
        {!collapsed && <span className="sidebar-username">Sajib Hassan</span>}
      </div>

      {/* Sidebar Menu */}
      <ul className="sidebar-menu">
        <li onClick={() => onSelect("profile")}>
          <span>👤</span> {!collapsed && "Profile"}
        </li>
        <li onClick={() => onSelect("articles")}>
          <span>📄</span> {!collapsed && "My Articles"}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

