import React, { useState } from "react";
import "./BarraBusqueda.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function BarraBusqueda() {
  const [dish, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="barra-busqueda">
      <div className="barra-busqueda-container">
        <span className="barra-busqueda-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
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
