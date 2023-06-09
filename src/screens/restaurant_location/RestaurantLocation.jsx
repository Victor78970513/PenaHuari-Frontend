import React from 'react'
import { LocationRest } from '../../components/atoms/LocationRest'
import { Button } from '../../components/atoms/Button'
import './RestaurantLocation.css'
import { ButtonArrow } from '../../components/atoms/ButtonArrow'
import MapTopBar from '../../components/molecules/MapTopBar'
import Map from '../../components/molecules/Map'

const RestaurantLocation = () => {
  return (
    // <div className='container-rest-location'>
    //   <div className="location-title-area">
    //     <ButtonArrow
    //       icono={"material-symbols:arrow-back"}
    //       name={"Restaurant Location"}
    //     />
    //   </div>
    //   <LocationRest/>
    //   <Button
    //       name={"Let's get route"}
    //       estilo = {"button-simple"}
    //   />
    // </div>
    <div className='location-screen-container'>
      <MapTopBar text={"Restaurant Location"} css={"map-topbar"}/>
      <Map/>
    </div>
  )
}

export default RestaurantLocation
