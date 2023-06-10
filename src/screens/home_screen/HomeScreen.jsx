import React from 'react'
import "./HomeScreen.css"
import OrganismosTitle from '../../components/organisms/OrganismosTitle'
import OrganismoPlatosP from '../../components/organisms/OrganismoPlatosP'
const HomeScreen = () => {
  return (
    <div className='Pantalla-Home-conteiner'>
        <OrganismosTitle/>
        <OrganismoPlatosP/>
    </div>
  )
}

export default HomeScreen
