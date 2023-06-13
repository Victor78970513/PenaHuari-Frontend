import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import "./ProfileButton.css";
const ProfileButton = ({ icon, text, onClick }) => {
  return (
    <div className="profile-button" onClick={onClick}>
      <div className="container1">
        <Icon className="icons" icon={icon} />
        <span>{text}</span>
      </div>
      <Icon className="arrow-icon" icon="mingcute:right-fill" />
    </div>
  );
};

export default ProfileButton;
