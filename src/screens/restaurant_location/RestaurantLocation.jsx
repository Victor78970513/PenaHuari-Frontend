import React from 'react'
import './RestaurantLocation.css'
import MapTopBar from '../../components/molecules/MapTopBar'
import Map from '../../components/molecules/Map'

const RestaurantLocation = () => {
  return (
    <div className='location-screen-container'>
      <MapTopBar text={"Restaurant Location"} css={"map-topbar"}/>
      <Map/>
    </div>
  )
}

export default RestaurantLocation
