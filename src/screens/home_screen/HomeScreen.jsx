import React from 'react'
import "./HomeScreen.css"
import BarrasContainer from '../../components/molecules/BarrasContainer'
import OrganismoPI from '../../components/organisms/OrganismoPI'
const HomeScreen = () => {
  return (
    <div className='Pantalla-Home-conteiner'>
        <BarrasContainer/>
        <OrganismoPI/>
    </div>
  )
}

export default HomeScreen
