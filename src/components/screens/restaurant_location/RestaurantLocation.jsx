import React from 'react'
import { LocationRest } from '../../atoms/LocationRest'
import { Button } from '../../atoms/Button'
import './RestaurantLocation.css'

const RestaurantLocation = () => {
  return (
    <div className='container-rest-location'>
        <LocationRest/>
        <Button
            name={"Let's get route"}
            estilo = {"button-simple"}
        />
    </div>
  )
}

export default RestaurantLocation
