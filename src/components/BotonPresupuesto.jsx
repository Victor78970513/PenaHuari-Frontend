import React from 'react'
import Presupuesto from "../../public/static/icons/boton-presupuesto.svg";
import "./BotonPresupuesto.css"

const BotonPresupuesto = () => {
    const handleClick = () => {
        console.log("boton presupuesto funcionando");
    };
  return (
    <div>
        <button onClick={handleClick} className='boton-presupuesto'>
        <img src={Presupuesto} alt="Presupuesto" />
        </button>
    </div>
  )
}

export default BotonPresupuesto