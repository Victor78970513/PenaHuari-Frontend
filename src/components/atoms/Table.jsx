import React from "react";
import "./Table.css";
import Boton from "./Boton";
const Table = ({ table }) => {
  return (
    <div className="table-container">
      <div className="sillas-container">
        <div className="silla-izquierda"></div>
        <div className="silla-derecha"></div>
      </div>
      <div className="mesa-container">
        <Boton name_class={"mesa"} name_button={table} />
      </div>
      <div className="sillas-container">
        <div className="silla-izquierda"></div>
        <div className="silla-derecha"></div>
      </div>
    </div>
  );
};

export default Table;