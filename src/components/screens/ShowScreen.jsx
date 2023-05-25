import React from "react";
import Boton from "../atoms/Boton";
import ShowsContainer from "../atoms/ShowsContainer";
import Arrow from "../../static/icons/arrow_back.svg";
import "./ShowScreen.css";

const ShowScreen = () => {
  return (
    <div className="show-screen">
      <div className="show-title-area">
        <Boton icono={Arrow} name_class={"boton-arrow"} />
        <h4>Shows</h4>
      </div>
      <ShowsContainer />
    </div>
  );
};

export default ShowScreen;