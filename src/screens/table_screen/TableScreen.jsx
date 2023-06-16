import React, { useEffect, useState } from "react";
// import Mesa from "../../molecules/Mesa";
import "./TableScreen.css";
// import Button from "../../atoms/Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Mesa from "../../components/molecules/Mesa";
import Button from "../../components/atoms/Button";

const TableScreen = ({ addMesa }) => {
  const [mesas, setMesas] = useState([]);
  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const res = await axios.get("http://localhost:3000/mesas");
        setMesas(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMesas();
  }, []);
  const handleMesaClick = (mesa) => {
    addMesa(mesa);
  };
  return (
    <div className="table-container">
      <span className="titulo">Reservations</span>
      <span
        style={{ color: "white", marginLeft: "30px", marginBottom: "31px" }}
      >
        Select a table
      </span>
      <div className="table-mesa">
        <div className="row">
          {mesas.slice(0, 2).map((mesa) => (
            <Mesa
              key={mesa.id_mesa}
              id={mesa.id_mesa}
              cantidad_personas={mesa.capacidad}
              onClick={()=>{
                handleMesaClick({id_mesa:mesa.id_mesa,capacidad:mesa.capacidad})
              }}
            />
          ))}
        </div>
        <div className="row">
          {mesas.slice(2, 4).map((mesa) => (
            <Mesa
              key={mesa.id_mesa}
              id={mesa.id_mesa}
              cantidad_personas={mesa.capacidad}
              onClick={()=>{
                handleMesaClick({id_mesa:mesa.id_mesa,capacidad:mesa.capacidad})
              }}
            />
          ))}
        </div>
        <div className="row">
          {mesas.slice(4, 6).map((mesa) => (
            <Mesa
              key={mesa.id_mesa}
              id={mesa.id_mesa}
              cantidad_personas={mesa.capacidad}
              onClick={()=>{
                handleMesaClick({id_mesa:mesa.id_mesa,capacidad:mesa.capacidad})
              }}
            />
          ))}
        </div>
      </div>
      <NavLink className={"navlink"} to={"/reserve"}><Button css={"reserve-button"} text={"Reserve"}/></NavLink>
    </div>
  );
};

export default TableScreen;




// import React from "react";
// import TableContainer from "../../components/molecules/TableContainer";
// import Boton from "../../components/atoms/Boton";
// import "./TableScreen.css";

// const TableScreen = () => {
//   return (
//     <div className="table-screen">
//       <div className="table-screen-title">
//         <h4>Reservations</h4>
//         <h5>Select a table</h5>
//       </div>
//       <TableContainer />
//       <Boton type={"boton-reserva"} name_button={"Reserva"} />
//     </div>
//   );
// };

// export default TableScreen;
