import React from "react";
import "./TableContainer.css";
import Table from "../atoms/Table";

const TableContainer = () => {
  const tableElements = [];

  for (let i = 1; i < 7; i++) {
    tableElements.push(<Table table={i} key={i} />);
  }

  return <div className="tables-container">{tableElements}</div>;
};

export default TableContainer;
