import React, { useState } from "react";
import "./Boton.css";

const Boton = ({ icono, type, name_button }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const handleClick = () => {
    setIsButtonActive(!isButtonActive);

    switch (type) {
      case "mesa":
        console.log("Mesa seleccionada");
        break;
      case "boton-reserva":
        console.log("Mesa Reservada");
        break;
    }
  };
  const name_class = `${type} ${isButtonActive ? "active" : ""}`;
  return (
    <div>
      <button onClick={handleClick} className={name_class}>
        <img src={icono} alt="" />
        {name_button}
      </button>
    </div>
  );
};
export default Boton;
