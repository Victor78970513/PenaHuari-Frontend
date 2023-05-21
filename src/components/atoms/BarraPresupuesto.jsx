import React, { useState } from "react";
import "./BarraPresupuesto.css";
import BotonPresupuesto from "./BotonPresupuesto";

function BarraPresupuesto() {
  const [budget, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="barra-presupuesto-container">
      <input
        type="number"
        id="name"
        placeholder="Enter your budget"
        value={budget}
        onChange={handleChange}
        className="barra-presupuesto-input"
      />
      <BotonPresupuesto/>
    </div>
  );
}

export default BarraPresupuesto;
