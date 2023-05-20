import React from 'react'
import "./Contenedor1.css"
import Contenedor2 from './Contenedor2'
import Contenedor3 from './Contenedor3'

export const Contenedor1 = (props) => {
  const contenedor1 =props.contenedor1
  return (
    <div className='contenedor1-conteiner'>
      <Contenedor2/>
      <Contenedor3/>
    </div>
  )
}

export default Contenedor1
