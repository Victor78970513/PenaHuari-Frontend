import React from "react";
import "./Boton.css";

const Boton = ({ icono, name_class, name_button }) => {
  const handleClick = () => {
    console.log("boton funcionando");
  };
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
