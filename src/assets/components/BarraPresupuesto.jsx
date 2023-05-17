import React, { useState } from "react";
import "./BarraPresupuesto.css";

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
    </div>
  );
}

export default BarraPresupuesto;
