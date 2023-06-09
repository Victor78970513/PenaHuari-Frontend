import React, { useEffect, useState } from 'react';
import Boton from "../../components/atoms/Boton";
import ShowsContainer from "../../components/atoms/ShowsContainer";
import BotonRegresar from "../../static/icons/arrow_back.svg";
import "./ShowScreen.css";
import { getShow } from '../../services/services';
import { NavLink } from 'react-router-dom';

const ShowScreen = () => {
  const [shows, setShow] = useState([]);
  useEffect(() => {
    getShow("shows").then((data)=> setShow(data))
  }, []);
  return (
    <div className="show-screen">
      <div className="show-title-area">
        
      {/* <NavLink to="/table"> */}
        <Boton icono={BotonRegresar} type={"boton-arrow"} name_class={"boton-arrow"} />
      {/* </NavLink> */}
        
        <h4>Shows</h4>
      </div>
      <ShowsContainer shows={shows} />
    </div>
  );
};

export default ShowScreen;