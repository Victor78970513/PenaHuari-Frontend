import React from 'react'
import "./HomeScreen.css"
import TopBar from '../../components/molecules/TopBar'
import Search from '../../components/atoms/Search'
import Presupuesto from '../../components/atoms/Presupuesto'
import Section from '../../components/organisms/Section'
const HomeScreen = () => {
  return (
    <div className='home-screen'>
      <TopBar/>
      <Search/>
      <Presupuesto/>
      <Section/>
    </div>
  )
}

export default HomeScreen
