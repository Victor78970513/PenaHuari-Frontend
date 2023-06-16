import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SectionDishPlato from "../../components/atoms/SectionDishPlato";
import "./PresupuestoPlato.css";
import MapTopBar from "../../components/molecules/MapTopBar";
const PresupuestoPlato = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const presupuesto = searchParams.get("presupuesto");
  const [platos, setPlatos] = useState([]);
  useEffect(() => {
    const obtenerPlatosPorPresupuesto = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/presupuesto?presupuesto=${presupuesto}`
        );
        setPlatos(response.data.platos);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPlatosPorPresupuesto();
  }, [presupuesto]);
  return (
    <div className="presupuesto-platos-container">
      <MapTopBar text={"Platos Por Presupuesto"} css={"presupuestoTopBar"} />
      <div className="presu-platos">
        {platos.map((plato) => (
          <SectionDishPlato plato={plato} key={plato.id_comida} />
        ))}
      </div>
    </div>
  );
};

export default PresupuestoPlato;
