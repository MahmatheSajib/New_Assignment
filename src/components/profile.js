import React from "react";
import "./profile.css";
import profilePic from "../assets/myphoto.jpg";

function Profile() {
  return (
    <div className="profile-container">
      <img
         src={profilePic} 
        alt="Profile"
        className="profile-pic"
      />
      <h2>sojib Hassan</h2>
      <p><strong>ID:</strong> 20230104126</p>
      <p><strong>Section:</strong> C2</p>
      <p><strong>Session:</strong> Fall-2024</p>
      <p><strong>Lab:</strong> Software Development</p>
    </div>
  );
}

export default Profile;
