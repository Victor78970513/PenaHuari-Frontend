import React from "react";
import IconButton from "./IconButton.jsx";
import "./Presupuesto.css";
import { NavLink } from "react-router-dom";
const Presupuesto = ({ onChange, value, name ,onClick}) => {
  return (
    <div className="presupuesto-container">
      <div className="presupuesto">
        <input
          className="presupuesto-input"
          type="number"
          placeholder="Enter your Budget"
          onChange={onChange}
          value={value}
          name={name}
        />
      </div>
      <IconButton css={"presupuesto-icon"} icon={"solar:hand-money-linear"} onClick={onClick}/>
      <a href="https://landbot.online/v3/H-1632889-RBC3254X8BX4IUV2/index.html"><IconButton css={"presupuesto-icon"} icon={"fluent:chat-32-filled"}/></a>
    </div>
  );
};

export default Presupuesto;
