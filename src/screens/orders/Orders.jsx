import React, { useState } from "react";
// import MapTopBar from "../../molecules/MapTopBar";
import "./Orders.css";
import MapTopBar from "../../components/molecules/MapTopBar";
import Button from "../../components/atoms/Button";
// import Button from "../../atoms/Button";
const Orders = ({ items }) => {
  let totalPrice = 0;
  for(let i = 0; i<items.length;i++){
    totalPrice += parseFloat(items[i].price);
  }
  return (
    <div className="orders-container">
      <MapTopBar text={"Orders"} css={"order-top-bar"} />
      <div className="line-order"></div>
      <div className="lista-de-platos">
        {items.length > 0 ? (
          <div className="container-1">
            <div className="items-container">
              {items.map((item, index) => (
                <div className="item-reserva" key={index}>
                  <div className="item-name">
                    <span style={{ marginRight: "10px" }}>
                      {item.cantidad}.
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <div className="item-price">Bs.{item.price}</div>
                </div>
              ))}
            </div>
            <div className="total-container">
              <div className="line-order-2"></div>
              <div className="total-price"><span style={{color:"white"}}>Total</span> <span>{totalPrice} Bs.</span></div>
            </div>
          </div>
        ) : (
          <span style={{ color: "white", fontSize: "15px" }}>
            No hay Platos o mesas seleccionados
          </span>
        )}
      </div>
      <div className="lista-platos-imagenes">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index}>
              <div className="plato-order" key={index}>
                <img src={item.image} alt="" key={index} />
                <span>{item.name}</span>
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
      />
    </div>
  );
};

export default Orders;
