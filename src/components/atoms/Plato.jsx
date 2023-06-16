import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Plato.css";

const Plato = ({ endpoint }) => {
    const navigate = useNavigate();
  const [platos, setPlatos] = useState([]);
  useEffect(() => {
    const fetchAllplatos = async () => {
      try {
        const res = await axios.get(`http://localhost:3000${endpoint}`);
        setPlatos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllplatos();
  }, []);
  return (
    <div className="platos-container">
      {platos.map((plato) => (
        <div
          className="plato-container"
          key={plato.id_comida}
          onClick={() => navigate(`/detailsDish?id=${plato.id_comida}&imagen=${plato.imagen}&nombre=${plato.nombre}&descripcion=${plato.descripcion}&precio=${plato.precio}`)}
        >
          <span>{plato.nombre}</span>
          <img src={plato.imagen} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Plato;
