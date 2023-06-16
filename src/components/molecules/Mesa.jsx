import React, { useState } from "react";
import Silla from "../atoms/Silla";
import "./Mesa.css";
const Mesa = ({ cantidad_personas,id,onClick}) => {
  const [selectedMesa, setSelectedMesa] = useState(null);
  const handleClick = (number) => {
    setSelectedMesa(number);
    console.log(number);
  };
  return (
    <div className="mesa-container" onClick={onClick}>
      <div className="sillas">
        <Silla />
        <Silla />
      </div>
      <div
        className={selectedMesa === id ? "selected" : "mesa"}
        onClick={() => handleClick(id)}
      >
        {cantidad_personas}
      </div>
      <div className="sillas">
        <Silla />
        <Silla />
      </div>
    </div>
  );
};

export default Mesa;
