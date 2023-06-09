import React from "react";
import TableContainer from "../../components/molecules/TableContainer";
import Boton from "../../components/atoms/Boton";
import "./TableScreen.css";

const TableScreen = () => {
  return (
    <div className="table-screen">
      <div className="table-screen-title">
        <h4>Reservations</h4>
        <h5>Select a table</h5>
      </div>
      <TableContainer />
      <Boton type={"boton-reserva"} name_button={"Reserva"} />
    </div>
  );
};

export default TableScreen;
