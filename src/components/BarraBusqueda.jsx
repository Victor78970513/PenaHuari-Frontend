import React, { useState } from "react";
import "./BarraBusqueda.css";
import BotonBusqueda from "./BotonBusqueda";

function BarraBusqueda() {
  const [dish, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="barra-busqueda">
      <div className="barra-busqueda-container">
        <BotonBusqueda/>
        <input
          type="text"
          id="name"
          placeholder="Search..."
          value={dish}
          onChange={handleChange}
          className="barra-busqueda-input"
        />
      </div>
    </div>
  );
}

export default BarraBusqueda;
