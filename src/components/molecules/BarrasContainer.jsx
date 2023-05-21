import React from 'react'
import BarraBusqueda from '../atoms/BarraBusqueda'
import BarraPresupuesto from '../atoms/BarraPresupuesto'
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