import React, { useState, useEffect } from "react";
import "../orders/Orders.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MapTopBar from "../../components/molecules/MapTopBar";
import Button from "../../components/atoms/Button";

const Reserve = ({ mesas }) => {
  console.log(mesas)
  const navigate = useNavigate();

  const handleSubmit = () => {
    const reservaMesas = mesas.map((mesa)=>({
      id_mesa:mesa.id_mesa,
    }));
    const reserva = {mesas: reservaMesas};

    axios.post("http://localhost:3000/reservamesa",reserva)
    .then((res)=>{console.log(res); res.data.Status === "Success" ? navigate("/"):alert("Error")})
    .catch((err) => console.log(err));
  }

  return (
    <div className="orders-container">
      <MapTopBar text={"Orders"} css={"order-top-bar"} />
      <div className="line-order"></div>
      <div className="lista-de-platos">
        {mesas.length > 0 ? (
          <div className="container-1">
            <div className="items-container">
              {mesas.map((mesa, index) => (
                <div className="item-reserva" key={index}>
                  <div className="item-name">
                    <span style={{ marginRight: "10px" }}>1.</span>
                    <span>Mesa Nro {mesa.id_mesa}</span>
                  </div>
                  <div className="item-price">{mesa.capacidad} p</div>
                </div>
              ))}
            </div>
            <div className="total-container">
              <div className="line-order-2"></div>
              <div className="total-price">
                <span style={{ color: "white" }}>Total</span> <span>{mesas.length} mesa</span>
              </div>
            </div>
          </div>
        ) : (
          <span style={{ color: "white", fontSize: "15px" }}>
            No hay Platos o mesas seleccionados
          </span>
        )}
      </div>
      <div className="lista-platos-imagenes">
        {mesas.length > 0 ? (
          mesas.map((mesa, index) => (
            <div key={index}>
              <div className="plato-order" key={index}>
                <img src="../../src/assets/mesa.jpeg" alt="" key={index} />
                <span>{`mesa para ${mesa.capacidad} personas`}</span>
              </div>
            </div>
          ))
        ) : (
          <span style={{ color: "white", fontSize: "15px" }}>
            No hay Platos o mesas seleccionados
          </span>
        )}
      </div>
      <Button
        icon={"solar:hand-money-linear"}
        css={"payment-button"}
        text={"Proceed to checkout"}
        onClick={()=>handleSubmit()}
      />
    </div>
  );
};

export default Reserve;