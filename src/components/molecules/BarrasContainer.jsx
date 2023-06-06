import React from "react";
import BarraBusqueda from "../atoms/BarraBusqueda";
import BarraPresupuesto from "../atoms/BarraPresupuesto";
import "./BarrasContainer.css";
import Barralogo from "../atoms/Barralogo";

const BarrasContainer = () => {
  return (
    <div className="barras-container">
      <Barralogo/>
      <BarraBusqueda />
      <BarraPresupuesto />
    </div>
  );
};

export default BarrasContainer;