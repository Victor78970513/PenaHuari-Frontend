import React from 'react'
import Busqueda from "../../../public/static/icons/boton-busqueda.svg";
import "./BotonBusqueda.css"

const BotonBusqueda = () => {
    const handleClick = () => {
        console.log("boton busqueda funcionando");
    };
  return (
    <div>
        <button onClick={handleClick} className='boton-busqueda'>
        <img src={Busqueda} alt="Busqueda" />
        </button>
    </div>
  )
}

export default BotonBusqueda