import React from "react";
import Boton from "../../components/atoms/Boton";
import ShowsContainer from "../../components/atoms/ShowsContainer";
import BotonRegresar from "../../static/icons/arrow_back.svg";
import "./ShowScreen.css";

const ShowScreen = () => {
  return (
    <div className="show-screen">
      <div className="show-title-area">
        <Boton icono={BotonRegresar} type={"boton-arrow"} name_class={"boton-arrow"} />
        <h4>Shows</h4>
      </div>
      <ShowsContainer />
    </div>
  );
};

export default ShowScreen;