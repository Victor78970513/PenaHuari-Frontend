import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './BarraBusqueda.css'

export const BarraBusqueda = () => {
  return (
    <div className='barra-busqueda-container'>
        <span>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </span>
        <h5>Search...</h5>
    </div>
  )
}