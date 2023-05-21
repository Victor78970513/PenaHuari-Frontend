import React from 'react'
import "./Contenedor2.css"
import All from './All'
import logors from '../assets/logos.json'
export const Contenedor2 = (props) => {
  return (
    <div className='contenedor2-conteiner'>
        <All/>
        <img src='../static/images/Tenedores.png' alt=''/>
    </div>
  )
}

export default Contenedor2