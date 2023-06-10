import React, { useState } from "react";
import "./BusquedaContenedor.css";
import Boton from "./BotonesHomeScreen";
import Busqueda from "../../static/icons/boton-busqueda.svg";

function BusquedaContenedor() {
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

export default BusquedaContenedor;
