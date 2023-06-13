import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import IconButton from "../../components/atoms/IconButton";
import Button from "../../components/atoms/Button";
import "./DetailsDish.css";

const DetailsDish = ({ addItem }) => {
  const handleItemClick = (item) => {
    addItem(item);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const imagen = searchParams.get("imagen");
  const nombre = searchParams.get("nombre");
  const descripcion = searchParams.get("descripcion");
  const precio = searchParams.get("precio");
  const [cantidad, setCantidad] = useState(1);
  const [precioTotal, setPrecioTotal] = useState(precio);
  const addCantidad = () => {
    const nuevaCantidad = cantidad + 1;
    const nuevoPrecioTotal = precio * nuevaCantidad;
    setCantidad(nuevaCantidad);
    setPrecioTotal(nuevoPrecioTotal);
    console.log(nuevaCantidad);
  };
  const removeCantidad = () => {
    if (cantidad > 0) {
      const nuevaCantidad = cantidad - 1;
      const nuevoPrecioTotal = precio * nuevaCantidad;
      setCantidad(nuevaCantidad);
      setPrecioTotal(nuevoPrecioTotal);
      console.log(nuevaCantidad);
    }
  };
  return (
    <div className="details-dish-container">
      <Icon
        className="details-icon"
        icon="mdi:arrow-back"
        onClick={() => navigate("/")}
      />
      <img className="plato-image" src={imagen} alt="" />
      <span>{nombre}</span>
      <p>{descripcion}</p>
      <div className="precio-container">
        <div className="cantidad-container">
          <IconButton
            icon={"gg:remove"}
            css={"cantidad-icon"}
            onClick={() => removeCantidad()}
          />
          <span>{cantidad}</span>
          <IconButton
            icon={"gg:add"}
            css={"cantidad-icon"}
            onClick={() => addCantidad()}
          />
        </div>
        <div className="precio-total">{`Bs. ${precioTotal}`}</div>
      </div>
      <Button
        css={"add-to-cart-button"}
        text={"Add to cart"}
        icon={"fa6-solid:shop"}
        onClick={()=> {
          handleItemClick({name:nombre,price:precioTotal,cantidad:cantidad,image:imagen})
          navigate("/orders")
        }}
      />
    </div>
  );
};

export default DetailsDish;
