import React from 'react'
import BarraBusqueda from './BarraBusqueda'
import BarraPresupuesto from './BarraPresupuesto'
import './BarrasContainer.css'

const BarrasContainer = () => {
  return (
    <div className='barras-container'>
        <BarraBusqueda/>
        <BarraPresupuesto/>
    </div>
  )
}

export default BarrasContainer