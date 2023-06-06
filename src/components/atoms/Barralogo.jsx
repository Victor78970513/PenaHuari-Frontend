import React from 'react'
import "./Barralogo.css"
import Mascara from "../../static/icons/logomascara.svg";
import GPS from "../../static/icons/logogps.svg";
import Boton from './Boton';
const Barralogo = () => {
  return (
    <div className = 'barra-logo'>
        <div className='barra-logo-container'>
            <Boton icono ={Mascara} type={"boton-mascara"}/>
            <samp>Peña-Res</samp>
            <Boton icono ={GPS} type={"boton-gps"}/>

        </div>
        
    </div>
  )
}

export default Barralogo