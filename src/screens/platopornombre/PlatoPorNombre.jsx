import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SectionDishPlato from "../../components/atoms/SectionDishPlato";
import "../presupuesto/PresupuestoPlato.css";
import MapTopBar from "../../components/molecules/MapTopBar";
const PlatoPorNombre = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nombre = searchParams.get("nombre");
  const [platos, setPlatos] = useState([]);
  useEffect(() => {
    const obtenerPlatosPorNombre = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/platopornombre?nombre=${nombre}`
        );
        setPlatos(response.data.platos);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPlatosPorNombre();
  }, [nombre]);
  return (
    <div className="presupuesto-platos-container">
      <MapTopBar text={"Platos Por Nombre"} css={"presupuestoTopBar"} />
      <div className="presu-platos">
        {platos.map((plato) => (
          <SectionDishPlato plato={plato} key={plato.id_comida} />
        ))}
      </div>
    </div>
  );
};

export default PlatoPorNombre;