import React from "react";
import "./SectionDishPlato.css";
import { NavLink } from "react-router-dom";
const SectionDishPlato = (props) => {
  const plato = props.plato;
  return (
    <NavLink to={`/detailsDish?imagen=${plato.imagen}&nombre=${plato.nombre}&descripcion=${plato.descripcion}&precio=${plato.precio}`} className="navlink">
      <div className="section-dish-plato-container">
        <img src={plato.imagen} alt="" />
        <div className="desc">
          <span style={{ fontSize: "16px", fontWeight: 700 }}>
            {plato.nombre}
          </span>
          <p className="parrafo">{plato.descripcion}</p>
          <span style={{ fontSize: "16px", fontWeight: 700 }}>
            {plato.precio} Bs.
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default SectionDishPlato;
