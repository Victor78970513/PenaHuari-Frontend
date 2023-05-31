import React from "react";
import "./TableContainer.css";
import Table from "../atoms/Table";

const TableContainer = () => {
  const numbersTable = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  const columnas = 2 ; 

  return (
    <div className="tables-container">
        {numbersTable.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((element, colIndex) => (
            <div key={colIndex} className={element}>
              <Table table={element} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableContainer;
