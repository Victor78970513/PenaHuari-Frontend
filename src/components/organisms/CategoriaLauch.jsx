import React from 'react'
import "./CategoriaLauch.css"
import Boton from '../atoms/BotonesHomeScreen'
import LauchMoleculasP from '../molecules/LauchMoleculasP'
import Lauch from '../../static/icons/logoLauch.svg'
import { NavLink } from 'react-router-dom'

const CategoriaLauch = () => {
  return (
    <div className='Categoria-Lauch'>
      <NavLink to = "/seccion/lunch">
          <div className='categoria-launch-title'>
              <Boton type ={"boton-lauch"} name_button={"Lauch"}/>
              <Boton icono ={Lauch} type={"boton-logolaunch"}/>
          </div>
      </NavLink>
      <LauchMoleculasP/>
    </div>
  )
}

export default CategoriaLauch