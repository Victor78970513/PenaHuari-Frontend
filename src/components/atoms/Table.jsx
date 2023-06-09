import React from "react";
import "./Table.css";
import Boton from "./Boton";
import Sillas from "./Sillas";
const Table = ({ table }) => {
  return (
    <div className="table-container">
      <Sillas />
      <div className="mesa-container">
        <Boton type={"mesa"} name_button={table} />
      </div>
      <Sillas />
    </div>
  );
};

export default Table;
