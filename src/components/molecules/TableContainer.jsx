import React from "react";
import "./TableContainer.css";
import Table from "../atoms/Table";

const TableContainer = () => {
  return (
    <div className="tables-container">
      <Table table={1} key={1} />
      <Table table={2} key={2} />
      <Table table={3} key={3} />
      <Table table={4} key={4} />
      <Table table={5} key={5} />
      <Table table={6} key={6} />
    </div>
  );
};
export default TableContainer;
