import React from "react";
import "./Boton.css";

const Boton = ({ icono, name_class }) => {
  const handleClick = () => {
    console.log("boton funcionando");
  };
  return (
    <div>
      <button onClick={handleClick} className={name_class}>
        <img src={icono} alt="" />
      </button>
    </div>
  );
};
export default Boton;