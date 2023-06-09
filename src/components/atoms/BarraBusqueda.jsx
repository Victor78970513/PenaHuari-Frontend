import React, { useState } from "react";
import "./BarraBusqueda.css";
import Busqueda from "../../static/icons/boton-busqueda.svg";
import Boton from "./Boton";

function BarraBusqueda() {
  const [dish, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="barra-busqueda">
      <div className="barra-busqueda-container">
        <Boton icono={Busqueda} type={"boton-busqueda"} />
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
