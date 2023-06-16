import React from 'react'
import MapTopBar from '../../components/molecules/MapTopBar'
import MapBox from '../../components/molecules/Map'
import "./RestaurantLocation.css"
const RestaurantLocation = () => {
  return (
    <div className='location-screen-container'>
      <MapTopBar text={"Restaurant Location"} css={"map-topbar"}/>
      <MapBox/>
    </div>
  )
}

export default RestaurantLocation