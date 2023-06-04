import React from 'react'
import { LocationRest } from '../../atoms/LocationRest'
import { Button } from '../../atoms/Button'
import './RestaurantLocation.css'
import { ButtonArrow } from '../../atoms/ButtonArrow'

const RestaurantLocation = () => {
  return (
    <div className='container-rest-location'>
      <div className="location-title-area">
        <ButtonArrow
          icono={"material-symbols:arrow-back"}
          name={"Restaurant Location"}
        />
      </div>
      <LocationRest/>
      <Button
          name={"Let's get route"}
          estilo = {"button-simple"}
      />
    </div>
  )
}

export default RestaurantLocation
