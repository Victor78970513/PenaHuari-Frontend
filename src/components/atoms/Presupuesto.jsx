import React from "react";
import IconButton from "./IconButton.jsx";
import "./Presupuesto.css";
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
    </div>
  );
};

export default Presupuesto;
