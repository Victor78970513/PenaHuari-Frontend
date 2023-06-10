import React from "react";
import BusquedaContenedor from "../atoms/BusquedaContenedor";
import PresupuestoContenedor from "../atoms/PresupuestoContenedor";
import LogoContenedor from "../atoms/LogoContenedor";
import "./OrganismosTitle.css";

const OrganismosTitle = () => {
  return (
    <div className="barras-container">
      <LogoContenedor/>
      <BusquedaContenedor />
      <PresupuestoContenedor />
    </div>
  );
};

export default OrganismosTitle;