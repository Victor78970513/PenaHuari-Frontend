import React, { useState } from "react";
import "./HomeScreen.css";
import TopBar from "../../components/molecules/TopBar";
import Search from "../../components/atoms/Search";
import Presupuesto from "../../components/atoms/Presupuesto";
import Section from "../../components/organisms/Section";
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {
  const navigate = useNavigate();
  const [presupuesto, setPresupuesto] = useState("");
  const [nombrePlato, setNombrePlato] = useState("");
  const handleChange = (event) => {
    setPresupuesto(event.target.value);
  };
  const handleChangeNombre = (event) => {
    setNombrePlato(event.target.value);
  };
  return (
    <div className="home-screen">
      <TopBar />
      <Search
        onChange={handleChangeNombre}
        value={nombrePlato}
        name={"nombrePlato"}
        onClick={()=>navigate(`/platoPorNombre?nombre=${nombrePlato}`)}
      />
      <Presupuesto
        onChange={handleChange}
        value={presupuesto}
        name={"presupuesto"}
        onClick={() => navigate(`/presupuestoPlato?presupuesto=${presupuesto}`)}
      />
      <Section />
    </div>
  );
};

export default HomeScreen;
