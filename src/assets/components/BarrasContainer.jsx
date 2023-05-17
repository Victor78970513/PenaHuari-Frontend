import React from 'react'
import BarraBusqueda from './BarraBusqueda'
import BarraPresupuesto from './BarraPresupuesto'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import './BarrasContainer.css'

const BarrasContainer = () => {
  return (
    <div className='barras-container'>
        <BarraBusqueda/>
        <span className='barra-presupuesto'>
            <BarraPresupuesto/>
            <span>
                <FontAwesomeIcon icon={faHandHoldingDollar} />
            </span>
        </span>
        
    </div>
  )
}

export default BarrasContainer