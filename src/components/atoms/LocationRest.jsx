import React from 'react'
import './LocationRest.css'
import Mapa from './Mapa'

export const LocationRest = () => {
  return (
    <div className='container-location'>
      <div className="map">
        <Mapa/>
      </div>
      <span className='info-location'>Calle Sagarnaga #339</span>
    </div>
  )
}

