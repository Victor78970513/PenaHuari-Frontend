import React, { useState } from "react";
import "./PresupuestoContenedor.css";
import Boton from "./BotonesHomeScreen";
import Presupuesto from "../../static/icons/boton-presupuesto.svg";

function PresupuestoContenedor() {
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
      <Boton icono={Presupuesto} type={"boton-presupuesto"} />
    </div>
  );
}

export default PresupuestoContenedor;
